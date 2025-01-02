'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'

const projects = [
  {
    title: 'LMS Library Management App',
    description: 'A library management system with real-time admin dashboard updates, role-based access control, and plans for future enhancements.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/lms-library-app',
    live: 'https://lms-library-app.vercel.app',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    title: 'Business Logs',
    description: 'A tool for product selling vendors to store daily logs of sales and expenses, featuring an expense tracker with visual data representation.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/yourusername/business-logs',
    live: 'https://business-logs.vercel.app',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing skills, projects, and achievements.',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/portfolio',
    live: 'https://ashad-mubee-portfolio.vercel.app',
    image: '/placeholder.svg?height=300&width=400',
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div>
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group bg-white perspective"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <motion.div
              className="bg-white rounded-xl h-[400px] flex flex-col overflow-hidden shadow-lg transition-all duration-500 ease-out transform preserve-3d"
              animate={{
                rotateY: hoveredIndex === index ? 458 : 0,
              }}
            >
              {/* Front of the card */}
              <div className="absolute inset-0 backface-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-sky-100 text-sky-600 text-xs px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Back of the card */}
              <div className="absolute inset-0 backface-hidden transform rotateY-180 bg-gradient-to-br from-sky-400 to-blue-600 text-white rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-white text-blue-600 font-medium py-2 px-4 rounded-md transition-colors hover:bg-blue-100"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-white text-blue-600 font-medium py-2 px-4 rounded-md transition-colors hover:bg-blue-100"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

