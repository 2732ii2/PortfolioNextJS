import ProjectCard from './project-card'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "Sky-High Analytics Dashboard",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "A cloud-based analytics platform with real-time data visualization.",
    liveLink: "https://sky-high-analytics.example.com",
    githubLink: "https://github.com/yourusername/sky-high-analytics"
  },
  {
    title: "Cumulus: Cloud Storage Solution",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Secure and scalable cloud storage for businesses and individuals.",
    liveLink: "https://cumulus-storage.example.com",
    githubLink: "https://github.com/yourusername/cumulus-storage"
  },
  {
    title: "Breeze: Weather Forecasting App",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Accurate weather predictions with a beautiful, user-friendly interface.",
    liveLink: "https://breeze-weather.example.com",
    githubLink: "https://github.com/yourusername/breeze-weather"
  },
  {
    title: "Skyline: Urban Planning Tool",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "3D modeling and simulation for sustainable urban development.",
    liveLink: "https://skyline-urban.example.com",
    githubLink: "https://github.com/yourusername/skyline-urban"
  }
]

export default function PortfolioSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-sky-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-sky-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

