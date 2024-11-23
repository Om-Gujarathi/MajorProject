import React from 'react';
import GaugeChart from 'react-gauge-chart';

// Data
const analysisData = {
    candidate_name: "Sanskar Gundecha",
    leetcode_score: 8.5,
    github_score: 8,
    linkedin_score: 8.5,
    jd_match_score: 7.5,
    leetcode_score_reasons: [
        "Continue to practice and improve problem-solving skills, especially in hard difficulty problems.",
        "Expand language skills beyond Java, as only 5 problems have been solved in C++ and 1 in JavaScript.",
        "Participate in more contests to improve ranking and top percentage.",
        "Focus on improving skills in advanced tags such as Game Theory, Bitmask, and Quickselect.",
        "Consider practicing problems in Database and Design tags to improve overall skills."
    ],
    github_score_reasons: [
        "The candidate has a decent number of total contributions, indicating a good level of activity on Github. However, to improve, it is suggested to increase the frequency and quality of contributions, and to explore different types of contributions such as pull requests, issues, and commits."
    ],
    linkedin_score_reasons: [
        "Consider adding a professional photo and a concise headline to make the profile more appealing. Also, include more details in the summary section to highlight your career goals, key skills, and achievements in a cohesive manner."
    ],
    jd_match_score_reasons: [
        "Strong programming skills in languages such as Java, Python, C++, and C",
        "Experience with web development frameworks such as ReactJS, Angular, and Django",
        "Familiarity with database management systems including MySQL, Firebase, and MongoDB",
        "Experience with development tools such as Visual Studio Code, Git, and GitHub",
        "Strong problem-solving skills, with a penchant for product quality",
        "Excellent communication and interpersonal skills, with experience working in teams",
        "Experience with machine learning and software design",
        "Strong academic background, with a current CPI of 8.83/10",
        "Limited experience with specific technologies mentioned in the job description, such as Cassandra, Kubernetes, and Kafka",
        "No direct experience in the finance or wealth management industry",
        "Limited experience with cloud-based technologies, such as Azure",
        "No mention of experience with Spark, Storm, or Solr in the resume"
    ],
    swot_analysis: {
        strengths: [
            "Strong technical skills in programming languages such as Java, Python, C++, C, SQL, Dart, and JavaScript",
            "Experience in web development frameworks such as ReactJS, Angular, Node/NPM, Django, and Express",
            "Familiarity with database management systems such as MySQL, Firebase, AppWrite, MongoDB, and PostgresSQL",
            "Strong problem-solving skills, with achievements in coding competitions such as Codathon, CodeChef, LeetCode, and HackerRank",
            "Leadership and teamwork skills, with experience as an App Developer at Computer Society of India - Technical Club, VIT Pune"
        ],
        weaknesses: [
            "Limited work experience, with only two internships and one part-time job",
            "Lack of experience in cloud computing and DevOps",
            "No mention of experience with Agile development methodologies",
            "No mention of experience with cybersecurity",
            "No mention of experience with data science and analytics"
        ],
        opportunities: [
            "Growing demand for skilled software developers in the industry",
            "Opportunities for professional growth and development in the field of software development",
            "Potential for freelance or consulting work in software development",
            "Opportunities for collaboration and networking with other professionals in the field",
            "Potential for pursuing higher education or certifications in software development"
        ],
        threats: [
            "High competition in the job market for software developers",
            "Rapidly changing technology landscape, requiring continuous learning and upskilling",
            "Potential for job automation and replacement by AI and machine learning",
            "Cybersecurity threats and data breaches, requiring strong security measures",
            "Potential for economic downturn or recession, affecting job security"
        ]
    }
};

// Calculate Total Score
const totalScore = (
    analysisData.leetcode_score +
    analysisData.github_score +
    analysisData.linkedin_score +
    analysisData.jd_match_score
) / 4;

