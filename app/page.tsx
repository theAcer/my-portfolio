'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RotatingTrianglePrism from '../components/rotatingPrism';

gsap.registerPlugin(ScrollTrigger)

// Project data
const projects = [
  {
    title: "B2C Climate Risk Tool",
    description: "Developed for Adapta.Earth, this tool leverages Azure for climate risk assessment, enabling farmers and financial institutions to make informed decisions.",
    technologies: ["Azure", "Stripe", "PowerApps", "Python"],
    image: "/placeholder.svg"
  },
  {
    title: "Payment Integration and E-commerce Backend",
    description: "Backend systems for e-commerce platforms, integrating MPESA and Stripe, and optimizing server-side performance.",
    technologies: ["MPESA API", "Python", "Stripe", "Digital Ocean"],
    image: "/placeholder.svg"
  },
  {
    title: "Generative AI for Language Translation",
    description: "Implemented Azure OpenAI Studio for real-time language translation, expanding accessibility in climate risk tools.",
    technologies: ["Azure OpenAI", "Python", "Generative AI"],
    image: "/placeholder.svg"
  }
]

export default function Home() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    // Hero section animation
    gsap.from('.hero-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    })

    // About section animation
    gsap.matchMedia().add("(min-width: 768px)", () => {
      gsap.from(aboutRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        opacity: 0,
        x: -100,
        duration: 1,
      })
    })

    // Projects animation
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: projectsRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
    })

    // Contact form animation
    gsap.from(contactRef.current, {
      scrollTrigger: {
        trigger: contactRef.current,
        start: 'top bottom',
        end: 'center center',
        scrub: 1,
      },
      opacity: 0,
      y: 50,
    })
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="hero-content text-center">
          <div className="flex justify-center mt-10">
          <RotatingTrianglePrism />
          </div>
            <h1 className="text-5xl font-bold mb-4">Samson Njogu</h1>
            <p className="text-xl mb-8">Software Engineer | Full-Stack Developer | Climate Adaptation Tools Expert</p>
            <Link href="#contact" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Image
              src="/placeholder.svg"
              alt="Samson Njogu"
              width={300}
              height={300}
              className="rounded-full"
            />
            <div>
              <p className="mb-4">
                I'm a passionate software engineer with over X years of experience in developing scalable systems, specializing in climate adaptation tools, generative AI, and cloud technologies.
              </p>
              <p className="mb-4">
                My background includes leveraging Azure OpenAI for language translation, building APIs with Python, and securing systems with Azure Firewall and Microsoft Sentinel.
              </p>
              <h3 className="text-xl font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Azure', 'Django', 'TypeScript', 'CI/CD', 'PowerApps', 'Azure Firewall', 'Generative AI'].map((skill) => (
                  <span key={skill} className="bg-gray-200 px-3 py-1 rounded-full">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="project-card border rounded-lg overflow-hidden shadow-lg bg-white">
                <Image src={project.image} alt={project.title} width={400} height={200} className="w-full" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-200 px-2 py-1 rounded-full text-sm">{tech}</span>
                    ))}
                  </div>
                  <Link href="#" className="text-blue-500 hover:underline">Learn more</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea id="message" className="w-full px-4 py-2 border rounded-lg" rows={4}></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
