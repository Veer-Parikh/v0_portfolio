"use client"

import type { ComponentType } from "react"
import { Bot, Boxes, ChartLine, FileSearch, Languages, MessageSquareCode, Soup } from "lucide-react"
import {
  SiC,
  SiCanva,
  SiExpress,
  SiFastify,
  SiFigma,
  SiFirebase,
  SiGooglegemini,
  SiHuggingface,
  SiJavascript,
  SiJupyter,
  SiLangchain,
  SiMongodb,
  SiMongoose,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOpenai,
  SiOpenjdk,
  SiPandas,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiSelenium,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"
import { cn } from "@/lib/utils"

const icons: Record<string, ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
  "Gemini API": SiGooglegemini,
  "OpenAI API": SiOpenai,
  LangChain: SiLangchain,
  "RAG Pipelines": FileSearch,
  "Prompt Engineering": MessageSquareCode,
  "AI Agents": Bot,
  "Vector Databases": Boxes,
  "Hugging Face": SiHuggingface,
  "scikit-learn": SiScikitlearn,
  NLP: Languages,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Fastify: SiFastify,
  Prisma: SiPrisma,
  Mongoose: SiMongoose,
  "Socket.IO": SiSocketdotio,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Supabase: SiSupabase,
  Firebase: SiFirebase,
  Python: SiPython,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  Matplotlib: ChartLine,
  Jupyter: SiJupyter,
  Selenium: SiSelenium,
  BeautifulSoup: Soup,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "shadcn/ui": SiShadcnui,
  "Material UI": SiMui,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Java: SiOpenjdk,
  C: SiC,
  Figma: SiFigma,
  Canva: SiCanva,
}

/** Brand glyph for a tool, or a monogram when no icon exists. */
export function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name]
  if (!Icon) {
    return (
      <span aria-hidden className={cn("grid place-items-center font-mono text-[9px] font-bold uppercase", className)}>
        {name.slice(0, 2)}
      </span>
    )
  }
  return <Icon aria-hidden className={className} />
}
