// // // src/app/Home/page.tsx
// // import React from 'react';

// // const Home = () => {
// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       <header className="bg-primary text-white py-4 shadow-md">
// //         <div className="container mx-auto flex justify-between items-center px-4">
// //           <h1 className="text-3xl font-bold">NudgeQuest</h1>
// //           <nav>
// //             <a href="/signup" className="text-lg font-medium hover:text-secondary mx-4">Sign Up</a>
// //             <a href="/join" className="text-lg font-medium hover:text-secondary mx-4">Join Now</a>
// //           </nav>
// //         </div>
// //       </header>

// //       <main className="container mx-auto px-4 py-16">
// //         <section className="text-center mb-16">
// //           <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to NudgeQuest</h2>
// //           <p className="text-lg text-gray-600 mb-8">Your ultimate AI-powered mock job interview platform.</p>
// //           <a href="/signup" className="bg-primary text-white py-2 px-6 rounded-lg font-medium hover:bg-secondary transition duration-300">Get Started</a>
// //         </section>

// //         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
// //           <div className="bg-white shadow-lg rounded-lg p-6">
// //             <h3 className="text-2xl font-bold text-gray-800 mb-4">AI Mock Interviews</h3>
// //             <p className="text-gray-600">Experience realistic AI-driven mock interviews tailored to your job role.</p>
// //           </div>
// //           <div className="bg-white shadow-lg rounded-lg p-6">
// //             <h3 className="text-2xl font-bold text-gray-800 mb-4">Personalized Feedback</h3>
// //             <p className="text-gray-600">Receive detailed feedback to improve your interview skills and performance.</p>
// //           </div>
// //           <div className="bg-white shadow-lg rounded-lg p-6">
// //             <h3 className="text-2xl font-bold text-gray-800 mb-4">Track Your Progress</h3>
// //             <p className="text-gray-600">Monitor your progress over time and see how you improve.</p>
// //           </div>
// //           <div className="bg-white shadow-lg rounded-lg p-6">
// //             <h3 className="text-2xl font-bold text-gray-800 mb-4">Join a Community</h3>
// //             <p className="text-gray-600">Connect with other job seekers and share tips and experiences.</p>
// //           </div>
// //         </section>

// //         <section className="text-center mb-16">
// //           <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose NudgeQuest?</h2>
// //           <p className="text-lg text-gray-600 mb-8">Our platform is designed to help you ace your job interviews with AI-driven simulations and detailed feedback.</p>
// //           <a href="/join" className="bg-secondary text-white py-2 px-6 rounded-lg font-medium hover:bg-primary transition duration-300">Join Now</a>
// //         </section>

// //         <section className="bg-gray-50 py-16">
// //   <div className="container mx-auto px-4">
// //     <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Our Users Say</h2>
// //     <div className="flex flex-wrap justify-center gap-8">
// //       <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
// //         <p className="text-gray-600 mb-4">“NudgeQuest has transformed my interview preparation. The AI simulations are incredibly realistic, and the feedback is spot-on.”</p>
// //         <h4 className="text-lg font-semibold text-gray-800">Jane Doe</h4>
// //         <p className="text-gray-500">Software Engineer</p>
// //       </div>
// //       <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
// //         <p className="text-gray-600 mb-4">“The detailed insights I receive after each mock interview have been invaluable in my job search. Highly recommended!”</p>
// //         <h4 className="text-lg font-semibold text-gray-800">John Smith</h4>
// //         <p className="text-gray-500">Product Manager</p>
// //       </div>
// //       <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
// //         <p className="text-gray-600 mb-4">“I love the community feature. It's great to connect with other job seekers and share experiences.”</p>
// //         <h4 className="text-lg font-semibold text-gray-800">Emily Johnson</h4>
// //         <p className="text-gray-500">UX Designer</p>
// //       </div>
// //     </div>
// //   </div>
// // </section>
// // <section className="bg-primary text-white py-16">
// //   <div className="container mx-auto px-4 text-center">
// //     <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Interview Skills?</h2>
// //     <p className="text-lg mb-8">Join thousands of job seekers who have aced their interviews with the help of NudgeQuest.</p>
// //     <a href="/signup" className="bg-white text-primary py-2 px-6 rounded-lg font-medium hover:bg-gray-100 transition duration-300">Get Started Now</a>
// //   </div>
// // </section>
// //    <section className="relative overflow-hidden bg-gray-100 py-16">
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Companies</h2>
// //         <div className="relative overflow-x-auto whitespace-nowrap scroll-smooth">
// //           <div className="flex flex-nowrap space-x-8 animate-marquee">
// //             <div className="bg-white shadow-lg rounded-lg p-6 flex-shrink-0 w-60">
// //               <img src="/images/company1.png" alt="Company 1" className="h-12 mx-auto mb-4"/>
// //               <h3 className="text-lg font-semibold text-gray-800">Company 1</h3>
// //             </div>
// //             <div className="bg-white shadow-lg rounded-lg p-6 flex-shrink-0 w-60">
// //               <img src="/images/company2.png" alt="Company 2" className="h-12 mx-auto mb-4"/>
// //               <h3 className="text-lg font-semibold text-gray-800">Company 2</h3>
// //             </div>
// //             <div className="bg-white shadow-lg rounded-lg p-6 flex-shrink-0 w-60">
// //               <img src="/images/company3.png" alt="Company 3" className="h-12 mx-auto mb-4"/>
// //               <h3 className="text-lg font-semibold text-gray-800">Company 3</h3>
// //             </div>
// //             <div className="bg-white shadow-lg rounded-lg p-6 flex-shrink-0 w-60">
// //               <img src="/images/company4.png" alt="Company 4" className="h-12 mx-auto mb-4"/>
// //               <h3 className="text-lg font-semibold text-gray-800">Company 4</h3>
// //             </div>
// //             {/* Add more company cards as needed */}
// //           </div>
// //         </div>
// //       </div>
// //     </section>

