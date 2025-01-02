import Image from 'next/image'
import { ArrowUpRight, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  status: 'Ongoing' | 'Completed'
  image: string
  description: string
  liveLink: string
  githubLink: string
}

export default function ProjectCard({ title, status, image, description, liveLink, githubLink }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 relative">
      <div className="relative h-48 overflow-hidden">
          {/* <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
          /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
          status === 'Completed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-gray-800'
        }`}>
          {status}
        </div>
      </div>
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-semibold mb-2 text-sky-800 group-hover:text-sky-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-4 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors duration-300"
          >
            View Live <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-sky-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
    </div>
  )
}

