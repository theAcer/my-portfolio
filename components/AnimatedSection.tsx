'use client'

import { useRef, useEffect } from 'react'
import { gsap } from '../lib/gsap'

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
}

export default function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        delay, 
        scrollTrigger: {
          trigger: section,
          start: 'top bottom-=100',
        }
      }
    )
  }, [])

  return <div ref={sectionRef}>{children}</div>
}