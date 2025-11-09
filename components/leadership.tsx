"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

const leadership = [
  {
    id: 1,
    title: "Tech Lead",
    organization: "Open Source Project",
    description: "Leading a community of 500+ developers on an open-source web framework.",
  },
  {
    id: 2,
    title: "Mentor",
    organization: "Code Bootcamp",
    description: "Mentoring aspiring developers and helping them land their first tech jobs.",
  },
]

export default function Leadership() {
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

    const element = document.getElementById("leadership")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Leadership and Extra-Curricular</h2>
          <p className="text-muted-foreground">Contributing to the tech committees and helping others grow</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {leadership.map((item, index) => (
            <Card
              key={item.id}
              className={`p-6 border-border hover:border-primary/50 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm font-medium text-primary mb-3">{item.organization}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
