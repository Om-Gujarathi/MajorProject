from crewai import Crew, Process
from langchain_groq import ChatGroq
from utils.read_from_pdf import get_resume_text_and_links
from agents import agents
from tasks import tasks
from utils.links_extractor import extract_usernames
from getdata.collector import collect_user_data
import json

def analyze_resume(resume_file_path: str, jd: str):
    try:
        # Load the LLM
        llm = ChatGroq(model="groq/llama3-8b-8192", temperature=0)

        # Extract resume text and links
        resume_text, resume_links = get_resume_text_and_links(resume_file_path)
        usernames = extract_usernames(resume_links)
        data = collect_user_data(usernames)
        print(data["leetcode"], "\n\n\n")
        # Create agents and tasks
        resume_swot_analyser = agents(llm)
        resume_swot_analysis = tasks(llm, resume_text, data["leetcode"])

        # Build Crew and execute
        crew = Crew(
            agents=[resume_swot_analyser],
            tasks=[resume_swot_analysis],
            verbose=1,
            process=Process.sequential
        )

        result = crew.kickoff()
        json_result = json.dumps(result, default=str ,separators=(",", ":"))
        return json_result
    except Exception as e:
        return {"error": str(e)}
