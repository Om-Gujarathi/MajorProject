# Tasks - Find the Job Requirements, Resume Swot Analysis
from crewai import Task
from ManyAgents.merger_agent import merger_agent


def merger_tasks(llm, leetcode, github, linkedin):
    merger_analyser = merger_agent(llm)

    # LinkedIn Analysis Task
    merger_analysis = Task(
        description=f'Merger multiple JSON files and combines them into a unified JSON structure. Ensures that invalid or non-JSON input is disregarded, providing a clean, structured JSON output that merges all these JSONs below. Below are the three json files {leetcode, github, linkedin}.',
        expected_output='A single, valid JSON object that merges all input JSON files.',
        agent=merger_analyser,
        output_file='Jobs/final.json'
    )

    return merger_analysis
