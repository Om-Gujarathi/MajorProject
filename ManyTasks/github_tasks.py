# Tasks - Find the Job Requirements, Resume Swot Analysis
from crewai import Task
from ManyAgents.github_agent import github_agent


def github_tasks(llm, github_data):
    github_analyser = github_agent(llm)

    # LinkedIn Analysis Task
    github_analysis = Task(
        description=f'Github Profile Total Contributions: {github_data} \n Analyse the Github profile provided based on number of total Contributions and generate a JSON formatted report with the following: "github_score": github_score, "suggestions": "suggestions". Give github score out of 10',
        expected_output='A JSON formatted report as follows: {"github_score": github_score, "suggestions": "suggestions"}',
        agent=github_analyser,
        output_file='profile-reports/github_review.json'
    )

    return github_analysis
