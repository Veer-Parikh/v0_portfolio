"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

const certifications = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 Certified Developer Professional",
    issuer: "Oracle",
    year: 2025,
    level: "Professional",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E7BDBE51F3BA8B8B69F3F840D30F99541965C61424C4705DCA7850054C325797",
    img: "/oracle.png",
  },
  {
    id: 2,
    title: "Hackniche",
    issuer: "DJ Synapse & DJ Google Developer Groups",
    year: 2025,
    level: "Hackathon Runner-Up",
    url: "https://drive.google.com/file/d/1YYO_ELOZqzIv4xnp0iLyxRaFlFSAFCSR/view?usp=sharing",
    img: "/hackniche.jpg",
  },
]

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    const sectionEl = document.getElementById("certifications")
    if (sectionEl) observer.observe(sectionEl)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Certifications and Achievements
          </h2>
          <p className="text-muted-foreground">
            Professional certifications and achievements
          </p>
        </div>

        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <a
  key={cert.id}
  href={cert.url}
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <Card
    className={`p-4 border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex flex-row items-center gap-6 cursor-pointer ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`}
    style={{
      transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
    }}
  >
    {/* LEFT SIDE */}
    <div className="flex items-start gap-4 flex-1">
      <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
        <Award className="w-6 h-6" />
      </div>

      <div>
        <h3 className="font-bold text-lg leading-tight">{cert.title}</h3>
        <p className="text-sm text-muted-foreground">{cert.issuer}</p>

        <div className="flex items-center gap-2 mt-2">
          <Badge variant="outline" className="text-xs">{cert.year}</Badge>
          <Badge variant="secondary" className="text-xs">{cert.level}</Badge>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE IMAGE */}
    <img
      src={cert.img}
      alt={cert.title}
      className="w-35 h-35 object-contain opacity-90 hover:opacity-100 transition ml-auto"
    />
  </Card>
</a>

          ))}
        </div>
      </div>
    </section>
  )
}
