import React from 'react';

const Timeline = () => {
    return (
        <div className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto relative py-20">
            <h1 className="text-4xl text-center font-extrabold text-gray-800 mb-12">Conduct Your Mock Interview in a Few Easy Steps</h1>
            <div className="relative border-l-2 border-gray-300">
                <div className="animate-fadeIn">
                    <div className="relative mb-12 flex items-start">
                        <div className="w-6 h-6 bg-blue-500 absolute -left-1 rounded-full border-4 border-white"></div>
                        <div className="flex-1 ml-10 py-4 px-6 bg-blue-100 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-200">
                            <h2 className="text-xl font-semibold text-blue-800">Step 1</h2>
                            <p className="text-gray-700">Register for NudgeQuest: Sign up to create an account on the NudgeQuest platform.</p>
                        </div>
                        <div className="absolute top-1/2 -left-3 w-3 h-3 rounded-full bg-blue-500 transform -translate-y-1/2"></div>
                    </div>
                    <div className="relative mb-12 flex items-start">
                        <div className="w-6 h-6 bg-green-500 absolute -left-1 rounded-full border-4 border-white"></div>
                        <div className="flex-1 ml-10 py-4 px-6 bg-green-100 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-green-200">
                            <h2 className="text-xl font-semibold text-green-800">Step 2</h2>
                            <p className="text-gray-700">Add New Interview: Start by adding a new interview session to your schedule.</p>
                        </div>
                        <div className="absolute top-1/2 -left-3 w-3 h-3 rounded-full bg-green-500 transform -translate-y-1/2"></div>
                    </div>
                    <div className="relative mb-12 flex items-start">
                        <div className="w-6 h-6 bg-yellow-500 absolute -left-1 rounded-full border-4 border-white"></div>
                        <div className="flex-1 ml-10 py-4 px-6 bg-yellow-100 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-yellow-200">
                            <h2 className="text-xl font-semibold text-yellow-800">Step 3</h2>
                            <p className="text-gray-700">Enter Your Job Role: Specify the job role you’re preparing for.</p>
                        </div>
                        <div className="absolute top-1/2 -left-3 w-3 h-3 rounded-full bg-yellow-500 transform -translate-y-1/2"></div>
                    </div>
                    <div className="relative mb-12 flex items-start">
                        <div className="w-6 h-6 bg-red-500 absolute -left-1 rounded-full border-4 border-white"></div>
                        <div className="flex-1 ml-10 py-4 px-6 bg-red-100 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-red-200">
                            <h2 className="text-xl font-semibold text-red-800">Step 4</h2>
                            <p className="text-gray-700">Enter Your Tech Stacks: List the tech stacks relevant to your job role, along with a brief description.</p>
                        </div>
                        <div className="absolute top-1/2 -left-3 w-3 h-3 rounded-full bg-red-500 transform -translate-y-1/2"></div>
                    </div>
                    <div className="relative mb-12 flex items-start">
                        <div className="w-6 h-6 bg-purple-500 absolute -left-1 rounded-full border-4 border-white"></div>
                        <div className="flex-1 ml-10 py-4 px-6 bg-purple-100 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-purple-200">
                            <h2 className="text-xl font-semibold text-purple-800">Step 5</h2>
                            <p className="text-gray-700">Enter Job Description: Provide a detailed job description to tailor the interview questions.</p>
                        </div>
                        <div className="absolute top-1/2 -left-3 w-3 h-3 rounded-full bg-purple-500 transform -translate-y-1/2"></div>
                    </div>
                    <div className="relative mb-12 flex items-start">
                        <div className="w-6 h-6 bg-pink-500 absolute -left-1 rounded-full border-4 border-white"></div>
                        <div className="flex-1 ml-10 py-4 px-6 bg-pink-100 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-pink-200">
                            <h2 className="text-xl font-semibold text-pink-800">Step 6</h2>
                            <p className="text-gray-700">Enter Years of Experience Needed: Indicate the number of years of experience required for the job role.</p>
                        </div>
                        <div className="absolute top-1/2 -left-3 w-3 h-3 rounded-full bg-pink-500 transform -translate-y-1/2"></div>
                    </div>
                    <div className="relative mb-12 flex items-start">
                        <div className="w-6 h-6 bg-teal-500 absolute -left-1 rounded-full border-4 border-white"></div>
                        <div className="flex-1 ml-10 py-4 px-6 bg-teal-100 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-teal-200">
                            <h2 className="text-xl font-semibold text-teal-800">Step 7</h2>
                            <p className="text-gray-700">Start Interview: Begin the mock interview session.</p>
                        </div>
                        <div className="absolute top-1/2 -left-3 w-3 h-3 rounded-full bg-teal-500 transform -translate-y-1/2"></div>
                    </div>
                    <div className="relative mb-12 flex items-start">
                        <div className="w-6 h-6 bg-gray-600 absolute -left-1 rounded-full border-4 border-white"></div>
                        <div className="flex-1 ml-10 py-4 px-6 bg-gray-100 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800">Step 8</h2>
                            <p className="text-gray-700">Get and Analyze Your Feedback: Receive feedback on your performance and analyze it to identify areas for improvement.</p>
                        </div>
                        <div className="absolute top-1/2 -left-3 w-3 h-3 rounded-full bg-gray-600 transform -translate-y-1/2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
