"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
        </div>

        <Card
          className={`p-8 md:p-12 border-border hover:border-primary/50 transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I'm a passionate full-stack developer with 2+ years of experience building web applications that solve
              real-world problems. My journey in tech began with a curiosity about how things work, which led me to
              pursue web development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I believe in writing clean, maintainable code and continuously learning new
              technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects, mentoring junior developers, or
              exploring the latest web technologies.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
