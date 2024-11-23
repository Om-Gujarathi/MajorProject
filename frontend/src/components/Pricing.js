import React from 'react'

const Pricing = () => {
    return (
        <section className="pricing py-20 bg-orange-50 text-center">
            <h2 className="text-3xl font-bold mb-10 text-orange-600">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

                {/* Basic Plan */}
                <div className="pricing-item p-8 bg-white shadow-lg rounded-lg border border-gray-200 transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-semibold mb-4 text-orange-600">Basic</h3>
                    <p className="text-3xl font-bold mb-6 text-gray-800">$19.99 <span className="text-sm font-medium text-gray-500">/month</span></p>
                    <ul className="text-lg list-disc list-inside mb-6 text-left mx-auto max-w-xs">
                        <li className="mb-2">Resume Analysis</li>
                        <li>Job Description Matching</li>
                    </ul>
                    <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition">Choose Plan</button>
                </div>

                {/* Pro Plan */}
                <div className="pricing-item p-8 bg-white shadow-lg rounded-lg border border-gray-200 transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-semibold mb-4 text-orange-600">Pro</h3>
                    <p className="text-3xl font-bold mb-6 text-gray-800">$49.99 <span className="text-sm font-medium text-gray-500">/month</span></p>
                    <ul className="text-lg list-disc list-inside mb-6 text-left mx-auto max-w-xs">
                        <li className="mb-2">Everything in Basic</li>
                        <li>Keyword Optimization</li>
                        <li>Custom Reports</li>
                    </ul>
                    <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition">Choose Plan</button>
                </div>

                {/* Enterprise Plan */}
                <div className="pricing-item p-8 bg-white shadow-lg rounded-lg border border-gray-200 transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-semibold mb-4 text-orange-600">Enterprise</h3>
                    <p className="text-3xl font-bold mb-6 text-gray-800">$99.99 <span className="text-sm font-medium text-gray-500">/month</span></p>
                    <ul className="text-lg list-disc list-inside mb-6 text-left mx-auto max-w-xs">
                        <li className="mb-2">Everything in Pro</li>
                        <li>Industry-Specific Insights</li>
                        <li>Priority Support</li>
                    </ul>
                    <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition">Choose Plan</button>
                </div>

            </div>
        </section>

    )
}

export default Pricing