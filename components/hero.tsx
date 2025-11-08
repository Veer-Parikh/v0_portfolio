"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Veer-Parikh-Resume.pdf"
    link.download = "Veer-Parikh-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewWork = () => {
    const projectsSection = document.getElementById("projects")
    projectsSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSocialLink = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">Welcome to my portfolio</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Build amazing things with
            <br />
            <span className="text-primary">modern technology</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 text-pretty leading-relaxed">
            I'm a full-stack developer passionate about creating exceptional digital experiences. With expertise in
            React, Next.js, and cloud technologies, I help businesses scale and innovate.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12">
            <Button size="lg" className="rounded-full w-full sm:w-auto" onClick={handleViewWork}>
              View My Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full w-full sm:w-auto bg-transparent"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-8 border-t border-border">
            <span className="text-xs sm:text-sm text-muted-foreground">Connect with me:</span>
            <div className="flex gap-3 sm:gap-4">
              <button
                onClick={() => handleSocialLink("https://github.com/Veer-Parikh")}
                className="p-2 rounded-lg bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleSocialLink("https://www.linkedin.com/in/veer-parikh-811b6027a/")}
                className="p-2 rounded-lg bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleSocialLink("mailto:parikhveer71@gmail.com")}
                className="p-2 rounded-lg bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-muted rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
