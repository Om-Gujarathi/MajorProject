# Agents
# 1. Job Requirements Researcher
# 2. SWOT Analyser

## Importing the dependencies

from crewai import Agent

# Create agents which uses these tools

def agents(llm):
    
    resume_swot_analyser = Agent(
                                    role='Resume SWOT Analyser',
                                    goal=f'Perform a SWOT Analysis on the Resume based on the industry Job Requirements report from job_requirements_researcher and provide a json report.',
                                    backstory='An expert in hiring so has a great idea on resumes',
                                    verbose=True,
                                    llm=llm,
                                    max_iters=1,
                                    allow_delegation=True
                            )
    return resume_swot_analyser


