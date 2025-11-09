"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

const leadership = [
  {
    id: 1,
    title: "Deployments + Outhouse Head",
    organization: "DJ Unicode",
    description: "Led the deployments team and managed outhouse activities, ensuring smooth executions and technical support.",
    image: "/mentor.jpg",
  },
  {
    id: 2,
    title: "Backend Mentee -> Mentor",
    organization: "DJ Unicode",
    description: "Started as a backend mentee and progressed to mentoring juniors in Node.js and Express.js for various projects.",
    image: "/cocom.jpg",
  },
  {
    id: 3,
    title: "Backend Lead",
    organization: "SVKM Schools Project",
    description: "Mentoring and managing backend development for a live school management system for over 10000+ users.",
    image: "/deployment.jpg",
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
      <div className="max-w-9xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Leadership and Extra-Curricular</h2>
          <p className="text-muted-foreground">Contributing to the tech committees and helping others grow</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-9xl mx-auto">
          {leadership.map((item, index) => (
            <Card
              key={item.id}
              className={`group relative overflow-hidden p-6 h-56 flex flex-col justify-end rounded-xl border border-border shadow-md cursor-pointer transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-500" />

              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white drop-shadow mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-white/90 mb-2">{item.organization}</p>
                <p className="text-sm text-white/80">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
