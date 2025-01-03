'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react';
import RMS from "../../Images/RMS.png";
import NovelReaderHelper from "../../Images/NovelReaderHelper.png"
import LMS from "../../Images/lms.png";
import Link from 'next/link';
import BusinessLogs from "../../Images/Business Logs.png";
// RiExternalLinkLine
import { RiExternalLinkLine } from "react-icons/ri";

const projects = [
  {
    number: "1",
    image: RMS,
    backgroundColor: "bg-[#E5B3B3]",
    description: "RMS simplifies restaurant operations by generating unique QR codes for tables, allowing customers to scan, view the menu, and place orders instantly. Orders appear in real-time on the admin dashboard, ensuring efficient service and enhancing the dining experience.",
    Link:`https://github.com/2732ii2/RMS-frontendEnd`
  },
  {
    number: "2",
    image: NovelReaderHelper,
    backgroundColor: "bg-[#F4B183]",
    description: "Novel Reader Helper improves your PDF reading experience by allowing you to right-click on words to annotate, use text-to-speech in multiple languages, or save them to a list of important terms. It eliminates the hassle of manual searches, making reading smoother and more engaging.",
    Link:`https://github.com/2732ii2/Novel-Reader-Helper`
  }
  // {
  //   number: "3",
  //   image: "/placeholder.svg?height=400&width=400",
  //   backgroundColor: "bg-[#4A63A9]",
  //   description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
  // }
]

const projects1 = [
  {
    number: "1",
    image: LMS,
    backgroundColor: "bg-[rgba(0,0,0,.5)]",
    description: "Library management app with real-time admin dashboard updates. Implemented role-based access control for Users, Librarians, and Admins, each with protected routes and specific features. Future plans include adding an overdue flow with a payment system and a cron job for automating updates..",
    Link:`https://librarymanagementwebapp.vercel.app/`

  },
  {
    number: "2",
    image: BusinessLogs,
    backgroundColor: "bg-[lightgreen]",
    description: "It is a tool to store daily logs of selling products and daily expenses for product selling vendors by using ReactJS, NodeJS, ExpressJS, and MongoDB.and for authorization using conecpt of JSON Web Token . It has an expense tracker, which visually shows data in three divisions using charts.",
    Link:`https://businesslogs.netlify.app/`
  } 
]

type proObj ={
    number: number;
    image: string;
    backgroundColor:string;
    description:string;
    Link:string
}
export default function ProjectsSection() {
  const [currInd,setCurrInd]=useState<Number>(1);
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
       <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative"
      >
        <h2 className="sm:text-8xl  text-[50px]  md:text-9xl w-[100%] tracking-wide text-center mb-10 font-serif  text-black">
          PROJECTS
        </h2>
        {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-black rounded-full" />
        </div> */}
      </motion.div>
       
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative my-5 "
      >
       <div className={` w-[100%] flex items-center  sm:justify-start justify-center `}>
        {
          ["Ongoing","Completed"].map((e,i)=>{

            return <div key={i} className={` text-black text-lg font-semibold font-serif cursor-pointer ${i==currInd? "text-white bg-black  ": "  " } border-[1px] border-black  font-mediuum capitalize px-4 py-2 text`} onClick={()=>setCurrInd(i)} > {e} </div>
          })
        }
        </div>
        {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-black rounded-full" />
        </div> */}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative my-5"
      >
       {currInd?  <Card projects={projects1} /> : <Card projects={projects} />}
      </motion.div>
      
     
    </section>
  )
}

const Card=(props:any)=>{
  const {projects}=props;
  const ICon_1:any=RiExternalLinkLine;
  return (
    <div className="grid grid-cols-1    md:grid-cols-3 gap-5 mb-16">
        {projects.map((project:proObj, index:number) => (
          <motion.div
            // key={index}
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6, delay: index * 0.2 }}
            key={index}
            layoutId={`${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group hover:bg-[rgba(0,0,0,.05)] -transition-all p-8 rounded-[20px]"
          >
            <div 
              className={`${project.backgroundColor}  rounded-3xl p-8 aspect-square relative overflow-hidden transition-transform duration-300 group-hover:scale-105`}
            >
              <span className="absolute -right-4 -bottom-8 text-black/10 font-serif text-[200px] leading-none">
                {project.number}
              </span>
              <div className="relative z-10 h-full w-full flex items-center justify-center transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-300">
                <Image
                  src={project.image}
                  alt={`Project ${project.number}`}
                  width={300}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
              </div>
              {/* <div onClick={()=>{
                // window.location.href(`${project}`)
              }} className=" absolute top-[10px] cursor-pointer !text-[20px] right-[20px] "><RiExternalLinkLine /></div> */}
              <Link href={`${project.Link}`} target="_blank" className=" absolute top-[10px] cursor-pointer !text-[20px] right-[20px] ">
              <ICon_1 />
              </Link>
            </div>
            <p className="mt-6 text-lg font-medium text-black leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>

  )
}