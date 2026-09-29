import Navbar from "@/components/navbar"
import ScrollProgress from "@/components/scroll-progress"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Leadership from "@/components/leadership"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="bg-background text-foreground">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Leadership />
        <Certifications />
        <Contact />
      </main>
    </>
  )
}
