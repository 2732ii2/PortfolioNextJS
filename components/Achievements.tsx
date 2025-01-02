'use client'

import { motion } from 'framer-motion'
import { FaTrophy, FaChartLine, FaReact, FaGraduationCap } from 'react-icons/fa'

const achievements = [
  {
    title: 'Odoo Hackathon Finalist',
    description: 'Ranked 89th out of 700 teams, demonstrating problem-solving skills and collaboration in a competitive environment.',
    icon: FaTrophy,
  },
  {
    title: 'Web Application Performance Improvement',
    description: 'Improved browser performance by 25% through the use of Tailwind CSS, TypeScript, and NextJS.',
    icon: FaChartLine,
  },
  {
    title: 'React Component Optimization',
    description: 'Led the optimization of component rendering in a React application, enhancing performance by 30%.',
    icon: FaReact,
  },
  {
    title: 'Course Platform Development',
    description: 'Developed a platform for user acquisition of quality courses and teacher monetization opportunities.',
    icon: FaGraduationCap,
  },
]

export default function Achievements() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-start">
              <achievement.icon className=" sm:!text-4xl !text-[48px] text-sky-500 mr-4 sm:mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