// //     <section className="bg-gray-100 py-16 relative">
// //       <div className="container mx-auto px-4">
// //         <div className="flex flex-col md:flex-row items-center">
// //           <div className="md:w-1/2 mb-8 md:mb-0">
// //             <h2 className="text-4xl font-bold text-gray-800 mb-6">
// //               How NudgeQuest Transforms Your Interview Preparation
// //             </h2>
// //             <p className="text-lg text-gray-600 mb-8">
// //               Our platform goes beyond traditional interview prep by providing an interactive and comprehensive experience.
// //               We combine real-time feedback, AI-driven analysis, and personalized insights to help you excel in your job interviews.
// //             </p>
// //             <ul className="list-disc list-inside text-gray-700 mb-8">
// //               <li className="mb-4">AI-Curated Interview Questions</li>
// //               <li className="mb-4">Real-Time Webcam Monitoring</li>
// //               <li className="mb-4">Voice-to-Text Conversion</li>
// //               <li className="mb-4">AI-Powered Response Evaluation</li>
// //               <li className="mb-4">Detailed Feedback and Improvement Tips</li>
// //             </ul>
// //             <a href="/signup" className="bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-secondary transition duration-300">
// //               Start Your Journey
// //             </a>
// //           </div>
// //           <div className="md:w-1/2">
// //             <img src="/images/feature.png" alt="Feature Highlight" className="w-full h-auto rounded-lg shadow-lg"/>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20"></div>
// //     </section>
// //       </main>

// //       <footer className="bg-primary text-white py-4 mt-16">
// //         <div className="container mx-auto text-center">
// //           <p>&copy; 2024 NudgeQuest. All rights reserved.</p>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default Home;


// import React from 'react';

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-primary text-white py-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center px-4">
//           <h1 className="text-3xl font-bold">NudgeQuest</h1>
//           <nav>
//             <a href="/signup" className="text-lg font-medium hover:text-secondary mx-4">Sign Up</a>
//             <a href="/login" className="text-lg font-medium hover:text-secondary mx-4">Login</a>
//             <a href="/dashboard" className="text-lg font-medium hover:text-secondary mx-4">Dashboard</a>
//           </nav>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-16">
//         <section className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to NudgeQuest</h2>
//           <p className="text-lg text-gray-600 mb-8">Your ultimate AI-powered mock job interview platform.</p>
//           <a href="/signup" className="bg-primary text-white py-2 px-6 rounded-lg font-medium hover:bg-secondary transition duration-300">Get Started</a>
//         </section>

//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">AI Mock Interviews</h3>
//             <p className="text-gray-600">Experience realistic AI-driven mock interviews tailored to your job role.</p>
//           </div>
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Personalized Feedback</h3>
//             <p className="text-gray-600">Receive detailed feedback to improve your interview skills and performance.</p>
//           </div>
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Track Your Progress</h3>
//             <p className="text-gray-600">Monitor your progress over time and see how you improve.</p>
//           </div>
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Join a Community</h3>
//             <p className="text-gray-600">Connect with other job seekers and share tips and experiences.</p>
//           </div>
//         </section>

