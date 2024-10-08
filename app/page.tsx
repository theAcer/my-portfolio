'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


// Ensure GSAP plugins are registered
gsap.registerPlugin(ScrollTrigger)

// Project data
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
            <h1 className="text-5xl font-bold mb-4">Your Name</h1>
            <p className="text-xl mb-8">Backend Engineer | Node.js Expert | System Architect</p>
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
              alt="Your Name"
              width={300}
              height={300}
              className="rounded-full"
            />
            <div>
              <p className="mb-4">
                I'm a passionate backend engineer with X years of experience in building scalable and efficient systems.
                My expertise lies in Node.js, Express, and database technologies like PostgreSQL and MongoDB.
              </p>
              <p className="mb-4">
                When I'm not coding, you can find me hiking in the mountains, reading tech blogs, or experimenting with new programming languages.
              </p>
              <h3 className="text-xl font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'GraphQL', 'Redis'].map((skill) => (
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
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}