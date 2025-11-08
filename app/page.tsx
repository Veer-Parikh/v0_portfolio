"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Leadership from "@/components/leadership"
import Certifications from "@/components/certifications"
import About from "@/components/about"
import Contact from "@/components/contact"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-background text-foreground">
      <Navbar isScrolled={isScrolled} isDarkMode={isDarkMode} />
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Leadership />
      <Certifications />
      <About />
      <Contact />
    </main>
  )
}
