"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

const experiences = [
  {
    id: 1,
    title: "Web Development Intern",
    company: "Express Rupya Capital Advisors",
    period: "Jun 2024 – Jul 2024",
    description:
      "Built internal web tools using React.js and Express.js while working on-site in Mumbai.",
  },
  {
    id: 2,
    title: "Backend Developer Intern",
    company: "Branding Catalyst Pvt. Ltd.",
    period: "Aug 2024 – Oct 2024",
    description:
      "Developed scalable backend APIs with Express.js, implemented authentication, and contributed to production deployments (Remote).",
  },
  {
    id: 3,
    title: "Web Scraping Intern",
    company: "Express Rupya Capital Advisors",
    period: "Aug 2024 – April 2025",
    description:
      "Worked on automated data extraction pipelines using Selenium and BeautifulSoup (Hybrid).",
  },
];


export default function Experience() {
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

    const element = document.getElementById("experience")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">My professional journey and key achievements</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative md:flex md:gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background md:transform md:-translate-x-1/2 -translate-x-1.5" />

                {/* Content */}
                <div className="md:w-1/2 pl-10 md:pl-0">
                  <Card
                    className={`p-6 border-border hover:border-primary/50 transition-all duration-300 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                    }}
                  >
                    <div className="flex flex-col gap-1 mb-3">
                      <h3 className="font-bold text-lg">{exp.title}</h3>
                      <p className="text-sm font-medium text-primary">{exp.company}</p>
                      <p className="text-xs text-muted-foreground">{exp.period}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
