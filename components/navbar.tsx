"use client"

import { useState } from "react"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

interface NavbarProps {
  isScrolled: boolean,
  isDarkMode?: boolean,
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Veer-Parikh-Resume.pdf"
    link.download = "Veer-Parikh-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleGetInTouch = () => {
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex gap-2 justify-center items-center">
            <img src="/icon.png" alt="Logo" className="w-10 h-10 rounded-full" />
            <a href="#" className="text-lg sm:text-xl font-bold text-primary">
              Veer Parikh
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary/50"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="sm" className="rounded-full bg-transparent" onClick={handleDownloadResume}>
              <Download className="w-4 h-4 mr-1" />
              Resume
            </Button>
            <Button size="sm" className="rounded-full" onClick={handleGetInTouch}>
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full rounded-full bg-transparent"
                onClick={handleDownloadResume}
              >
                <Download className="w-4 h-4 mr-1" />
                Resume
              </Button>
              <Button size="sm" className="w-full rounded-full" onClick={handleGetInTouch}>
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
