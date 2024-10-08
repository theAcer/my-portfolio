import AnimatedSection from '../../components/AnimatedSection'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <Image
            src="/placeholder.svg"
            alt="Your Name"
            width={300}
            height={300}
            className="rounded-full"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Name</h2>
            <p className="mb-4">
              I'm a passionate backend engineer with X years of experience in building scalable and efficient systems.
              My expertise lies in Node.js, Express, and database technologies like PostgreSQL and MongoDB.
            </p>
            <p className="mb-4">
              When I'm not coding, you can find me hiking in the mountains, reading tech blogs, or experimenting with new programming languages.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'GraphQL', 'Redis'].map((skill) => (
            <span key={skill} className="bg-gray-200 px-3 py-1 rounded-full">{skill}</span>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}