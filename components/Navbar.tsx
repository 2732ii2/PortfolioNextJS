'use client'
import { CiMenuFries } from "react-icons/ci";
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import type { IconType } from 'react-icons';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'achievements', 'projects']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className="sm:fixed top-0 left-0 right-0  bg-white/80   z-0"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto sm:px-4 sm:block hidden ">
        <div className="flex justify-end items-center h-16">
          {['skills', 'achievements', 'projects'].map((section) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`px-6 py-2 text-lg font-medium transition-colors relative ${
                activeSection === section
                  ? 'text-sky-500'
                  : 'text-gray-600 hover:text-sky-500'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500"
                  layoutId="activeSection"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
      <MainFunc scrollToSection={scrollToSection}/>
    </motion.nav>
  )
}

type Props={
  scrollToSection:Function;
}



const MainFunc=(props:Props)=>{
  props.scrollToSection
  const Icon1:any=IoIosCloseCircleOutline;
  const Icon2:any=CiMenuFries;
  const [hide,setHide]=useState<boolean>(true);
  return <div  className="w-[100%]  relative sm:hidden items-center justify-end pr-5 text-black text-[20px] flex min-h-[40px] mb-3 bg-[rgba(0,0,0,.02)]">
  <div onClick={()=>setHide(!hide)}> <Icon2 /> </div>
 { <div className={` absolute w-[500px] !transition-all flex items-center justify-center !backdrop-blur-lg h-[500px] rounded-[50%] bg-[rgba(0,0,0,.1)] ${hide ? " -mt-[100%] -left-[110%]   ":"  "} `}>
  
 <Icon1 onClick={()=>setHide(!hide)} className=" absolute top-[50%] right-[20px] " />
     
  <div className="flex flex-col mt-[30%] ">
    {
      [ 'skills', 'achievements', 'projects'].map((e,i)=>{
        return <div onClick={() => {
          props.scrollToSection(e)
          setHide(!hide);
        }} key={i} className="capitalize mono text-black font-medium  active:text-[skyblue] my-[10px] ">{e}</div>
      })
    }
  </div>
  </div>}
</div>
}