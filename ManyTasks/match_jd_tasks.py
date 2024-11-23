# Tasks - Find the Job Requirements, Resume Swot Analysis
from crewai import Task
from ManyAgents.match_jd_agent import match_jd_agent

def match_jd_tasks(llm, resume, jd):
    jd_analyser = match_jd_agent(llm)


    # LeetCode Analysis Task
    jd_analysis = Task(
        description=f'At the end of this prompt I will provide a Resume and a Job Description. Calculate a score out of 10 telling how fit the candidate is for this role. Resume Content: {resume} \n Job Description: {jd} \n Generate a JSON formatted report with the following: candidate_name, "resume_match_score": resume_match_score, "reason": [reasons]. Strictly follow json format as the entire answer should complete a json check further.',
        expected_output='Generate a JSON formatted report with the following: candidate_name, "resume_match_score": resume_match_score, "positives": [positives], "negatives": [negatives]',
        agent=jd_analyser,
        output_file='profile-reports/jd_review.json'
    )

    # GitHub Analysis Task
    # github_analysis = Task(
    #     description=f'GitHub Profile Content: {github_data} \n Analyse the GitHub profile provided and generate a JSON formatted report with the following: candidate_name, "strengths":[strengths], "weaknesses":[weaknesses], "opportunities":[opportunities], "threats":[threats], "github_score": github_score, "suggestions": "suggestions".',
    #     expected_output='A JSON formatted report as follows: "candidate_name": candidate_name, "strengths":[strengths], "weaknesses":[weaknesses], "opportunities":[opportunities], "threats":[threats], "github_score": github_score, "suggestions": "suggestions"',
    #     agent=candidate_analyser,
    #     output_file='profile-reports/github_review.json'
    # )

    # Google Scholar Analysis Task
    # scholarly_analysis = Task(
    #     description=f'Google Scholar Profile Content: {scholarly_data} \n Analyse the Google Scholar profile provided and generate a JSON formatted report with the following: candidate_name, "strengths":[strengths], "weaknesses":[weaknesses], "opportunities":[opportunities], "threats":[threats], "scholarly_score": scholarly_score, "suggestions": "suggestions".',
    #     expected_output='A JSON formatted report as follows: "candidate_name": candidate_name, "strengths":[strengths], "weaknesses":[weaknesses], "opportunities":[opportunities], "threats":[threats], "scholarly_score": scholarly_score, "suggestions": "suggestions"',
    #     agent=candidate_analyser,
    #     output_file='profile-reports/scholarly_review.json'
    # )

    # LinkedIn Analysis Task
    # linkedin_analysis = Task(
    #     description=f'LinkedIn Profile Content: {linkedin_data} \n Analyse the LinkedIn profile provided and generate a JSON formatted report with the following: candidate_name, "strengths":[strengths], "weaknesses":[weaknesses], "opportunities":[opportunities], "threats":[threats], "linkedin_score": linkedin_score, "suggestions": "suggestions".',
    #     expected_output='A JSON formatted report as follows: "candidate_name": candidate_name, "strengths":[strengths], "weaknesses":[weaknesses], "opportunities":[opportunities], "threats":[threats], "linkedin_score": linkedin_score, "suggestions": "suggestions"',
    #     agent=candidate_analyser,
    #     output_file='profile-reports/linkedin_review.json'
    # )

    return jd_analysis
