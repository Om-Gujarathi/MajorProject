# Tasks - Find the Job Requirements, Resume Swot Analysis
from crewai import Task
from agents import agents

def tasks(llm, resume_content, leetcode_data):
    '''
    job_requirements_research - Find the relevant skills, projects and experience
    resume_swot_analysis- understand the report and the resume based on this make a swot analysis
    '''

    candidate_analyser, resume_swot_analyser = agents(llm)

    resume_swot_analysis = Task(

        description=f'Resume Content: {resume_content} \n Analyse the resume provided and give detailed SWOT analysis report on the resume along with the Suggestions to improve. Strictly follow json format as the entire answer should complete a json check further. Remove the rest of the data which doesnt follow json format.',
        expected_output='A JSON formatted report as follows: "candidate": candidate, "strengths":[strengths], "weaknesses":[weaknesses], "opportunities":[opportunities], "threats":[threats],',
        agent=resume_swot_analyser,
        output_file='resume-report/resume_review.json'
    )

    # LeetCode Analysis Task
    leetcode_analysis = Task(
        description=f'LeetCode Profile Content: {leetcode_data} \n Analyse the LeetCode profile provided and give score out of 10. Generate a JSON formatted report with the following: candidate_name, "leetcode_score": leetcode_score, "suggestions": [suggestions]. Strictly follow json format as the entire answer should complete a json check further.',
        expected_output='A JSON formatted report as follows: candidate_name, "leetcode_score": leetcode_score, "suggestions": [suggestions].',
        agent=candidate_analyser,
        output_file='profile-reports/leetcode_review.json'
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

    return leetcode_analysis, resume_swot_analysis
