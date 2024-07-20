// //   "use client"
// //   import React, { useEffect } from 'react'
// //   import { Mic, StopCircle } from 'lucide-react'

// //   import Webcam from 'react-webcam'
// //   import Image from 'next/image'
// //   import useSpeechToText from 'react-hook-speech-to-text';
// // import { useState } from 'react';
// //   import { Button } from '@/components/ui/button'
// //   function RecordAnsSection() {
// // //_______________________________________________________________
// // const {
// //   error,
// //   interimResult,
// //   isRecording,
// //   results,
// //   startSpeechToText,
// //   stopSpeechToText,
// // } = useSpeechToText({
// //   continuous: true,
// //   useLegacyResults: false
// // });

// // const [userAnswer,setUserAnswer]=useState('')

// // useEffect(()=>{
// // results.map((result)=>(
// //   setUserAnswer(prevAns=>prevAns+result?.transcript)
// // ))
// // },[results])
// // //_____________________________________________________________________
// //     return (
// //       <div className='flex items-center justify-center flex-col my-4'>
// //       <div className='flex flex-col  justify-center items-center bg-secondary rounded-lg p-4 lg:my-15'>
// //         <Image src={'/webcamera.png'} width={180} height={180} className='absolute'/>
// //       <Webcam
// //             mirrored={true}
// //             style={{
// //                 height:500,
// //                 width:500,
// //                 zIndex:10,
// //             }}
// //             />

// //     {/* Displays user's speech in text form */}
// //       </div>
// //       <Button variant='ghost' className='my-4 bg-primary text-white
// //       onClick={isRecording?stopSpeechToText:startSpeechToText}'>
// //       {
// //         isRecording?<h2 className='text-red-600'><Mic/>'Recording...'</h2>:'Record Answer'
// //       }

// //       </Button>
// //       <Button onClick={()=>console.log(userAnswer)}>SHow User Answer</Button>
// //       {/* <Button
// //         // disabled={loading}
// //         variant="outline" className="my-10"
// //         // onClick={StartStopRecording}
// //         >
// //             {isRecording?
// //             <h2 className='text-red-600 animate-pulse flex gap-2 items-center'>
// //                 <StopCircle/>Stop Recording
// //             </h2>
// //             :

// //             <h2 className='text-primary flex gap-2 items-center'>
// //               <Mic/>  Record Answer</h2> }</Button> */}
// //       {/* <div> */}
// //       {/* <h1>Recording: {isRecording.toString()}</h1>
// //       <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
// //         {isRecording ? 'Stop Recording' : 'Start Recording'}
// //       </button>
// //       <ul>
// //         {results.map((result) => (
// //           <li key={result.timestamp}>{result.transcript}</li>
// //         ))}
// //         {interimResult && <li>{interimResult}</li>}
// //       </ul> */}
// //     {/* </div> */}
// //       </div>
// //     )
// //   }

// //   export default RecordAnsSection
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Webcam from "react-webcam";
// import { Mic, StopCircle } from "lucide-react";
// import useSpeechToText from "react-hook-speech-to-text";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
// import { MockInterview } from "@/utils/schema";
// import { chatSession } from "@/utils/GeminiAIModal";
// import { UserAnswer } from "@/utils/schema";
// import { db } from "@/utils/db";
// import { useUser } from "@clerk/nextjs";
// import moment from "moment";
// function RecordAnsSection(
//   mockInterviewQuestion,
//   activeQuestionIndex,
//   interviewData
// ) {
//   const {
//     error,
//     interimResult,
//     isRecording,
//     results,
//     startSpeechToText,
//     stopSpeechToText,
//   } = useSpeechToText({
//     continuous: true,
//     useLegacyResults: false,
//   });
//   const { user } = useUser();
//   const [loading, setLoading] = useState(false);

//   //   const StartStopRecording=async()=>{
//   //     if(isRecording)
//   //     {
//   //       setLoading(true);
//   //       stopSpeechToText()
//   //       if(userAnswer?.length<10)
//   //       {
//   //         setLoading(false);
//   //         toast('Error while saving Your answer, Please record again')
//   //         return;
//   //       }
//   //       const feedbackPrompt="Question:"+mockInterviewQuestion[activeQuestionIndex]?.question+
//   //       ", User Answer:"+userAnswer+",Depends on question and user answer for give interview question "+
//   //       " please give us rating for answer and feedback as area of improvmenet if any "+
//   //       "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";

//   // const result=await chatSession.sendMessage(feedbackPrompt)
//   // const mockJsonResp=(result.response.text()).replace('```json','').replace('```','');
//   // // console.log(mockJsonResp)
//   // const JsonFeedbackResp=JSON.parse(mockJsonResp);
//   // const resp=await db.insert(UserAnswer)
//   // .values({
//   //   mockIdRef:interviewData?.mockId,
//   //   question:mockInterviewQuestion[activeQuestionIndex]?.question,
//   //   correctAns:mockInterviewQuestion[activeQuestionIndex]?.answer,
//   //   userAns:userAnswer,
//   //   feedback:JsonFeedbackResp?.feedback,
//   //   rating:JsonFeedbackResp?.rating,
//   //   userEmail:user?.primaryEmailAddress?.emailAddress,
//   //   createdAt:moment().format('DD-MM-yyyy')
//   // })
//   // if(resp)
//   // {
//   //   toast('user Answer Recorded Succesfully')
//   // }
//   // setUserAnswer('')
//   // setLoading(false);
//   //     }
//   //     else{
//   //       startSpeechToText();
//   //     }
//   //   }

//   // const UpdateUserAnswer=

//   const StartStopRecording = async () => {
//     if (isRecording) {
//       stopSpeechToText();
//     } else {
//       startSpeechToText();
//     }
//   };

//   const UpdateUserAnswer = async () => {
//     console.log(userAnswer);
//     setLoading(true);
//     const feedbackPrompt =
//       "Question:" +
//       mockInterviewQuestion[activeQuestionIndex]?.question +
//       ", User Answer:" +
//       userAnswer +
//       ",Depends on question and user answer for give interview question " +
//       " please give us rating for answer and feedback as area of improvmenet if any " +
//       "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";

//     const result = await chatSession.sendMessage(feedbackPrompt);
//     const mockJsonResp = result.response
//       .text()
//       .replace("```json", "")
//       .replace("```", "");
//     const JsonFeedbackResp = JSON.parse(mockJsonResp);
//     const resp = await db.insert(UserAnswer).values({
//       mockIdRef: interviewData?.mockId,
//       question: mockInterviewQuestion[activeQuestionIndex]?.question,
//       correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
//       userAns: userAnswer,
//       feedback: JsonFeedbackResp?.feedback,
//       rating: JsonFeedbackResp?.rating,
//       userEmail: user?.primaryEmailAddress?.emailAddress,
//       createdAt: moment().format("DD-MM-yyyy"),
//     });

//     if (resp) {
//       toast("User Answer recorded successfully");
//       setUserAnswer("");
//       setResults([]);
//     }
//     setResults([]);

//     setLoading(false);
//   };

//   const [userAnswer, setUserAnswer] = useState("");

//   useEffect(() => {
//     if (results.length > 0) {
//       setUserAnswer(
//         (prevAnswer) =>
//           prevAnswer + results[results.length - 1]?.transcript + " "
//       );
//     }
//   }, [results]);
//   useEffect(() => {
//     if (!isRecording && userAnswer?.length > 10) {
//       UpdateUserAnswer();
//     }
//   }, [userAnswer]);
//   const handleToggleRecording = () => {
//     if (isRecording) {
//       stopSpeechToText();
//     } else {
//       startSpeechToText();
//     }
//   };

//   return (
//     <div className="flex items-center justify-center flex-col my-4">
//       <div className="flex flex-col justify-center items-center bg-secondary rounded-lg p-4 lg:my-15">
//         <Image
//           src={"/webcamera.png"}
//           width={180}
//           height={180}
//           className="absolute"
//         />
//         <Webcam
//           mirrored={true}
//           style={{
//             height: 500,
//             width: 500,
//             zIndex: 10,
//           }}
//         />
//       </div>
//       <Button
//         disabled={loading}
//         variant="ghost"
//         className="my-4 bg-primary text-white"
//         onClick={StartStopRecording}
//       >
//         {isRecording ? (
//           <h2 className="text-red-600">
//             <Mic />
//             {"Recording..."}
//           </h2>
//         ) : (
//           "Record Answer"
//         )}
//       </Button>
//       <Button onClick={() => console.log(userAnswer)}>Show User Answer</Button>
//     </div>
//   );
// }

// export default RecordAnsSection;


//_____________________________________________________________________________

























//______________________________________________________________________________



