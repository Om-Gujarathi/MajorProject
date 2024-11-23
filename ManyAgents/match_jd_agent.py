from crewai import Agent


def match_jd_agent(llm):
    jd_analyser = Agent(
        role="Job Description and Resume Compatibility Evaluator",
        goal=(
            "Evaluate the given Job Description and Resume, and provide a "
            "compatibility score out of 10. The result must be strictly formatted as valid JSON."
        ),
        backstory=(
            "You are acting as a senior hiring manager responsible for candidate evaluation."
        ),
        verbose=True,
        llm=llm,
        max_iters=1,
        allow_delegation=True
    )

    return jd_analyser
