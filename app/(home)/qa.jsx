// "use state";
// import React, { useState } from "react";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionTrigger,
//   AccordionContent,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";

// const questionsAndAnswers = [
//   {
//     question: "What is NudgeQuest?",
//     answer:
//       "NudgeQuest is an AI-driven job mock interview platform that provides users with curated interview questions based on job role, tech stack, and experience. It evaluates responses through voice and webcam analysis and provides feedback on performance.",
//   },
//   {
//     question: "How does NudgeQuest generate interview questions?",
//     answer:
//       "NudgeQuest uses the Google Gemini API to generate interview questions based on the user's job role, tech stack, and years of experience.",
//   },
//   {
//     question: "What features does NudgeQuest offer?",
//     answer:
//       "NudgeQuest offers features such as generating interview questions, recording webcam and voice responses, converting voice to text, and providing detailed feedback on user performance.",
//   },
//   {
//     question: "How are voice responses analyzed in NudgeQuest?",
//     answer:
//       "Voice responses are converted to text and evaluated by AI to provide feedback on various aspects of the user's answers, such as clarity, coherence, and relevance.",
//   },
//   {
//     question: "Can users review their performance on NudgeQuest?",
//     answer:
//       "Yes, users can review their performance through the feedback provided by NudgeQuest, which includes insights on areas of improvement and suggestions for further practice.",
//   },
//   {
//     question: "What technologies are used to build NudgeQuest?",
//     answer:
//       "NudgeQuest is built using Next.js for the frontend and PostgreSQL for the backend database.",
//   },
//   {
//     question: "How does NudgeQuest handle different tech stacks?",
//     answer:
//       "Users can input multiple tech stacks, and NudgeQuest will generate relevant interview questions based on the selected tech stacks.",
//   },
//   {
//     question: "Is NudgeQuest suitable for all job roles?",
//     answer:
//       "Yes, NudgeQuest is designed to accommodate a variety of job roles by customizing interview questions and feedback according to the specific role and required skills.",
//   },
// ];

// function qa() {
//   // Existing state and functions

//   return (
//     <div>

//       <DialogContent className="max-w-2xl">
//         {/* Existing content */}
//         <Accordion type="single" collapsible>
//           {questionsAndAnswers.map((qa, index) => (
//             <AccordionItem key={index} value={`item-${index}`}>
//               <AccordionTrigger className="font-semibold">
//                 {qa.question}
//               </AccordionTrigger>
//               <AccordionContent className="p-2">{qa.answer}</AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </DialogContent>
//     </div>
//   );
// }

// export default qa;
