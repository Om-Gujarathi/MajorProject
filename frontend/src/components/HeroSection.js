import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <section
            className="hero flex flex-col justify-center items-center text-center px-6 py-20 bg-cover bg-center relative"
            style={{ backgroundColor: '#fcbd68' }}
        >
            {/* Content */}
            <div className="relative z-10">
                <h1 className="text-5xl font-bold mb-6 text-white transition-transform transform hover:scale-105">
                    Welcome to <span className="text-orange-600">TalentLens</span>
                </h1>
                <p className="text-lg mb-12 text-white transition-opacity opacity-90 hover:opacity-100">
                    Analyze your resume and compare it with job descriptions to boost your chances of landing your dream job!
                </p>
                <div className="space-x-4">
                    <Link to="/upload">
                        <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-md shadow-md hover:bg-orange-700 transition-transform transform hover:scale-105 hover:shadow-lg">
                            Get Started
                        </button>
                    </Link>
                    <Link to="/analysis">
                        <button className="px-8 py-3 bg-orange-200  font-semibold rounded-md shadow-md hover:bg-orange-300 transition-transform transform hover:scale-105 hover:shadow-lg">
                            View Analysis
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
