# Tasks - Find the Job Requirements, Resume Swot Analysis
from crewai import Task
from agents import agents

def tasks(llm, job_desire, resume_content):
    '''
    job_requirements_research - Find the relevant skills, projects and experience
    resume_swot_analysis- understand the report and the resume based on this make a swot analysis
    '''

    resume_swot_analyser = agents(llm)

    resume_swot_analysis = Task(

        description=f'Resume Content: {resume_content} \n Analyse the resume provided and the report of job_requirements_researcher to provide a detailed SWOT analysis report on the resume along with the Resume Match Percentage and Suggestions to improve',
        expected_output='A JSON formatted report as follows: "candidate": candidate, "strengths":[strengths], "weaknesses":[weaknesses], "opportunities":[opportunities], "threats":[threats], "resume_match_percentage": resume_match_percentage, "suggestions": "suggestions"',
        agent=resume_swot_analyser,
        output_file='resume-report/resume_review.json'
    )
    return resume_swot_analysis
