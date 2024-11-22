# Agents
# 1. Job Requirements Researcher
# 2. SWOT Analyser

## Importing the dependencies

from crewai import Agent


# Create ManyAgents which uses these tools

def github_agent(llm):

    github_analyser = Agent(
        role='Github Profile Analyser',
        goal=f"Evaluate a candidate's overall Github profile by delegating task to Github task. Aggregate their results into a unified report with an overall score out of 10 and feedback. Strictly follow json format as the entire answer should complete a json check further.",
        backstory=" You are a senior hiring manager overseeing candidate evaluation. ",
        verbose=True,
        llm=llm,
        max_iters=1,
        allow_delegation=True
    )

    return github_analyser
