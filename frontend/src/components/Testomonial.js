import React from 'react'

const Testomonial = () => {
    return (
        <section className="testimonials py-20 bg-white text-center">
            <h2 className="text-3xl font-bold mb-10 text-orange-600">What Our Users Say</h2>
            <div className="grid grid-cols-3 justify-center items-center px-4 gap-5">

                {/* Testimonial Card 1 */}
                <div className="testimonial-card bg-gray-100 p-6 rounded-lg shadow-lg w-full">
                    <div className="text-lg mb-4 text-gray-800">"Resume Analyzer helped me land my dream job! The insights were incredibly accurate, and the suggestions were spot on."</div>
                    <div className="font-semibold text-orange-600">John Doe</div>
                </div>

                {/* Testimonial Card 2 */}
                <div className="testimonial-card bg-gray-100 p-6 rounded-lg shadow-lg w-full ">
                    <div className="text-lg mb-4 text-gray-800">"A must-have tool for anyone serious about their career. It made my resume stand out!"</div>
                    <div className="font-semibold text-orange-600">Jane Smith</div>
                </div>

                {/* Testimonial Card 3 */}
                <div className="testimonial-card bg-gray-100 p-6 rounded-lg shadow-lg w-full">
                    <div className="text-lg mb-4 text-gray-800">"The analysis was insightful and helped me tailor my resume for the job I wanted. Highly recommended!"</div>
                    <div className="font-semibold text-orange-600">Emily Johnson</div>
                </div>

                {/* Testimonial Card 4 */}
                <div className="testimonial-card bg-gray-100 p-6 rounded-lg shadow-lg w-full">
                    <div className="text-lg mb-4 text-gray-800">"I received valuable feedback on my resume that improved my chances of getting interviews. Great tool!"</div>
                    <div className="font-semibold text-orange-600">Michael Brown</div>
                </div>

                {/* Testimonial Card 5 */}
                <div className="testimonial-card bg-gray-100 p-6 rounded-lg shadow-lg w-full">
                    <div className="text-lg mb-4 text-gray-800">"The detailed resume analysis and recommendations were exactly what I needed. I’m now confident in my job search!"</div>
                    <div className="font-semibold text-orange-600">Sophia Martinez</div>
                </div>

                {/* Testimonial Card 6 */}
                <div className="testimonial-card bg-gray-100 p-6 rounded-lg shadow-lg w-full">
                    <div className="text-lg mb-4 text-gray-800">"A game-changer for anyone looking to polish their resume and stand out from the competition. Highly effective!"</div>
                    <div className="font-semibold text-orange-600">Daniel Wilson</div>
                </div>

            </div>
        </section>
    )
}

export default Testomonial