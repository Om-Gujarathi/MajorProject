from crewai import Crew, Process
from langchain_groq import ChatGroq

# Tasks
from tasks import tasks
from ManyTasks.leetcode_tasks import leetcode_tasks
from ManyTasks.linkedin_tasks import linkedin_tasks
from ManyTasks.github_tasks import github_tasks
from ManyTasks.merger_tasks import merger_tasks

# Agents
from agents import agents
from ManyAgents.leetcode_agent import leetcode_agent
from ManyAgents.linkedin_agent import linkedin_agent
from ManyAgents.github_agent import github_agent
from ManyAgents.merger_agent import merger_agent

from utils.read_from_pdf import get_resume_text_and_links
from utils.links_extractor import extract_usernames
from getdata.collector import collect_user_data
import json


def analyze_resume(resume_file_path: str, jd: str):
    try:
        # Load the LLM
        llm = ChatGroq(model="groq/llama-3.1-70b-versatile", temperature=0)

        # Extract resume text and links
        resume_text, resume_links = get_resume_text_and_links(resume_file_path)
        usernames = extract_usernames(resume_links)
        data = collect_user_data(usernames)
        print(data["leetcode"], "\n\n\n")
        # Create ManyAgents and ManyTasks
        resume_swot_analyser = agents(llm)
        resume_swot_analysis = tasks(llm, resume_text)

        # Build Crew and execute
        crew = Crew(
            agents=[resume_swot_analyser],
            tasks=[resume_swot_analysis],
            verbose=1,
            process=Process.sequential
        )

        result = crew.kickoff()
        json_swot = json.dumps(result, default=str, separators=(",", ":"))

        # leetcode
        leetcode_analyser = leetcode_agent(llm)
        leetcode_analysis = leetcode_tasks(llm, data["leetcode"])

        crew2 = Crew(
            agents=[leetcode_analyser],
            tasks=[leetcode_analysis],
            verbose=1,
            process=Process.sequential
        )
        result2 = crew2.kickoff()
        json_leetcode = json.dumps(result2, default=str, separators=(",", ":"))

        # linkedin

        llm2 = ChatGroq(model="groq/mixtral-8x7b-32768", temperature=0)

        linkedin_analyser = linkedin_agent(llm2)
        linkedin_analysis = linkedin_tasks(llm2, data["linkedin"])

        crew3 = Crew(
            agents=[linkedin_analyser],
            tasks=[linkedin_analysis],
            verbose=1,
            process=Process.sequential
        )
        result3 = crew3.kickoff()
        json_linkedin = json.dumps(result3, default=str, separators=(",", ":"))

        # github

        llm3 = ChatGroq(model="groq/llama-3.2-1b-preview", temperature=0)
        llm3 = ChatGroq(model="groq/llama3-70b-8192", temperature=0)
        github_analyser = github_agent(llm3)
        github_analysis = github_tasks(llm3, data["github"])

        crew4 = Crew(
            agents=[github_analyser],
            tasks=[github_analysis],
            verbose=1,
            process=Process.sequential
        )
        result4 = crew4.kickoff()
        json_github = json.dumps(result4, default=str, separators=(",", ":"))

        merger_a = merger_agent(llm3)
        merger_t = merger_tasks(llm3, json_leetcode, json_github, json_linkedin)

        crew4 = Crew(
            agents=[merger_a],
            tasks=[merger_t],
            verbose=1,
            process=Process.sequential
        )
        final_result = crew4.kickoff()
        final_json = json.dumps(final_result, default=str, separators=(",", ":"))

        return final_json
    except Exception as e:
        return {"error": str(e)}
