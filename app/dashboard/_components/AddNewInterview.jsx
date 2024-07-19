// "use client"
// import React,{useState} from 'react'
// import { Input } from "@/components/ui/input"

// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
//   } from "@/components/ui/dialog"
//   import { Button } from '@/components/ui/button';
// function AddNewInterview() {
//     const [openDialog,setOpenDialog]=useState(false);
//   return (
//     <div>
//       <div className=' p-10 border rounded-lg hover:scale-105 hover:shadow-md cursor-pointer transition-all' onClick={()=>(setOpenDialog(true))}>
//         <h2 className=' text-lg text-center'>+ Add New </h2>
//       </div>
//       <Dialog open={openDialog} className="max-w-2xl">
//   <DialogTrigger>Open</DialogTrigger>
//   <DialogContent>
//     <DialogHeader>
//       <DialogTitle className="text-2xl">Tell us More about your Interview</DialogTitle>
//       <DialogDescription>
// <div>
//     <h2></h2>
//     <h2>Enter your Job POsition /Role ,Description and all</h2>
// </div>
//         <div className=' flex gap-5 justify-end'>
//             <Button variant="ghost" onClick={()=>setOpenDialog(false)}>Cancel</Button>
//             <Button>Start Interview</Button>
//         </div>
//       </DialogDescription>
//     </DialogHeader>
//   </DialogContent>
// </Dialog>

//     </div>
//   )
// }

// export default AddNewInterview
"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAIModal'
// import { chatSession } from '@/utils/GeminiAIModal'
import { LoaderCircle } from 'lucide-react'
// import { db } from '@/utils/db'
// import { MockInterview } from '@/utils/schema'
// import { v4 as uuidv4 } from 'uuid';
// import { useUser } from '@clerk/nextjs'
// import moment from 'moment'
// import { useRouter } from 'next/navigation'

function AddNewInterview() {
    const [openDailog,setOpenDailog]=useState(false)
    const [jobPosition,setJobPosition]=useState();
    const [jobDesc,setJobDesc]=useState();
    const [jobExperience,setJobExperience]=useState();
    const [loading,setLoading]=useState(false);
    const [jsonResponse,setJsonResponse]=useState([]);
    // const router=useRouter();
    // const {user}=useUser();

    //______________________________________________________
    const onSubmit=async(e)=>{
        setLoading(true);
     e.preventDefault()
        console.log(jobPosition,jobDesc,jobExperience);

        const InputPrompt="Job position: "+jobPosition+", Job Description: "+jobDesc+", Years of Experience : "+jobExperience+" , Depends on Job Position, Job Description & Years of Experience give us "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" Interview question along with Answer in JSON format, Give us question and answer field on JSON"
   const result=await chatSession.sendMessage(InputPrompt);
   const MockJsonResp=(result.response.text()).replace('```json','').replace('```','')

   console.log(InputPrompt)
   console.log(JSON.parse(MockJsonResp));
   setJsonResponse(MockJsonResp);
   setLoading(false);
    }


    //__________________________________________________________
  return (
    <div>
        <div className='p-10 border rounded-lg bg-secondary
        hover:scale-105 hover:shadow-md cursor-pointer
         transition-all border-dashed'
         onClick={()=>setOpenDailog(true)}
         >
            <h2 className='text-lg text-center'>+ Add New</h2>
        </div>
        <Dialog open={openDailog}>
       
        <DialogContent className="max-w-2xl">
            <DialogHeader >
            <DialogTitle className="text-2xl" >Tell us more about your job interviwing</DialogTitle>
            <DialogDescription>
                <form onSubmit={onSubmit}>
                <div>
                   
                    <h2>Add Details about yout job position/role, Job description and years of experience</h2>

                    <div className='mt-7 my-3'>
                        <label>Job Role/Job Position</label>
                        <Input placeholder="Ex. Full Stack Developer" required
                        onChange={(event)=>setJobPosition(event.target.value)}
                        />
                    </div>
                    <div className=' my-3'>
                        <label>Tech Stack (In Short) eg.MERN ,SQL</label>
                        <Textarea placeholder="Ex. React, Angular, NodeJs, MySql etc" 
                        required
                        onChange={(event)=>setJobDesc(event.target.value)} />
                    </div>
                    <div className=' my-3'>
                        <label>Years of experience</label>
                        <Input placeholder="Ex.5"  type="number"  max="70" 
                        required
                        onChange={(event)=>setJobExperience(event.target.value)}
                        />
                    </div>
                </div>
                <div className='flex gap-5 justify-end'>
                    <Button type="button" variant="ghost" onClick={()=>setOpenDailog(false)}>Cancel</Button>
                    <Button type="submit" disabled={loading} >
                        {loading? 
                        <>
                        <LoaderCircle className='animate-spin' /> Generating from AI
                        </>:'Start Interview'    
                    }
                        </Button>
                </div>
                </form>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>

    </div>
  )
}

export default AddNewInterview