import React from 'react'

const Features = () => {
    return (
        <section className="features py-20 bg-orange-50 text-center">
            <h2 className="text-3xl font-bold mb-10 text-orange-600">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

                {/* Data Scraping and Profile Analysis */}
                <div className="feature-item bg-white p-6 rounded-lg shadow-lg">
                    <img src="https://img.freepik.com/free-vector/people-analyzing-growth-charts-illustrated_23-2148865275.jpg?t=st=1724523011~exp=1724523611~hmac=457977c08fb5e980814c0b187252df0b90bca4be435fe253378a93d817915839" alt="Data Scraping and Profile Analysis" className="w-36 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Data Scraping & Profile Analysis</h3>
                    <p className="text-gray-700">Scrape data from coding platforms, social media, and code repositories. Analyze consistency and contributions, generating a profile score based on job description alignment.</p>
                </div>

                {/* Resume Analysis */}
                <div className="feature-item bg-white p-6 rounded-lg shadow-lg">
                    <img src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?w=1060&t=st=1724523018~exp=1724523618~hmac=b4b71f0c604aafaa3c65ba80472f9ca038940d1b23d610df2dfcb2607a6d9485" alt="Resume Analysis" className="w-36 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Resume Analysis</h3>
                    <p className="text-gray-700">Parse resumes for technical skills, experience, and achievements. Assign weight to notable accomplishments and evaluate education, certifications, and projects.</p>
                </div>

                {/* Candidate Shortlisting */}
                <div className="feature-item bg-white p-6 rounded-lg shadow-lg">
                    <img src="https://img.freepik.com/free-vector/checklist-concept-illustration_114360-2596.jpg?t=st=1724523123~exp=1724526723~hmac=e9bb1e85aeae104eb8eabc42c5a9979b713ccce7a8e8838cb608cbcfd348e8a9&w=740" alt="Candidate Shortlisting" className=" w-36 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Candidate Shortlisting</h3>
                    <p className="text-gray-700">Combine profile scores and resume analysis to rank candidates. Provide feedback and recommendations for improvement, ensuring the best match for the role.</p>
                </div>

                {/* Integration with Hiring Systems */}
                <div className="feature-item bg-white p-6 rounded-lg shadow-lg">
                    <img src="https://img.freepik.com/free-vector/we-are-hiring-banners-set_23-2148636941.jpg?t=st=1724523169~exp=1724526769~hmac=caa93ba407edf3c0924fbce331ef5857cffc7660916a6ce4fbc7ed920f148d3a&w=740" alt="Integration with Hiring Systems" className="w-36 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Integration with Hiring Systems</h3>
                    <p className="text-gray-700">Seamlessly integrate with Applicant Tracking Systems (ATS) to streamline recruitment. Provide an interface for recruiters to review shortlisted candidates and their scores.</p>
                </div>

                {/* Keyword Optimization */}
                <div className="feature-item bg-white p-6 rounded-lg shadow-lg">
                    <img src="https://img.freepik.com/free-vector/website-analyst-concept-web-page-improvement-business-promotion-optimization-website-analysis-get-data-seo-isolated-flat-illustration_613284-2549.jpg?t=st=1724523204~exp=1724526804~hmac=c770ee96c29bc21aab27ab848c2b48b13ff7569d1065c93a068888ff4d506ad5&w=826" alt="Keyword Optimization" className="w-36 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Keyword Optimization</h3>
                    <p className="text-gray-700">Identify and incorporate industry-specific keywords to enhance ATS compatibility and attract recruiters by optimizing your resume content.</p>
                </div>

                {/* Job Description Matching */}
                <div className="feature-item bg-white p-6 rounded-lg shadow-lg">
                    <img src="https://img.freepik.com/free-vector/man-having-online-job-interview_52683-43379.jpg?t=st=1724523234~exp=1724526834~hmac=0364d2a943ffcf5ffd1c86ac499bbda0f39db2553a22024664cc57552edcb213&w=740" alt="Job Description Matching" className="w-36 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Job Description Matching</h3>
                    <p className="text-gray-700">Match your resume with job descriptions to find the best fit, improving your chances of landing the right role through detailed comparisons.</p>
                </div>

            </div>
        </section>
    )
}

export default Features