import React from 'react'

const NewsLetter = () => {
    return (
        <section className="newsletter py-20 bg-white text-center">
            <h2 className="text-3xl font-bold mb-10 text-orange-600">Stay Updated</h2>
            <p className="text-lg mb-6">Sign up for our newsletter to receive the latest updates and tips.</p>
            <form className="max-w-md mx-auto">
                <input type="email" placeholder="Enter your email" className="px-4 py-2 border border-gray-300 rounded-md mb-4 w-full" />
                <button type="submit" className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition">Subscribe</button>
            </form>
        </section>
    )
}

export default NewsLetter