from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import json

from resume_swot_analyse import analyze_resume

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload():
    try:
        # Get the uploaded resume and job description
        resume = request.files['resume']
        job_description = request.form['job_description']
        # job_description = request.files['job_description']

        # Save the resume file temporarily
        resume_path = os.path.join("temp", resume.filename)
        os.makedirs("temp", exist_ok=True)
        resume.save(resume_path)

        # Process the resume synchronously
        try:
            print("Processing Started")
            result = analyze_resume(resume_path, job_description)
        except Exception as e:
            result = {"error": str(e)}

        # Return the result directly
        return jsonify({"message": "Processing completed successfully.", "result": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/rank', methods=['GET'])
def status(job_id):
    file_path = "profile-reports/resume_review.json"

    try:
        if job_id == "completed":  # Mock status check for demonstration
            # Load JSON data from file
            with open(file_path, 'r', encoding='utf-8') as file:
                file_data = json.load(file)
            return jsonify({"status": "completed", "result": file_data})
        else:
            return jsonify({"status": "unknown job ID"}), 404
    except FileNotFoundError:
        return jsonify({"status": "error", "message": "Result file not found."}), 500
    except json.JSONDecodeError:
        return jsonify({"status": "error", "message": "Error decoding JSON data."}), 500


if __name__ == '__main__':
    app.run(debug=True)
