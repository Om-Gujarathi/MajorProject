# Agents
# 1. Job Requirements Researcher
# 2. SWOT Analyser

## Importing the dependencies

from crewai import Agent


# Create ManyAgents which uses these tools

def merger_agent(llm):

    merger_analyser = Agent(
        role='Merger multiple JSON files into a single valid Json object',
        goal=f"To efficiently merge multiple JSON files into a single JSON object, deleting all the unnecessary non-json formatted data",
        backstory="You are a JSON files merger",
        verbose=True,
        llm=llm,
        max_iters=1,
        allow_delegation=True
    )

    return merger_analyser
