from flask import Flask, request, jsonify
from flask_cors import CORS
from queue import Queue
from threading import Thread
import os

from resume_swot_analyse import analyze_resume

app = Flask(__name__)
CORS(app)

# Job queue to handle tasks
job_queue = Queue()
results = {}
i = 0

def process_queue():
    while True:
        job_id, resume_path, job_description = job_queue.get()
        try:
            print(job_id, " Processing Started \n")
            result = analyze_resume(resume_path, job_description)
        except Exception as e:
            result = {"error in process queue": str(e)}
        finally:
            # Save the result and remove the temporary file
            results[job_id] = result
            # os.remove(resume_path)
            job_queue.task_done()
            print(results[job_id])
            print(job_id, " Completed \n")


# Start the queue processor in a separate thread
worker_thread = Thread(target=process_queue, daemon=True)
worker_thread.start()


@app.route('/upload', methods=['POST'])
def upload():
    try:
        global i
        # print("Hi")
        # Get the uploaded resume and job description
        resume = request.files['resume']
        job_description = request.form['job_description']

        # Save the resume file temporarily
        resume_path = os.path.join("temp", resume.filename)
        os.makedirs("temp", exist_ok=True)
        resume.save(resume_path)

        # Generate a unique job ID
        job_id = f"job-{i + 1}"
        i = i + 1
        # Add the task to the job queue
        job_queue.put((job_id, resume_path, job_description))
        return jsonify({"message": "Job submitted successfully.", "job_id": job_id})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/status/<job_id>', methods=['GET'])
def status(job_id):
    if job_id in results:
        return jsonify({"status": "completed", "result": results[job_id]})
    elif any(job_id == job[0] for job in job_queue.queue):
        return jsonify({"status": "in progress"})
    else:
        return jsonify({"status": "unknown job ID"}), 404


if __name__ == '__main__':
    app.run(debug=True)
