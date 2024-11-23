import React from 'react';
import GaugeChart from 'react-gauge-chart';

const analysisData = {
    overallConsistency: {
        overallEvaluation: 4.5,
        evaluationText: "Based on the analysis of your technical skills, achievements, and digital footprint, you are a strong candidate for software engineering roles. Your well-rounded profile and consistent performance across various platforms make you an attractive prospect for employers."
    },
    resumeAnalysis: {
        technicalSkills: {
            "JavaScript": 90,
            "React": 85,
            "Node.js": 80,
            "TypeScript": 75
        },
        achievements: {
            "GSOC": 90,
            "Hackathons": 85,
            "Teaching Assistant": 80,
            "Open Source Contributions": 75
        },
        digitalFootprint: {
            "LinkedIn Profile": 90,
            "GitHub Profile": 85,
            "Coding Platform Profiles": 80,
            "Personal Website": 75
        }
    },
    recommendations: [
        {
            title: "Improve GitHub Profile",
            description: "Ensure your GitHub profile is up-to-date, with a clear profile picture, bio, and links to your projects."
        },
        {
            title: "Highlight Achievements",
            description: "Make sure to prominently feature your GSOC, hackathon, and teaching assistant experience on your resume."
        },
        {
            title: "Update LinkedIn Profile",
            description: "Ensure your LinkedIn profile is up-to-date and aligns with the information on your resume."
        }
    ]
};

const AnalysisPage = () => {
    return (
        <div className="max-w-6xl p-6 space-y-6 text-gray-900 mx-auto min-h-screen">

            {/* Overall Consistency Section */}
            <section className="bg-white p-8 rounded-lg shadow-md border border-orange-300">
                <h2 className="text-2xl font-semibold text-orange-600 mb-2">Overall Consistency & Evaluation</h2>
                <div className="w-full border-b-2 border-orange-300 mb-6"></div>
                <div className="flex items-center justify-between gap-6">
                    <div className="w-1/2">
                    <GaugeChart
              id="gauge-chart"
              nrOfLevels={10}
              colors={['#ff0000', '#f7c30d', '#4b8d4b']}
              arcWidth={0.1}
              percent={analysisData.overallConsistency.overallEvaluation  / 10} // Example percentage
              textColor="#ea580c"
              className="font-semibold text-sm"
            />
            <style jsx>{`
              #gauge-chart text {
                display: none;
                
              }
            `}</style>
            <p className="flex items-center justify-center text-3xl text-gray-700 ml-2">
              {analysisData.overallConsistency.overallEvaluation / 10 *100} %
            </p>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <p className="text-4xl font-semibold text-blue-600 mb-4">{analysisData.overallConsistency.overallEvaluation}</p>
                        <p className="text-md text-gray-700">
                            {analysisData.overallConsistency.evaluationText}
                        </p>
                    </div>
                </div>
            </section>

            {/* Resume Analysis Section */}
            <section className="bg-white p-8 rounded-lg shadow-md border border-orange-300">
                <h2 className="text-2xl font-semibold text-orange-600 mb-2">Your Resume Analysis</h2>
                <div className="w-full border-b-2 border-orange-300 mb-6"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Technical Skills Card */}
                    <div className='border-2 p-4 rounded-lg'>
                        <h3 className="text-xl font-bold text-gray-800">Technical Skills</h3>
                        <div className="w-full border-b-2 border-orange-300 my-2"></div>

                        {Object.entries(analysisData.resumeAnalysis.technicalSkills).map(([skill, level]) => (
                            <div key={skill} className="mb-4">
                                <p className="text-md py-1 font-semibold text-gray-600 flex items-start justify-between">{skill}<span>{level}%</span></p>
                                <div className="w-full bg-gray-300 h-2 rounded-md">
                                    <div
                                        className="bg-blue-500 h-2 rounded-md"
                                        style={{ width: `${level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Achievements Card */}
                    <div className='border-2 p-4 rounded-lg'>
                        <h3 className="text-xl font-bold text-gray-800">Achievements</h3>
                        <div className="w-full border-b-2 border-orange-300 my-2"></div>

                        {Object.entries(analysisData.resumeAnalysis.achievements).map(([achievement, level]) => (
                            <div key={achievement} className="mb-4">
                                <p className="text-md py-1 font-semibold text-gray-600 flex items-start justify-between">{achievement}<span>{level}%</span></p>
                                <div className="w-full bg-gray-300 h-2 rounded-md">
                                    <div
                                        className="bg-green-500 h-2 rounded-md"
                                        style={{ width: `${level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Digital Footprint Card */}
                    <div className='border-2 p-4 rounded-lg'>
                        <h3 className="text-xl font-bold text-gray-800">Digital Footprint</h3>
                        <div className="w-full border-b-2 border-orange-300 my-2"></div>

                        {Object.entries(analysisData.resumeAnalysis.digitalFootprint).map(([footprint, level]) => (
                            <div key={footprint} className="mb-4">
                                <p className="text-md py-1 font-semibold text-gray-600 flex items-start justify-between">{footprint}<span>{level}%</span></p>
                                <div className="w-full bg-gray-300 h-2 rounded-md">
                                    <div
                                        className="bg-purple-500 h-2 rounded-md"
                                        style={{ width: `${level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recommendations Section */}
            <section className="bg-white p-8 rounded-lg shadow-md border border-orange-300">
                <h2 className="text-2xl font-semibold text-orange-600 mb-2">Recommendations</h2>
                <div className="w-full border-b-2 border-orange-300 mb-6"></div>

                <ul className="space-y-4">
                    {analysisData.recommendations.map((recommendation, index) => (
                        <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4">
                                {index + 1}
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">{recommendation.title}</h4>
                                <p className="text-sm text-gray-700">{recommendation.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default AnalysisPage;
