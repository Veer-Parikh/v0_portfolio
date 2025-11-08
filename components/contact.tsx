"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

export default function Contact() {
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

    const element = document.getElementById("contact")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const handleEmailClick = () => {
    window.location.href = "mailto:parikhveer71@gmail.com"
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+9892134759"
  }

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank")
  }

  const handleStartProject = () => {
    window.location.href = "mailto:hello@example.com?subject=Project Inquiry"
  }

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind? Let's talk about how I can help you build something amazing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
          <Card
            className="p-4 sm:p-6 border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
            onClick={handleEmailClick}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <Mail className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-foreground hover:text-primary transition-colors text-sm sm:text-base">
                  parikhveer71@gmail.com
                </p>
              </div>
            </div>
          </Card>

          <Card
            className="p-4 sm:p-6 border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
            onClick={handlePhoneClick}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <Phone className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Phone</p>
                <p className="font-semibold text-foreground hover:text-primary transition-colors text-sm sm:text-base">
                  9892134759
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mb-12">
          <p className="text-muted-foreground mb-6 text-sm sm:text-base">Or connect with me on social media</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button
              onClick={() => handleSocialClick("https://github.com/Veer-Parikh")}
              className="p-3 rounded-lg bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleSocialClick("https://www.linkedin.com/in/veer-parikh-811b6027a/")}
              className="p-3 rounded-lg bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleSocialClick("mailto:parikhveer71@gmail.com")}
              className="p-3 rounded-lg bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="rounded-full w-full sm:w-auto" onClick={handleStartProject}>
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  )
}
