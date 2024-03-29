import React from "react";

const HeroSection = () => {
    return (
        <section className="text-gray-600 body-font border-gray-300 my-8 border-t border-gray-300">
            <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                    <p className="mb-8 leading-relaxed">INTRODUCTING DEV.CARE</p>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Regulatory compliance throughout your product's lifecycle</h1>
                    <p className="mb-8 leading-relaxed">Build, regulate, sell and monitor.</p>
                    <div className="flex w-full justify-center items-end">
                        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                            <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600"></label>
                            <input
                                type="text"
                                id="hero-field"
                                name="hero-field"
                                className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                placeholder="What's your work email?"
                            />
                        </div>
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Join Waitlist</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection