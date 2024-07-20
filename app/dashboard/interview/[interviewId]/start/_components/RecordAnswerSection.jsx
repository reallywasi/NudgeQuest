//   "use client"
//   import React, { useEffect } from 'react'
//   import { Mic, StopCircle } from 'lucide-react'

//   import Webcam from 'react-webcam'
//   import Image from 'next/image'
//   import useSpeechToText from 'react-hook-speech-to-text';
// import { useState } from 'react';
//   import { Button } from '@/components/ui/button'
//   function RecordAnsSection() {
// //_______________________________________________________________
// const {
//   error,
//   interimResult,
//   isRecording,
//   results,
//   startSpeechToText,
//   stopSpeechToText,
// } = useSpeechToText({
//   continuous: true,
//   useLegacyResults: false
// });



// const [userAnswer,setUserAnswer]=useState('')

// useEffect(()=>{
// results.map((result)=>(
//   setUserAnswer(prevAns=>prevAns+result?.transcript)
// ))
// },[results])
// //_____________________________________________________________________
//     return (
//       <div className='flex items-center justify-center flex-col my-4'>
//       <div className='flex flex-col  justify-center items-center bg-secondary rounded-lg p-4 lg:my-15'>
//         <Image src={'/webcamera.png'} width={180} height={180} className='absolute'/>
//       <Webcam
//             mirrored={true}
//             style={{
//                 height:500,
//                 width:500,
//                 zIndex:10,
//             }}
//             />   
     
//     {/* Displays user's speech in text form */}
//       </div>
//       <Button variant='ghost' className='my-4 bg-primary text-white
//       onClick={isRecording?stopSpeechToText:startSpeechToText}'>
//       {
//         isRecording?<h2 className='text-red-600'><Mic/>'Recording...'</h2>:'Record Answer'
//       }
      
//       </Button>
//       <Button onClick={()=>console.log(userAnswer)}>SHow User Answer</Button>
//       {/* <Button 
//         // disabled={loading}
//         variant="outline" className="my-10"
//         // onClick={StartStopRecording}
//         >
//             {isRecording?
//             <h2 className='text-red-600 animate-pulse flex gap-2 items-center'>
//                 <StopCircle/>Stop Recording
//             </h2>
//             :
            
//             <h2 className='text-primary flex gap-2 items-center'>
//               <Mic/>  Record Answer</h2> }</Button> */}
//       {/* <div> */}
//       {/* <h1>Recording: {isRecording.toString()}</h1>
//       <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
//         {isRecording ? 'Stop Recording' : 'Start Recording'}
//       </button>
//       <ul>
//         {results.map((result) => (
//           <li key={result.timestamp}>{result.transcript}</li>
//         ))}
//         {interimResult && <li>{interimResult}</li>}
//       </ul> */}
//     {/* </div> */}
//       </div>
//     )
//   }
  
//   export default RecordAnsSection
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Webcam from 'react-webcam';
import { Mic, StopCircle } from 'lucide-react';
import useSpeechToText from 'react-hook-speech-to-text';
import { Button } from '@/components/ui/button';

function RecordAnsSection() {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  const [userAnswer, setUserAnswer] = useState('');

  useEffect(() => {
    if (results.length > 0) {
      setUserAnswer(prevAnswer => prevAnswer + results[results.length - 1]?.transcript + ' ');
    }
  }, [results]);

  const handleToggleRecording = () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };

  return (
    <div className='flex items-center justify-center flex-col my-4'>
      <div className='flex flex-col justify-center items-center bg-secondary rounded-lg p-4 lg:my-15'>
        <Image src={'/webcamera.png'} width={180} height={180} className='absolute' />
        <Webcam
          mirrored={true}
          style={{
            height: 500,
            width: 500,
            zIndex: 10,
          }}
        />
      </div>
      <Button variant='ghost' className='my-4 bg-primary text-white' onClick={handleToggleRecording}>
        {isRecording ? <h2 className='text-red-600'><Mic />{'Recording...'}</h2> : 'Record Answer'}
      </Button>
      <Button onClick={() => console.log(userAnswer)}>Show User Answer</Button>
    </div>
  );
}

export default RecordAnsSection;