//         <section className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose NudgeQuest?</h2>
//           <p className="text-lg text-gray-600 mb-8">Our platform is designed to help you ace your job interviews with AI-driven simulations and detailed feedback.</p>
//           <a href="/signup" className="bg-secondary text-white py-2 px-6 rounded-lg font-medium hover:bg-primary transition duration-300">Join Now</a>
//         </section>

//         <section className="bg-gray-50 py-16">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Our Users Say</h2>
//             <div className="flex flex-wrap justify-center gap-8">
//               <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
//                 <p className="text-gray-600 mb-4">“NudgeQuest has transformed my interview preparation. The AI simulations are incredibly realistic, and the feedback is spot-on.”</p>
//                 <h4 className="text-lg font-semibold text-gray-800">Jane Doe</h4>
//                 <p className="text-gray-500">Software Engineer</p>
//               </div>
//               <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
//                 <p className="text-gray-600 mb-4">“The detailed insights I receive after each mock interview have been invaluable in my job search. Highly recommended!”</p>
//                 <h4 className="text-lg font-semibold text-gray-800">John Smith</h4>
//                 <p className="text-gray-500">Product Manager</p>
//               </div>
//               <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
//                 <p className="text-gray-600 mb-4">“I love the community feature. It's great to connect with other job seekers and share experiences.”</p>
//                 <h4 className="text-lg font-semibold text-gray-800">Emily Johnson</h4>
//                 <p className="text-gray-500">UX Designer</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="bg-primary text-white py-16">
//           <div className="container mx-auto px-4 text-center">
//             <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Interview Skills?</h2>
//             <p className="text-lg mb-8">Join thousands of job seekers who have aced their interviews with the help of NudgeQuest.</p>
//             <a href="/signup" className="bg-white text-primary py-2 px-6 rounded-lg font-medium hover:bg-gray-100 transition duration-300">Get Started Now</a>
//           </div>
//         </section>

//         <section className="relative overflow-hidden bg-gray-100 py-16">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Companies</h2>
//             <div className="relative overflow-x-auto whitespace-nowrap scroll-smooth">
//               <div className="flex flex-nowrap space-x-8 animate-marquee">
//                 <div className="bg-white shadow-lg rounded-lg p-6 flex-shrink-0 w-60">
//                   <img src="/images/company1.png" alt="Company 1" className="h-12 mx-auto mb-4"/>
//                   <h3 className="text-lg font-semibold text-gray-800">Company 1</h3>
//                 </div>
//                 <div className="bg-white shadow-lg rounded-lg p-6 flex-shrink-0 w-60">
//                   <img src="/images/company2.png" alt="Company 2" className="h-12 mx-auto mb-4"/>
//                   <h3 className="text-lg font-semibold text-gray-800">Company 2</h3>
//                 </div>
//                 <div className="bg-white shadow-lg rounded-lg p-6 flex-shrink-0 w-60">
//                   <img src="/images/company3.png" alt="Company 3" className="h-12 mx-auto mb-4"/>
//                   <h3 className="text-lg font-semibold text-gray-800">Company 3</h3>
//                 </div>
//                 <div className="bg-white shadow-lg rounded-lg p-6 flex-shrink-0 w-60">
//                   <img src="/images/company4.png" alt="Company 4" className="h-12 mx-auto mb-4"/>
//                   <h3 className="text-lg font-semibold text-gray-800">Company 4</h3>
//                 </div>
//                 {/* Add more company cards as needed */}
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="bg-gray-100 py-16 relative">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="md:w-1/2 mb-8 md:mb-0">
//                 <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                   How NudgeQuest Transforms Your Interview Preparation
//                 </h2>
//                 <p className="text-lg text-gray-600 mb-8">
//                   Our platform goes beyond traditional interview prep by providing an interactive and comprehensive experience.
//                   We combine real-time feedback, AI-driven analysis, and personalized insights to help you excel in your job interviews.
//                 </p>
//                 <ul className="list-disc list-inside text-gray-700 mb-8">
//                   <li className="mb-4">AI-Curated Interview Questions</li>
//                   <li className="mb-4">Real-Time Webcam Monitoring</li>
//                   <li className="mb-4">Voice-to-Text Conversion</li>
//                   <li className="mb-4">AI-Powered Response Evaluation</li>
//                   <li className="mb-4">Detailed Feedback and Improvement Tips</li>
//                 </ul>
//                 <a href="/signup" className="bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-secondary transition duration-300">
//                   Start Your Journey
//                 </a>
//               </div>
//               <div className="md:w-1/2">
//                 <img src="/images/feature.png" alt="Feature Highlight" className="w-full h-auto rounded-lg shadow-lg"/>
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20"></div>
//         </section>
//       </main>

