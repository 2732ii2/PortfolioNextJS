'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Skills from '../components/Skills'
import Achievements from '../components/Achievements'
// import Projects from '../components/Projects'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'
import port from "./Port.jpeg";
import { motion, AnimatePresence } from 'framer-motion'
// import PortfolioSection from '@/components/Projects/portfolio-section'
import ProjectsSection from '@/components/Projects/projects-section'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <AnimatePresence>
      {loading ? (
        <Loader key="loader" />
      ) : (
        <motion.main
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-white"
        >
          <Navbar />
          
          {/* Hero Section */}
          <section id="home" className="sm:pt-32 sm:pb-20 sm:px-4 !min-w-[100%] ">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row items-center sm:justify-between justify-center">
                <motion.div 
                  className="md:w-1/2 w-[100%] sm:p-0 p-1 py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:!text-start text-center">
                    Hi, I am Ashad,
                  </h1>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6  sm:!text-start  text-center">
                    Software Engineer
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 max-w-xl w-[100%]  sm:!text-start  text-center">
                    Aspiring Software Engineering Intern with experience in ReactJS development.
                    Focused on building responsive and performant web applications.
                  </p>
                  
                  <a
        href="/res.pdf"
        download="My_Resume.pdf"
    
        className=" bg-[#0070f3] rounded-[5px] no-underline text-[16px]  sm:m-0 ml-[25%] text-white px-[20px] py-[10px] inline-block "
      >
        Download Resume
      </a>
                </motion.div>
                <motion.div 
                  className="md:w-1/2 flex justify-center mt-8 md:mt-0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <Image
                      src={port}
                      alt="Profile"
                      fill
                      className="rounded-full object-cover shadow-lg"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <div className="bg-sky-50">
            <div className="container sm:mx-auto sm:px-4 py-20 max-w-[100%] overflow-hidden">
              <motion.section
                id="skills"
                className="mb-20 scroll sm:w-[80%] mx-auto w-[95%] -mt-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Skills />
              </motion.section>
              
              <motion.section
                id="achievements"
                className="mb-20 scroll-mt-16 sm:w-[80%] mx-auto w-[90%]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Achievements />
              </motion.section>
              
              <motion.section
                id="projects"
                className="scroll -mt-16 sm:w-[80%] mx-auto w-[98%]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                
                <ProjectsSection/>
              </motion.section>
            </div>
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  )
}

