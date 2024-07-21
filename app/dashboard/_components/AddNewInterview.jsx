
"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from '@/utils/GeminiAIModal'
import { LoaderCircle } from "lucide-react";
import { uuid } from "drizzle-orm/pg-core";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from 'next/navigation'

function AddNewInterview() {
  const [openDailog, setOpenDailog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const [customJobPosition, setCustomJobPosition] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [isCustomJob, setIsCustomJob] = useState(false);

  const [selectedTechStacks, setSelectedTechStacks] = useState([]);
  const [customTechStack, setCustomTechStack] = useState('');
  const router=useRouter();
  const { user } = useUser(); // to get user detail like who logged in

  const handleSelectChange = (value) => {
    if (value === 'custom') {
      setIsCustom(true);
      setJobPosition('');
    } else {
      setJobPosition(value);
      setIsCustom(false);
      setCustomJobPosition('');
    }
  };

  const handleJobRoleChange = (value) => {
    if (value === 'custom') {
      setIsCustomJob(true);
      setJobPosition('');
    } else {
      setJobPosition(value);
      setIsCustomJob(false);
      setCustomJobPosition('');
    }
  };



  const handleCustomJobPositionChange = (event) => {
    setCustomJobPosition(event.target.value);
    setJobPosition(event.target.value);
  };


  const handleCustomTechStackChange = (event) => {
    const value = event.target.value;
    setCustomTechStack(value);
    setSelectedTechStacks((prev) => [...prev, value]);
  };

  //______________________________________________________
  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExperience);

    const InputPrompt =
      "Job position: " +
      jobPosition +
      ", Job Description: " +
      jobDesc +
      ", Years of Experience : " +
      jobExperience +
      " , Depends on Job Position, Job Description & Years of Experience give us " +
      process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
      " Interview question along with Answer in JSON format, Give us question and answer field on JSON";
    const result = await chatSession.sendMessage(InputPrompt);
    const MockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");

    console.log(InputPrompt);
    console.log(JSON.parse(MockJsonResp));
    setJsonResponse(MockJsonResp);
    if (MockJsonResp) {
      const resp = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResp,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD-MM-yyyy"), // takes current date

          // to generate a unique ID associated with each response of gemini
        })
        .returning({ mockId: MockInterview.mockId });
      console.log("inserted ID:", resp);
    
    if(resp)
    {
        setOpenDailog(false)
        router.push('/dashboard/interview/'+resp[0]?.mockId)
    }
    } else {
      console.log("ERROR");
    }
    setLoading(false);
  };
  const jobRoles = [
    "Software Engineer", "Full Stack Developer", "Frontend Developer", "Backend Developer",
    "Data Scientist", "DevOps Engineer", "Product Manager", "Project Manager",
    "UX/UI Designer", "Mobile Developer"
  ];

  const techStacks = [
    "MERN", "MEAN", "LAMP", "LEMP", "JAM", "Ruby on Rails", "Django", "Flask",
    "Spring Boot", "ASP.NET Core", "Vue.js + Node.js", "Next.js", "Nuxt.js", "SvelteKit",
    "Meteor.js", "GraphQL + Apollo", "Serverless Stack", "Flutter", "React Native",
    "Xamarin", "Ionic", "TensorFlow", "PyTorch", "Hadoop", "Spark", "ELK Stack",
    "SMACK Stack", "FARM Stack", "PEAN Stack", "PERN Stack", "Electron.js", "Unity",
    "Unreal Engine", "Blockchain Stack", "Gatsby.js", "Hugo", "FastAPI", "NestJS",
    "Phoenix", "Koa.js", "AdonisJS", "LoopBack", "KeystoneJS", "Sapper", "Laravel",
    "Symphony", "CodeIgniter", "Zend Framework", "Qt", "Play Framework"
  ];
  //__________________________________________________________
  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary
        hover:scale-105 hover:shadow-md cursor-pointer
         transition-all border-dashed"
        onClick={() => setOpenDailog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDailog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your job interviwing
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>
                    Add Details about yout job position/role, Job description
                    and years of experience
                  </h2>
{/* _______________________________________________________ */}
                  {/* <div className="mt-7 my-3">
                    <label>Job Role/Job Position</label>
                    <Input
                      placeholder="Ex. Full Stack Developer"
                      required
                      onChange={(event) => setJobPosition(event.target.value)}
                    />
                  </div> */}

                  {/* <div className="mt-7 my-3">
  <label>Job Role/Job Position</label>
  <Select
    onValueChange={(value) => setJobPosition(value)}
    placeholder="Select Job Role"
  >
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select Job Role" />
    </SelectTrigger>
    <SelectContent>
      {jobRoles.map((role) => (
        <SelectItem key={role} value={role}>
          {role}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
</div> */}

<div className="mt-7 my-3">
        <label>Job Role/Job Position</label>
        <Select
          onValueChange={handleSelectChange}
          value={isCustom ? 'custom' : jobPosition}
          placeholder="Select Job Role"
          className="w-full"
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Job Role" />
          </SelectTrigger>
          <SelectContent>
            {jobRoles.map((role) => (
              <SelectItem key={role} value={role}>
                {role}
              </SelectItem>
            ))}
            <SelectItem value="custom">Other (Specify)</SelectItem>
          </SelectContent>
        </Select>
        {isCustom && (
          <Input
            value={customJobPosition}
            onChange={handleCustomJobPositionChange}
            placeholder="Type your job role"
            className="mt-3"
          />
        )}
      </div>



{/* ----------------------------------------------------------------------- */}
                  <div className=" my-3">
                    <label>Tech Stack (In Short) eg.MERN ,SQL</label>
                    <Textarea
                      placeholder="Ex. React, Angular, NodeJs, MySql etc"
                      required
                      onChange={(event) => setJobDesc(event.target.value)}
                    />
                  </div>
                  <div className=" my-3">
                    <label>Years of experience</label>
                    <Input
                      placeholder="Ex.5"
                      type="number"
                      max="70"
                      required
                      onChange={(event) => setJobExperience(event.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-end">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpenDailog(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin" /> Generating
                        from AI
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;















// "use client";
// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { chatSession } from '@/utils/GeminiAIModal';
// import { LoaderCircle } from "lucide-react";
// import { v4 as uuidv4 } from "uuid";
// import { db } from "@/utils/db";
// import { MockInterview } from "@/utils/schema";
// import moment from "moment";
// import { useUser } from "@clerk/nextjs";
// import { useRouter } from 'next/navigation';

// function AddNewInterview() {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [jobPosition, setJobPosition] = useState('');
//   const [jobDesc, setJobDesc] = useState('');
//   const [jobExperience, setJobExperience] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [jsonResponse, setJsonResponse] = useState([]);
//   const [customJobPosition, setCustomJobPosition] = useState('');
//   const [isCustomJob, setIsCustomJob] = useState(false);

//   const [selectedTechStacks, setSelectedTechStacks] = useState([]);
//   const [customTechStack, setCustomTechStack] = useState('');
//   const [isCustomTech, setIsCustomTech] = useState(false);
//   const router = useRouter();
//   const { user } = useUser(); // to get user detail like who logged in

//   const handleJobRoleChange = (value) => {
//     if (value === 'custom') {
//       setIsCustomJob(true);
//       setJobPosition('');
//     } else {
//       setJobPosition(value);
//       setIsCustomJob(false);
//       setCustomJobPosition('');
//     }
//   };

//   const handleCustomJobPositionChange = (event) => {
//     setCustomJobPosition(event.target.value);
//     setJobPosition(event.target.value);
//   };

//   const handleTechStackChange = (value) => {
//     if (value === 'custom') {
//       setIsCustomTech(true);
//       setSelectedTechStacks([]);
//     } else {
//       setSelectedTechStacks(value);
//       setIsCustomTech(false);
//       setCustomTechStack('');
//     }
//   };

//   const handleCustomTechStackChange = (event) => {
//     const value = event.target.value;
//     if (!selectedTechStacks.includes(value)) {
//       setSelectedTechStacks((prev) => [...prev, value]);
//     }
//     setCustomTechStack('');
//   };

//   const handleTechStackRemove = (stack) => {
//     setSelectedTechStacks((prev) => prev.filter(item => item !== stack));
//   };

//   const onSubmit = async (e) => {
//     setLoading(true);
//     e.preventDefault();
//     console.log(jobPosition, jobDesc, jobExperience);

//     const InputPrompt =
//       "Job position: " +
//       jobPosition +
//       ", Job Description: " +
//       jobDesc +
//       ", Years of Experience: " +
//       jobExperience +
//       " , Depends on Job Position, Job Description & Years of Experience give us " +
//       process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
//       " Interview question along with Answer in JSON format, Give us question and answer field on JSON";
//     const result = await chatSession.sendMessage(InputPrompt);
//     const MockJsonResp = result.response
//       .text()
//       .replace("```json", "")
//       .replace("```", "");

//     console.log(InputPrompt);
//     console.log(JSON.parse(MockJsonResp));
//     setJsonResponse(MockJsonResp);
//     if (MockJsonResp) {
//       const resp = await db
//         .insert(MockInterview)
//         .values({
//           mockId: uuidv4(),
//           jsonMockResp: MockJsonResp,
//           jobPosition: jobPosition,
//           jobDesc: jobDesc,
//           jobExperience: jobExperience,
//           createdBy: user?.primaryEmailAddress?.emailAddress,
//           createdAt: moment().format("DD-MM-yyyy"), // takes current date
//         })
//         .returning({ mockId: MockInterview.mockId });
//       console.log("inserted ID:", resp);

//       if (resp) {
//         setOpenDialog(false);
//         router.push('/dashboard/interview/' + resp[0]?.mockId);
//       }
//     } else {
//       console.log("ERROR");
//     }
//     setLoading(false);
//   };

//   const jobRoles = [
//     "Software Engineer", "Full Stack Developer", "Frontend Developer", "Backend Developer",
//     "Data Scientist", "DevOps Engineer", "Product Manager", "Project Manager",
//     "UX/UI Designer", "Mobile Developer"
//   ];

//   const techStacks = [
//     "MERN", "MEAN", "LAMP", "LEMP", "JAM", "Ruby on Rails", "Django", "Flask",
//     "Spring Boot", "ASP.NET Core", "Vue.js + Node.js", "Next.js", "Nuxt.js", "SvelteKit",
//     "Meteor.js", "GraphQL + Apollo", "Serverless Stack", "Flutter", "React Native",
//     "Xamarin", "Ionic", "TensorFlow", "PyTorch", "Hadoop", "Spark", "ELK Stack",
//     "SMACK Stack", "FARM Stack", "PEAN Stack", "PERN Stack", "Electron.js", "Unity",
//     "Unreal Engine", "Blockchain Stack", "Gatsby.js", "Hugo", "FastAPI", "NestJS",
//     "Phoenix", "Koa.js", "AdonisJS", "LoopBack", "KeystoneJS", "Sapper", "Laravel",
//     "Symphony", "CodeIgniter", "Zend Framework", "Qt", "Play Framework"
//   ];

//   return (
//     <div>
//       <div
//         className="p-10 border rounded-lg bg-secondary
//         hover:scale-105 hover:shadow-md cursor-pointer
//          transition-all border-dashed"
//         onClick={() => setOpenDialog(true)}
//       >
//         <h2 className="text-lg text-center">+ Add New</h2>
//       </div>
//       <Dialog open={openDialog}>
//         <DialogContent className="max-w-2xl">
//           <DialogHeader>
//             <DialogTitle className="text-2xl">
//               Tell us more about your job interviewing
//             </DialogTitle>
//             <DialogDescription>
//               <form onSubmit={onSubmit}>
//                 <div>
//                   <h2>
//                     Add Details about your job position/role, job description
//                     and years of experience
//                   </h2>

//                   <div className="mt-7 my-3">
//                     <label>Job Role/Job Position</label>
//                     <Select
//                       onValueChange={handleJobRoleChange}
//                       value={isCustomJob ? 'custom' : jobPosition}
//                       placeholder="Select Job Role"
//                       className="w-full"
//                     >
//                       <SelectTrigger className="w-[180px]">
//                         <SelectValue placeholder="Select Job Role" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {jobRoles.map((role) => (
//                           <SelectItem key={role} value={role}>
//                             {role}
//                           </SelectItem>
//                         ))}
//                         <SelectItem value="custom">Other (Specify)</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     {isCustomJob && (
//                       <Input
//                         value={customJobPosition}
//                         onChange={handleCustomJobPositionChange}
//                         placeholder="Type your job role"
//                         className="mt-3"
//                       />
//                     )}
//                   </div>

//                   <div className="my-3">
//                     <label>Tech Stack (Select multiple)</label>
//                     <Select
//                       multiple
//                       value={selectedTechStacks}
//                       onValueChange={handleTechStackChange}
//                       placeholder="Select Tech Stacks"
//                       className="w-full"
//                     >
//                       <SelectTrigger className="w-full">
//                         <SelectValue placeholder="Select Tech Stacks" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {techStacks.map((tech) => (
//                           <SelectItem key={tech} value={tech}>
//                             {tech}
//                           </SelectItem>
//                         ))}
//                         <SelectItem value="custom">Other (Specify)</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     {isCustomTech && (
//                       <Input
//                         value={customTechStack}
//                         onChange={handleCustomTechStackChange}
//                         placeholder="Type your tech stack"
//                         className="mt-3"
//                       />
//                     )}
//                     <div className="mt-2">
//                       {Array.isArray(selectedTechStacks) && selectedTechStacks.map((stack) => (
//                         <span
//                           key={stack}
//                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//                         >
//                           {stack}
//                           <button
//                             type="button"
//                             onClick={() => handleTechStackRemove(stack)}
//                             className="ml-2 text-red-600"
//                           >
//                             ×
//                           </button>
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="my-3">
//                     <label>Job Description</label>
//                     <Textarea
//                       placeholder="Job Description"
//                       rows={3}
//                       required
//                       onChange={(event) => setJobDesc(event.target.value)}
//                     />
//                   </div>

//                   <div className="my-3">
//                     <label>Years of Experience</label>
//                     <Input
//                       placeholder="Ex.5"
//                       type="number"
//                       max="70"
//                       required
//                       onChange={(event) => setJobExperience(event.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="flex gap-5 justify-end">
//                   <Button
//                     type="button"
//                     variant="ghost"
//                     onClick={() => setOpenDialog(false)}
//                   >
//                     Cancel
//                   </Button>
//                   <Button type="submit" disabled={loading}>
//                     {loading ? (
//                       <>
//                         <LoaderCircle className="animate-spin" /> Generating
//                         from AI
//                       </>
//                     ) : (
//                       "Start Interview"
//                     )}
//                   </Button>
//                 </div>
//               </form>
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// export default AddNewInterview;
