"use client"

import { useEffect, useState } from "react"

// const technologies = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "AWS", "Docker"]
const technologies = [
  "Node.js",
  "Express",
  "Fastify",
  "MongoDB",
  "Supabase",
  "MySQL",
  "PostgreSQL",
  "Prisma",
  "Firebase",
  "Next.js",
  "React.js",
  "Tailwind CSS",
  "shadcn/ui",
  "Java",
  "Python",
  "TypeScript",
  "JavaScript",
  "NumPy",
  "Pandas",
  "Matplotlib"
];


export default function TechStack() {
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

    const element = document.getElementById("tech-stack")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to build modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={tech}
              className={`group p-6 rounded-xl bg-background border border-border hover:border-primary hover:bg-secondary/50 transition-all duration-300 cursor-pointer text-center ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
              }}
            >
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
