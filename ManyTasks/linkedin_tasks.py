# Tasks - Find the Job Requirements, Resume Swot Analysis
from crewai import Task
from ManyAgents.linkedin_agent import linkedin_agent


def linkedin_tasks(llm, linkedin_data):
    linkedin_analyser = linkedin_agent(llm)

    # LinkedIn Analysis Task
    linkedin_analysis = Task(
        description=f'LinkedIn Profile Content: {linkedin_data} \n Analyse the LinkedIn profile provided and generate a JSON formatted report with the following: candidate_name,"linkedin_score": linkedin_score, "suggestions": "suggestions". Give linkedin score out of 10',
        expected_output='A JSON formatted report as follows: "candidate_name": candidate_name, "strengths":[strengths], "linkedin_score": linkedin_score, "suggestions": "suggestions"',
        agent=linkedin_analyser,
        output_file='profile-reports/linkedin_review.json'
    )

    return linkedin_analysis
