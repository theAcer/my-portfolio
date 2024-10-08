import AnimatedSection from '../../components/AnimatedSection'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: "E-commerce Backend",
    description: "A scalable backend system for a large e-commerce platform, handling millions of transactions daily.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis"],
    image: "/placeholder.svg"
  },
  {
    title: "Real-time Chat Application",
    description: "A WebSocket-based chat application with features like user authentication and message persistence.",
    technologies: ["Socket.io", "Express", "MongoDB", "React"],
    image: "/placeholder.svg"
  },
  {
    title: "API Gateway",
    description: "A robust API gateway that handles routing, rate limiting, and authentication for microservices.",
    technologies: ["Node.js", "Express", "Redis", "Docker"],
    image: "/placeholder.svg"
  }
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <AnimatedSection key={project.title} delay={index * 0.2}>
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <Image src={project.image} alt={project.title} width={400} height={200} className="w-full" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-200 px-2 py-1 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
                <Link href="#" className="text-blue-500 hover:underline">Learn more</Link>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}