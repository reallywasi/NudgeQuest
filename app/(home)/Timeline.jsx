import React from 'react';

const Timeline = () => {
    const steps = [
        {
          step: "Step 1",
          description: "Register for NudgeQuest: Sign up to create an account on the NudgeQuest platform.",
          color: "bg-gray-700",
          hoverColor: "hover:bg-gray-600"
        },
        {
          step: "Step 2",
          description: "Add New Interview: Start by adding a new interview session to your schedule.",
          color: "bg-gray-600",
          hoverColor: "hover:bg-gray-500"
        },
        {
          step: "Step 3",
          description: "Enter Your Job Role: Specify the job role you’re preparing for.",
          color: "bg-gray-500",
          hoverColor: "hover:bg-gray-400"
        },
        {
          step: "Step 4",
          description: "Enter Your Tech Stacks: List the tech stacks relevant to your job role, along with a brief description.",
          color: "bg-gray-400",
          hoverColor: "hover:bg-gray-300"
        },
        {
          step: "Step 5",
          description: "Enter Job Description: Provide a detailed job description to tailor the interview questions.",
          color: "bg-gray-300",
          hoverColor: "hover:bg-gray-200"
        },
        {
          step: "Step 6",
          description: "Enter Years of Experience Needed: Indicate the number of years of experience required for the job role.",
          color: "bg-gray-200",
          hoverColor: "hover:bg-gray-100"
        },
        {
          step: "Step 7",
          description: "Start Interview: Begin the mock interview session.",
          color: "bg-gray-100",
          hoverColor: "hover:bg-gray-50"
        },
        {
          step: "Step 8",
          description: "Get and Analyze Your Feedback: Receive feedback on your performance and analyze it to identify areas for improvement.",
          color: "bg-white",
          hoverColor: "hover:bg-gray-50"
        }
    ];

    return (
        <div className="w-10/12 md:w-7/12 lg:w-6/12 mx-auto relative py-20">
            <h1 className="text-3xl text-center font-bold text-gray-700">Conduct your Mock Interview in few easy steps</h1>
            <div className="border-l-2 mt-10">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`transform transition cursor-pointer ${step.hoverColor} ${step.color} text-black rounded mb-10 flex-col md:flex-row flex items-center px-6 py-4 relative shadow-md`}
                    >
                        <div className={`w-5 h-5 ${step.color} absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0`}></div>
                        <div className={`w-10 h-1 ${step.color.replace('700', '400').replace('600', '300')} absolute -left-10 z-0`}></div>
                        <div className="flex-auto">
                            <h2 className="text-lg font-bold">{step.step}</h2>
                            <p className="text-base">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