//       <footer className="bg-primary text-white py-4 mt-16">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2024 NudgeQuest. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;






// src/app/Home/page.tsx
import React from 'react';
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">NudgeQuest</h1>
          <nav>
            <a href="/dashboard" className="text-lg font-medium hover:text-secondary mx-4">Sign Up</a>
            <a href="/dashboard" className="text-lg font-medium hover:text-secondary mx-4">Login</a>
            <a href="/dashboard" className="text-lg font-medium hover:text-secondary mx-4">Dashboard</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to NudgeQuest</h2>
          <p className="text-lg text-gray-600 mb-8">Your ultimate AI-powered mock job interview platform.</p>
          <a href="/dashboard" className="bg-primary text-white py-2 px-6 rounded-lg font-medium hover:bg-secondary hover:text-black hover:border-blac transition duration-300">Get Started</a>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">AI Mock Interviews</h3>
            <p className="text-gray-600">Experience realistic AI-driven mock interviews tailored to your job role.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Personalized Feedback</h3>
            <p className="text-gray-600">Receive detailed feedback to improve your interview skills and performance.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Track Your Progress</h3>
            <p className="text-gray-600">Monitor your progress over time and see how you improve.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Join a Community</h3>
            <p className="text-gray-600">Connect with other job seekers and share tips and experiences.</p>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose NudgeQuest?</h2>
          <p className="text-lg text-gray-600 mb-8">Our platform is designed to help you ace your job interviews with AI-driven simulations and detailed feedback.</p>
          <a href="/dashboard" className="bg-primary text-white py-2 px-6 rounded-lg font-medium hover:bg-secondary hover:text-black hover:border-blac transition duration-300">Join Now</a>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Our Users Say</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
                <p className="text-gray-600 mb-4">“NudgeQuest has transformed my interview preparation. The AI simulations are incredibly realistic, and the feedback is spot-on.”</p>
                <h4 className="text-lg font-semibold text-gray-800">Jane Doe</h4>
                <p className="text-gray-500">Software Engineer</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
                <p className="text-gray-600 mb-4">“The detailed insights I receive after each mock interview have been invaluable in my job search. Highly recommended!”</p>
                <h4 className="text-lg font-semibold text-gray-800">John Smith</h4>
                <p className="text-gray-500">Product Manager</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
                <p className="text-gray-600 mb-4">“I love the community feature. It's great to connect with other job seekers and share experiences.”</p>
                <h4 className="text-lg font-semibold text-gray-800">Emily Johnson</h4>
                <p className="text-gray-500">UX Designer</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Interview Skills?</h2>
            <p className="text-lg mb-8">Join thousands of job seekers who have aced their interviews with the help of NudgeQuest.</p>
            <a href="/dashboard" className="bg-white text-primary py-2 px-6 rounded-lg font-medium hover:bg-gray-100 transition duration-300">Get Started Now</a>
          </div>
        </section>

  

        <section className="bg-gray-100 py-16 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  How NudgeQuest Transforms Your Interview Preparation
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our platform goes beyond traditional interview prep by providing an interactive and comprehensive experience.
                  We combine real-time feedback, AI-driven analysis, and personalized insights to help you excel in your job interviews.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-8">
                  <li className="mb-4">AI-Curated Interview Questions</li>
                  <li className="mb-4">Real-Time Webcam Monitoring</li>
                  <li className="mb-4">Voice-to-Text Conversion</li>
                  <li className="mb-4">AI-Powered Response Evaluation</li>
                  <li className="mb-4">Detailed Feedback and Improvement Tips</li>
                </ul>
                <a href="/dashboard" className="bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-secondary transition duration-300">
                  Start Your Journey
                </a>
              </div>
              <div className="md:w-1/2">
                <img src="ex.svg" alt="Feature Highlight" className=" h-auto rounded-lg shadow-lg"/>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20"></div>
        </section>
      </main>

      <footer className="bg-primary text-white py-4 mt-16">
  <div className="container mx-auto text-center">
    <p>&copy; 2024 NudgeQuest. All rights reserved.</p>
    <p>Coded at Night Under caffeine by</p>
    <p>
      <a href="https://github.com/reallywasi" className="text-red-200 font-bold hover:underline" target="_blank" rel="noopener noreferrer">
        Wasi
      </a>
    </p>
  </div>
</footer>

    </div>
  );
};

export default Home;
