# Agents
# 1. Job Requirements Researcher
# 2. SWOT Analyser

## Importing the dependencies

from crewai import Agent


# Create ManyAgents which uses these tools

def agents(llm):
    resume_swot_analyser = Agent(
        role='Resume SWOT Analyser',
        goal=f'Perform a SWOT Analysis on the Resume and provide a json report. Strictly follow json format as the entire answer should complete a json check further. Remove the rest of the data which doesnt follow json format.',
        backstory='An expert in hiring so has a great idea on resumes.',
        verbose=True,
        llm=llm,
        max_iters=1,
        allow_delegation=True
    )

    # candidate_analyser = Agent(
    #     role='Leetcode Profile Analyser',
    #     goal=f"Evaluate a candidate's overall leetcode profile by delegating task to leetcode task. Aggregate their results into a unified report with an overall score and feedback. Strictly follow json format as the entire answer should complete a json check further.",
    #     backstory=" You are a senior hiring manager overseeing candidate evaluation. ",
    #     verbose=True,
    #     llm=llm,
    #     max_iters=1,
    #     allow_delegation=True
    # )

    return resume_swot_analyser