"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic, StopCircle } from 'lucide-react'
import { toast } from 'sonner'
import { chatSession } from '@/utils/GeminiAIModal'
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'

function RecordAnswerSection({mockInterviewQuestion,activeQuestionIndex,interviewData}) {
    const [userAnswer,setUserAnswer]=useState('');
    const {user}=useUser();
    const [loading,setLoading]=useState(false);
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults
   
      } = useSpeechToText({
        continuous:false,
        useLegacyResults: false
      });

      useEffect(()=>{
       
        results?.map((result)=>(
            setUserAnswer(prevAns=>prevAns+result?.transcript)
        ))
      
      },[results])

      useEffect(()=>{
        if(!isRecording&&userAnswer?.length>10)
        {
          UpdateUserAnswer();
        } 
      },[userAnswer])
         
      const StartStopRecording=async()=>{
        if(isRecording)
        {
          stopSpeechToText()
        }
        else{
          startSpeechToText();
        }
      }

      // const UpdateUserAnswer=async()=>{

      //   console.log(userAnswer)
      //   setLoading(true)
      //   const feedbackPrompt="Question:"+mockInterviewQuestion[activeQuestionIndex]?.question+
      //   ", User Answer:"+userAnswer+",Depends on question and user answer for give interview question "+
      //   " please give us rating for answer and feedback as area of improvmenet if any "+
      //   "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";

      //   const result=await chatSession.sendMessage(feedbackPrompt);
      //   const mockJsonResp=(result.response.text()).replace('```json','').replace('```','');
      //   const JsonFeedbackResp=JSON.parse(mockJsonResp);
      //   const resp=await db.insert(UserAnswer)
      //   .values({
      //     mockIdRef:interviewData?.mockId,
      //     question:mockInterviewQuestion[activeQuestionIndex]?.question,
      //     correctAns:mockInterviewQuestion[activeQuestionIndex]?.answer,
      //     userAns:userAnswer,
      //     feedback:JsonFeedbackResp?.feedback,
      //     rating:JsonFeedbackResp?.rating,
      //     userEmail:user?.primaryEmailAddress?.emailAddress,
      //     createdAt:moment().format('DD-MM-yyyy')
      //   })

      //   if(resp)
      //   {
      //     toast('User Answer recorded successfully');
      //     setUserAnswer('');
      //     setResults([]);
      //   }
      //   setResults([]);
        
      //     setLoading(false);
      // }
      // const UpdateUserAnswer = async () => {
      //   console.log("Updating user answer..."); // Debugging log
      //   console.log("User Answer:", userAnswer); // Debugging log
        
      //   setLoading(true);
      
      //   const feedbackPrompt = "Question:" + mockInterviewQuestion[activeQuestionIndex]?.question +
      //     ", User Answer:" + userAnswer + ", Depends on question and user answer for give interview question " +
      //     " please give us rating for answer and feedback as area of improvement if any " +
      //     "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";
      
      //   try {
      //     const result = await chatSession.sendMessage(feedbackPrompt);
      //     const mockJsonResp = (result.response.text()).replace('```json', '').replace('```', '');
      //     const JsonFeedbackResp = JSON.parse(mockJsonResp);
      
      //     const response = await db.insert(UserAnswer).values({
      //       mockIdRef: interviewData?.mockId,
      //       question: mockInterviewQuestion[activeQuestionIndex]?.question,
      //       correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
      //       userAns: userAnswer,
      //       feedback: JsonFeedbackResp?.feedback,
      //       rating: JsonFeedbackResp?.rating,
      //       userEmail: user?.primaryEmailAddress?.emailAddress,
      //       createdAt: moment().format('DD-MM-yyyy')
      //     });
      
      //     console.log("Database Response:", response); // Debugging log
      
      //     if (response) {
      //       toast('User Answer recorded successfully');
      //       setUserAnswer('');
      //       setResults([]);
      //     }
      
      //   } catch (error) {
      //     console.error("Error updating user answer:", error); // Error handling
      //     toast('Failed to record user answer');
      //   }
      
      //   setLoading(false);
      //   setResults([]);
      // }
      
      // const UpdateUserAnswer = async () => {
      //   console.log("Updating user answer..."); // Debugging log
      //   console.log("User Answer:", userAnswer); // Debugging log
      //   console.log("Interview Data:", interviewData); // Debugging log
      //   console.log("Mock ID:", interviewData?.mockId); // Debugging log
      
      //   if (!interviewData || !interviewData.mockId) {
      //     console.error("Missing interview data or mock ID"); // Error handling
      //     toast('Failed to record user answer: Missing interview data or mock ID');
      //     return;
      //   }
      
      //   setLoading(true);
      
      //   const feedbackPrompt = "Question:" + mockInterviewQuestion[activeQuestionIndex]?.question +
      //     ", User Answer:" + userAnswer + ", Depends on question and user answer for give interview question " +
      //     " please give us rating for answer and feedback as area of improvement if any " +
      //     "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";
      
      //   try {
      //     const result = await chatSession.sendMessage(feedbackPrompt);
      //     const mockJsonResp = (result.response.text()).replace('```json', '').replace('```', '');
      //     const JsonFeedbackResp = JSON.parse(mockJsonResp);
      
      //     const response = await db.insert(UserAnswer).values({
      //       mockIdRef: interviewData.mockId,
      //       question: mockInterviewQuestion[activeQuestionIndex]?.question,
      //       correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
      //       userAns: userAnswer,
      //       feedback: JsonFeedbackResp?.feedback,
      //       rating: JsonFeedbackResp?.rating,
      //       userEmail: user?.primaryEmailAddress?.emailAddress,
      //       createdAt: moment().format('DD-MM-yyyy')
      //     });
      
      //     console.log("Database Response:", response); // Debugging log
      
      //     if (response) {
      //       toast('User Answer recorded successfully');
      //       setUserAnswer('');
      //       setResults([]);
      //     }
      
      //   } catch (error) {
      //     console.error("Error updating user answer:", error); // Error handling
      //     toast('Failed to record user answer');
      //   }
      
      //   setLoading(false);
      //   setResults([]);
      // }
      

      const UpdateUserAnswer = async () => {
        console.log("Updating user answer...");
        console.log("User Answer:", userAnswer);
        console.log("Interview Data:", interviewData);
        console.log("Mock ID:", interviewData?.mockId);
      
        if (!interviewData || !interviewData.mockId) {
          console.error("Missing interview data or mock ID");
          toast('Failed to record user answer: Missing interview data or mock ID');
          return;
        }
      
        setLoading(true);
      
        const feedbackPrompt = "Question:" + mockInterviewQuestion[activeQuestionIndex]?.question +
          ", User Answer:" + userAnswer + ", Depends on question and user answer for give interview question " +
          " please give us rating for answer and feedback as area of improvement if any " +
          "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";
      
        try {
          const result = await chatSession.sendMessage(feedbackPrompt);
          const mockJsonResp = (await result.response.text()).replace('```json', '').replace('```', '');
          const JsonFeedbackResp = JSON.parse(mockJsonResp);
      
          const response = await db.insert(UserAnswer).values({
            mockIdRef: interviewData.mockId,
            question: mockInterviewQuestion[activeQuestionIndex]?.question,
            correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
            userAns: userAnswer,
            feedback: JsonFeedbackResp?.feedback,
            rating: JsonFeedbackResp?.rating,
            userEmail: user?.primaryEmailAddress?.emailAddress,
            createdAt: moment().format('DD-MM-yyyy')
          });
      
          console.log("Database Response:", response);
      
          if (response) {
            toast('User Answer recorded successfully');
            setUserAnswer('');
            setResults([]);
          } else {
            toast('Failed to record user answer: No response from database');
          }
      
        } catch (error) {
          console.error("Error updating user answer:", error);
          toast(`Failed to record user answer: ${error.message}`);
        }
      
        setLoading(false);
        setResults([]);
      }
          

      
  return (
    <div className='flex items-center justify-center flex-col'>
        <div className='flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5'>
            <Image src={'/webcamera.png'} width={200} height={200} 
            className='absolute'/>
            <Webcam
            mirrored={true}
            style={{
                height:500,
                width:500,
                zIndex:10,
            }}
            />
        </div>
        <Button 
        disabled={loading}
        variant="outline" className="my-10"
        onClick={StartStopRecording}
        >
            {isRecording?
            <h2 className='text-red-600 animate-pulse flex gap-2 items-center'>
                <StopCircle/>Stop Recording
            </h2>
            :
            
            <h2 className='text-primary flex gap-2 items-center'>
              <Mic/>  Record Answer</h2> }</Button>
      
     
    </div>
  )
}

export default RecordAnswerSection