const AnalysisPage = () => {
    return (
        <div className="max-w-6xl p-6 space-y-6 text-gray-900 mx-auto min-h-screen">
            {/* Total Score Gauge */}
            <section className="bg-white p-8 rounded-lg shadow-md border border-orange-300">
                <h2 className="text-2xl font-semibold text-orange-600 mb-2">Total Score</h2>
                <div className="w-full border-b-2 border-orange-300 mb-6"></div>
                <div className="flex items-center justify-between gap-6">
                <div className="w-1/2">
                        <GaugeChart
                            id="total-score-gauge-chart"
                            nrOfLevels={10}
                            colors={['#ff0000', '#f7c30d', '#4b8d4b']}
                            arcWidth={0.1}
                            percent={totalScore / 10}
                            textColor="#ea580c"
                            className="font-semibold text-sm"
                        />
                        <style jsx>{`
                            #total-score-gauge-chart text {
                                display: none;
                            }
                        `}</style>
                        <p className="flex items-center justify-center text-3xl text-gray-700 ml-2">
                            {Math.round(totalScore * 10)} %
                        </p>
                    </div>
                    <div className="w-1/2">
                        <div className="text-4xl font-semibold text-blue-600">{totalScore.toFixed(1)}</div>
                        <p className="text-md text-gray-700 mt-4">
                            The total score is an average of individual scores in LeetCode, GitHub, LinkedIn, and JD Match.
                        </p>
                    </div>

                    
                </div>
            </section>

            {/* SWOT Analysis */}
            <section className="bg-white p-8 rounded-lg shadow-md border border-orange-300">
                <h2 className="text-2xl font-semibold text-orange-600 mb-2">SWOT Analysis</h2>
                <div className="w-full border-b-2 border-orange-300 mb-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-blue-200">
                        <h3 className="font-semibold text-lg text-gray-800">Strengths</h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            {analysisData.swot_analysis.strengths.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-blue-200">
                        <h3 className="font-semibold text-lg text-gray-800">Weaknesses</h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            {analysisData.swot_analysis.weaknesses.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-green-200">
                        <h3 className="font-semibold text-lg text-gray-800">Opportunities</h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            {analysisData.swot_analysis.opportunities.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-red-200">
                        <h3 className="font-semibold text-lg text-gray-800">Threats</h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            {analysisData.swot_analysis.threats.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* LeetCode Section */}
            <section className="bg-white p-8 rounded-lg shadow-md border border-orange-300">
                <h2 className="text-2xl font-semibold text-orange-600 mb-2">LeetCode Score</h2>
                <div className="w-full border-b-2 border-orange-300 mb-6"></div>
                <div className="space-y-4">
                    <p className="text-4xl font-semibold text-blue-600">{analysisData.leetcode_score}</p>
                    <p className="text-md text-gray-700">
                        The candidate has a strong record on LeetCode. Areas for improvement include practicing more difficult problems and expanding language skills.
                    </p>
                    <h4 className="font-semibold text-lg text-gray-800">Reason for the score:</h4>
                    <ul className="list-none space-y-2">
                        {analysisData.leetcode_score_reasons.map((reason, index) => (
                            <li key={index} className="bg-white p-4 rounded-lg shadow-md border">
                                {reason}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* GitHub Section */}
            <section className="bg-white p-8 rounded-lg shadow-md border border-orange-300">
                <h2 className="text-2xl font-semibold text-orange-600 mb-2">GitHub Score</h2>
                <div className="w-full border-b-2 border-orange-300 mb-6"></div>
                <div className="space-y-4">
                    <p className="text-4xl font-semibold text-blue-600">{analysisData.github_score}</p>
                    <p className="text-md text-gray-700">
                        The candidate has a decent number of contributions, but it is suggested to increase the quality and variety of contributions.
                    </p>
                    <h4 className="font-semibold text-lg text-gray-800">Reason for the score:</h4>
                    <ul className="list-none space-y-2">
                        {analysisData.github_score_reasons.map((reason, index) => (
                            <li key={index} className="bg-white p-4 rounded-lg shadow-md border">
                                {reason}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* LinkedIn Section */}
            <section className="bg-white p-8 rounded-lg shadow-md border border-orange-300">
                <h2 className="text-2xl font-semibold text-orange-600 mb-2">LinkedIn Score</h2>
                <div className="w-full border-b-2 border-orange-300 mb-6"></div>
                <div className="space-y-4">
                    <p className="text-4xl font-semibold text-blue-600">{analysisData.linkedin_score}</p>
                    <p className="text-md text-gray-700">
                        The profile can be improved with a more professional appearance and detailed summary, but overall, the score reflects a strong LinkedIn presence.
                    </p>
                    <h4 className="font-semibold text-lg text-gray-800">Reason for the score:</h4>
                    <ul className="list-none space-y-2">
                        {analysisData.linkedin_score_reasons.map((reason, index) => (
                            <li key={index} className="bg-white p-4 rounded-lg shadow-md border">
                                {reason}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default AnalysisPage;
