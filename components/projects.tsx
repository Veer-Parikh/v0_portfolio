"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, GithubIcon } from "lucide-react"

// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     description: "A full-stack e-commerce solution with real-time inventory management",
//     tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
//     link: "https://example.com/project1",
//     github: "https://github.com/example/project1",
//     image: "/ecommerce-platform.jpg",
//   },
//   {
//     id: 2,
//     title: "Project Management Tool",
//     description: "Collaborative project management app with real-time updates",
//     tags: ["Next.js", "WebSocket", "TypeScript", "Tailwind"],
//     link: "https://example.com/project2",
//     github: "https://github.com/example/project2",
//     image: "/project-management-board.png",
//   },
//   {
//     id: 3,
//     title: "Analytics Dashboard",
//     description: "Interactive analytics dashboard for business intelligence",
//     tags: ["React", "D3.js", "AWS", "PostgreSQL"],
//     link: "https://example.com/project3",
//     github: "https://github.com/example/project3",
//     image: "/analytics-dashboard.png",
//   },
// ]
const projects = [
  {
    id: 1,
    title: "SVKM Project",
    description: "Live project for SVKM schools as backend lead.",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose"],
    link: "",
    github: "",
    image: "/images/svkm.png",
  },
  {
    id: 2,
    title: "SkillForge",
    description: "Microservices LMS with mentor-user architecture.",
    tags: ["Microservices", "Node.js", "Prisma", "Supabase", "MongoDB", "TypeScript"],
    link: "",
    github: "https://github.com/your-username/SkillForge-Backend",
    image: "/images/skillforge.png",
  },
  {
    id: 3,
    title: "GateHub",
    description: "Internship project – MyGate clone for society management.",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "",
    github: "https://github.com/your-username/GateHub",
    image: "/images/gatehub.png",
  },
  {
    id: 4,
    title: "Social Sync",
    description: "Backend contributor for a live video streaming platform.",
    tags: ["Fastify", "Node.js", "Prisma", "WebSocket", "Socket.IO", "SQL"],
    link: "",
    github: "https://github.com/your-username/Social-Sync",
    image: "/images/socialsync.png",
  },
  {
    id: 5,
    title: "Inventory Management System",
    description: "Hackathon project with advanced inventory features.",
    tags: ["React", "Node.js", "MongoDB", "Prisma", "Gemini AI"],
    link: "https://codeblooded-hackniche3.vercel.app/",
    github: "https://github.com/your-username/inventory-system",
    image: "/images/inventory.png",
  },
  {
    id: 6,
    title: "EduCare",
    description: "Teacher-student platform with AI-based analysis.",
    tags: ["React", "Node.js", "MongoDB", "Prisma", "Gemini AI"],
    link: "",
    github: "https://github.com/your-username/educare",
    image: "/images/educare.png",
  },
  {
    id: 7,
    title: "Repo Reveal",
    description: "GitHub repository scraper showing repo insights.",
    tags: ["React", "Node.js", "Cheerio", "Prisma"],
    link: "",
    github: "https://github.com/your-username/repo-reveal",
    image: "/images/repo-reveal.png",
  },
  {
    id: 8,
    title: "Blogify",
    description: "Blog social media app with search & sentiment analysis.",
    tags: ["React", "Node.js", "Supabase", "Prisma"],
    link: "",
    github: "https://github.com/your-username/Blogify",
    image: "/images/blogify.png",
  },
  {
    id: 9,
    title: "MindLink",
    description: "Real-time collaborative coding environment.",
    tags: ["React", "Node.js", "Gitea", "Socket.IO", "Monaco"],
    link: "",
    github: "https://github.com/your-username/MindLink",
    image: "/images/mindlink.png",
  }
];

export default function Projects() {
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

    const element = document.getElementById("projects")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const handleViewProject = (link: string) => {
    window.open(link, "_blank")
  }

  const handleViewCode = (github: string) => {
    window.open(github, "_blank")
  }

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A selection of my recent work showcasing different technologies and problem-solving approaches
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group overflow-hidden hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <button
                    onClick={() => handleViewProject(project.link)}
                    className="flex items-center gap-1 text-xs font-medium text-primary hover:text-accent transition-colors"
                  >
                    Visit <ExternalLink className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => handleViewCode(project.github)}
                    className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Code <GithubIcon className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
