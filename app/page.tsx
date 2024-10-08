import Image from 'next/image'
import AnimatedSection from '../components/AnimatedSection'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8">I'm a backend engineer passionate about building scalable systems.</p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Replace with your actual projects */}
          {[1, 2, 3, 4].map((project) => (
            <div key={project} className="border p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
              <p>Description of project {project}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <h2 className="text-2xl font-semibold my-8">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'].map((skill) => (
            <span key={skill} className="bg-gray-200 px-3 py-1 rounded-full">{skill}</span>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}