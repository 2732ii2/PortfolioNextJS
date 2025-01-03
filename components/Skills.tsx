'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { IconBaseProps, IconType } from 'react-icons'
import { 
  FaReact, 
  FaJs, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3, 
  FaJava, 
  FaPython, 
  FaAws, 
  FaDatabase, 
  FaGitAlt,
  FaCode,
  FaServer,
  FaTools,
  FaLaptopCode,
  FaCloud
} from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'

interface Skill {
  name: string
  icon: IconType
  level: number
  category: 'frontend' | 'backend' | 'tools' | 'cloud' | 'Programming_Languages'
  description: string
}

const skills: Skill[] = [
  {
    name: 'React',
    icon: FaReact,
    level: 90,
    category: 'frontend',
    description: 'Building interactive UIs with React and Next.js'
  },
  {
    name: 'JavaScript',
    icon: FaJs,
    level: 85,
    category: 'frontend',
    description: 'Modern ES6+ development'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    level: 80,
    category: 'frontend',
    description: 'Type-safe development'
  },
  {
    name: 'HTML/CSS',
    icon: FaHtml5,
    level: 90,
    category: 'frontend',
    description: 'Responsive web design'
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    level: 75,
    category: 'backend',
    description: 'Server-side JavaScript'
  },
  {
    name: 'Java',
    icon: FaJava,
    level: 70,
    category: 'Programming_Languages',
    description: 'Object-oriented programming'
  },
  {
    name: 'Python',
    icon: FaPython,
    level: 65,
    category: "Programming_Languages",
    description: 'Data processing and automation'
  },
  {
    name: 'MongoDB',
    icon: FaDatabase,
    level: 70,
    category: 'backend',
    description: 'NoSQL database management'
  },
  {
    name: 'AWS',
    icon: FaAws,
    level: 60,
    category: 'cloud',
    description: 'Cloud infrastructure and deployment'
  },
  {
    name: 'Git',
    icon: FaGitAlt,
    level: 80,
    category: 'tools',
    description: 'Version control and collaboration'
  },
]

const categories = {
  frontend: { name: 'Frontend', icon: FaCode, color: 'sky' },
  backend: { name: 'Backend', icon: FaServer, color: 'indigo' },
  // FaLaptopCode
  Programming_Languages : { name: 'Programming Languages', icon: FaLaptopCode, color: 'orange' },

  tools: { name: 'Tools', icon: FaTools, color: 'emerald' },
  cloud: { name: 'Cloud', icon: FaCloud, color: 'purple' }
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof categories>('frontend')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
        Technical Expertise
      </h2>

      {/* Category Navigation */}
      <div className="flex  sm:flex-nowrap flex-wrap justify-center gap-6 mb-12">
        {Object.entries(categories).map(([key, category]) => {
          const isActive = activeCategory === key
          const CategoryIcon:any = category.icon;
          console.log("=>",category.color);
          return (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key as keyof typeof categories)}
              className={`flex flex-col items-center sm:gap-2 sm:px-6 py-3 rounded-lg transition-all sm:w-auto w-[40%]
                ${isActive ? `bg-${category.color}-100 text-${category.color}-600` : 'text-gray-600 hover:text-gray-900'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CategoryIcon className={`text-2xl ${isActive ? `${category.color=="sky"?"text-sky-500":category.color=="emerald"?"text-emerald-500":category.color=="purple"?"text-purple-500":category.color=="orange"?"text-orange-500":"text-indigo-500"}` : ''}`} />
              <span className={` font-medium  ${isActive ? `${category.color=="sky"?"text-sky-500":category.color=="emerald"?"text-emerald-500":category.color=="purple"?"text-purple-500":category.color=="orange"?"text-orange-500":"text-indigo-500"}` : ''} `}>{category.name}</span>
            </motion.button>
          )
        })}
      </div>

      {/* Skills Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
        layout
      >
        {skills
          .filter(skill => skill.category === activeCategory)
          .map((skill, index) => 
           {
            const {color}=(categories[skill.category])
            console.log(color);
            const Icon:any=skill.icon;
            // emerald   indigo purple and sky
            return (



            <motion.div
              key={skill.name}
              layoutId={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300
                            transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${color=="sky"?"bg-sky-100":color=="emerald"?"bg-emerald-100":color=="purple"?"bg-purple-100":color=="orange"?"bg-orange-100":"bg-indigo-100"}`}>
                    <Icon className={`text-2xl ${color=="sky"?"text-sky-500":color=="emerald"?"text-emerald-500":color=="purple"?"text-purple-500":color=="orange"?"text-orange-500":"text-indigo-500"}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold ${color=="sky"?"text-sky-500":color=="emerald"?"text-emerald-500":color=="purple"?"text-purple-500":color=="orange"?"text-orange-500":"text-indigo-500"} mb-2`}>{skill.name}</h3>
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                      <motion.div
                        className={`absolute h-full ${color=="sky"?"bg-sky-500":color=="emerald"?"bg-emerald-500":color=="purple"?"bg-purple-500":color=="orange"?"bg-orange-500":"bg-indigo-500"}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                </div>

                {/* Hover Effect */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-xl p-6
                              flex items-center justify-center text-center"
                  >
                    <div>
                      <p className="text-lg font-medium text-gray-900 mb-2">
                        Proficiency: {skill.level}%
                      </p>
                      <p className="text-gray-600">{skill.description}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
          )}
      </motion.div>

      {/* Category Description */}
      <motion.div
        className="mt-12 text-center text-gray-600 sm:w-auto w-[90%] sm:m-none mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="max-w-2xl mx-auto">
          {activeCategory === 'frontend' && "Specializing in modern frontend development with React, TypeScript, and responsive design principles."}
          {activeCategory === 'backend' && "Building robust server-side applications with Node.js and database management."}
          {activeCategory === 'tools' && "Proficient in development tools and practices for efficient workflow and collaboration."}
          {activeCategory === 'cloud' && "Experience with cloud platforms and deployment strategies for scalable applications."}
          {activeCategory === 'Programming_Languages' && "Familiarity with Programming Languages like Java, Python "}
        </p>
      </motion.div>
    </div>
  )
}

