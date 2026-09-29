// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Veer Parikh",
  role: "Graduate Engineer Trainee — AI",
  company: "MCX",
  location: "Mumbai, India",
  coordinates: "19.07°N 72.87°E",
  email: "parikhveer71@gmail.com",
  phone: "+91 98921 34759",
  phoneHref: "tel:+919892134759",
  resume: "/Veer-Parikh-Resume.pdf",
  github: "https://github.com/Veer-Parikh",
  linkedin: "https://www.linkedin.com/in/veer-parikh-811b6027a/",
}

export const heroStatement =
  "Backend-first engineer, now building with *AI* at MCX. I design APIs, microservices and data systems that hold up when real users show up."

export const aboutText =
  "I'm Veer — a *backend-first* engineer from Mumbai. For the last few years I've built APIs, microservices and data pipelines that real people depend on: a school platform serving 10,000+ students and teachers, an AI inventory system that took runner-up at Hackniche, and real-time streaming backends. Today I'm a Graduate Engineer Trainee in *AI* at MCX — bringing that same systems mindset to applied AI."

export const facts = [
  { label: "Currently", value: "GET — AI, MCX" },
  { label: "Based in", value: "Mumbai, India" },
  { label: "Education", value: "B.Tech CS, DJSCE '26", sub: "9.08 CGPA" },
  { label: "Focus", value: "Backend · AI · Systems" },
]

/* ── Journey ─────────────────────────────────────────────── */

export const currentRole = {
  role: "Graduate Engineer Trainee",
  track: "AI",
  company: "MCX",
  companyFull: "Multi Commodity Exchange of India Ltd.",
  period: "2026 — Present",
  location: "Mumbai",
  summary:
    "My first full-time role — on the AI track at India's largest commodity derivatives exchange, working where machine learning meets market infrastructure.",
  tags: ["Applied AI", "Full-time", "Commodity markets", "Mumbai"],
}

export type Step = { role: string; period: string; detail: string }

export type ExperienceItem = {
  org: string
  role: string
  period: string
  location: string
  status: "Completed" | "Graduated"
  points?: string[]
  steps?: Step[]
}

export const experience: ExperienceItem[] = [
  {
    org: "DJ Unicode",
    role: "Student developer community, DJSCE",
    period: "Jun 2023 — 2026",
    location: "Mumbai",
    status: "Completed",
    steps: [
      {
        role: "Outhouse & Deployments Head",
        period: "Jun 2025 — 2026",
        detail: "Led communication and delivery for outhouse projects as project lead, and owned deployments.",
      },
      {
        role: "Node.js Mentor",
        period: "Jun 2024 — May 2025",
        detail: "Mentored 8 juniors through weekly, hand-crafted tasks that built up into a full project.",
      },
      {
        role: "Node.js Mentee",
        period: "Jun 2023 — May 2024",
        detail: "Picked up Node.js and backend development through the mentorship program.",
      },
    ],
  },
  {
    org: "Express Rupya Capital Advisors",
    role: "Web Development & Web Scraping Intern",
    period: "Jun 2024 — Apr 2025",
    location: "Mumbai · On-site / Hybrid",
    status: "Completed",
    points: [
      "Managed the company's websites and built an internal Attendance Portal with React and Express.",
      "Built automated data-extraction pipelines with BeautifulSoup and Selenium WebDriver.",
    ],
  },
  {
    org: "Branding Catalyst Pvt. Ltd.",
    role: "Backend Development Intern",
    period: "Aug 2024 — Oct 2024",
    location: "Remote",
    status: "Completed",
    points: [
      "Owned the backend for 2 company projects using Node.js, Express and SQL.",
      "Built scalable APIs, implemented authentication and contributed to production deployments.",
    ],
  },
  {
    org: "D.J. Sanghvi College of Engineering",
    role: "B.Tech, Computer Science",
    period: "2022 — 2026",
    location: "Mumbai",
    status: "Graduated",
    points: [
      "Computer Science, 9.08 CGPA.",
      "Runner-up at Hackniche 3.0; creatives co-committee at DJSCE ACM.",
    ],
  },
]

/* ── Work ────────────────────────────────────────────────── */

export type Project = {
  title: string
  description: string
  tags: string[]
  link: string
  github: string
  image: string
}

export const projects: Project[] = [
  {
    title: "SVKM Project",
    description: "Live project for SVKM schools as backend lead.",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose"],
    link: "",
    github: "",
    image: "/educonnect.jpeg",
  },
  {
    title: "SkillForge",
    description: "Microservices LMS with mentor-user architecture.",
    tags: ["Microservices", "Node.js", "Prisma", "Supabase", "MongoDB", "TypeScript"],
    link: "",
    github: "https://github.com/your-username/SkillForge-Backend",
    image: "/skillforge.png",
  },
  {
    title: "GateHub",
    description: "Internship project – MyGate clone for society management.",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "",
    github: "https://github.com/your-username/GateHub",
    image: "/mygate.png",
  },
  {
    title: "Social Sync",
    description: "Backend contributor for a live video streaming platform.",
    tags: ["Fastify", "Node.js", "Prisma", "WebSocket", "Socket.IO", "SQL"],
    link: "",
    github: "https://github.com/your-username/Social-Sync",
    image: "/social-sync.png",
  },
  {
    title: "Inventory Management System",
    description: "Hackathon project with advanced inventory features.",
    tags: ["React", "Node.js", "MongoDB", "Prisma", "Gemini AI"],
    link: "https://codeblooded-hackniche3.vercel.app/",
    github: "https://github.com/your-username/inventory-system",
    image: "/ims.png",
  },
  {
    title: "EduCare",
    description: "Teacher-student platform with AI-based analysis.",
    tags: ["React", "Node.js", "MongoDB", "Prisma", "Gemini AI"],
    link: "",
    github: "https://github.com/your-username/educare",
    image: "/educare.png",
  },
  {
    title: "Repo Reveal",
    description: "GitHub repository scraper showing repo insights.",
    tags: ["React", "Node.js", "Cheerio", "Prisma"],
    link: "",
    github: "https://github.com/your-username/repo-reveal",
    image: "/repo-reveal.png",
  },
  {
    title: "Blogify",
    description: "Blog social media app with search & sentiment analysis.",
    tags: ["React", "Node.js", "Supabase", "Prisma"],
    link: "",
    github: "https://github.com/your-username/Blogify",
    image: "/blogify.png",
  },
  {
    title: "MindLink",
    description: "Real-time collaborative coding environment.",
    tags: ["React", "Node.js", "Gitea", "Socket.IO", "Monaco"],
    link: "",
    github: "https://github.com/your-username/MindLink",
    image: "/mindlink.png",
  },
]

/* ── Toolkit ─────────────────────────────────────────────── */

export type StackGroup = { group: string; items: string[]; focus?: boolean }

export const stack: StackGroup[] = [
  {
    group: "AI & ML",
    focus: true,
    items: [
      "LangChain",
      "RAG Pipelines",
      "Prompt Engineering",
      "AI Agents",
      "Vector Databases",
      "Hugging Face",
      "NLP",
    ],
  },
  { group: "Backend", items: ["Node.js", "Express", "Fastify", "Prisma", "Mongoose", "Socket.IO"] },
  { group: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Neon", "Firebase"] },
  { group: "Data & Scraping", items: ["NumPy", "Pandas", "Matplotlib", "Jupyter", "Selenium", "BeautifulSoup"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Material UI"] },
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "C"] },
  { group: "Design", items: ["Figma", "Canva"] },
]

/* ── Community ───────────────────────────────────────────── */

export const community = [
  {
    title: "Mentee → Mentor → Head",
    org: "DJ Unicode",
    period: "2023 — 2026",
    description:
      "Joined as a Node.js mentee, came back to mentor 8 juniors, and wrapped up as Outhouse & Deployments Head.",
    image: "/mentor.jpg",
  },
  {
    title: "Backend Lead",
    org: "SVKM Schools Project",
    period: "10,000+ users",
    description: "Mentored and managed backend development for a live school management system used across SVKM schools.",
    image: "/deployment.jpg",
  },
  {
    title: "Creatives Co-Committee",
    org: "DJSCE ACM",
    period: "2023 — 2024",
    description:
      "Designed soft and hard creatives for technical and non-technical events, and helped organise a 24-hour hackathon with a ₹1.5L prize pool.",
    image: "/cocom.jpg",
  },
]

/* ── Recognition ─────────────────────────────────────────── */

export const recognition = [
  {
    kind: "Certification",
    title: "Oracle Cloud Infrastructure 2025 Certified Developer Professional",
    issuer: "Oracle",
    year: 2025,
    level: "Professional",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E7BDBE51F3BA8B8B69F3F840D30F99541965C61424C4705DCA7850054C325797",
    image: "/oracle.png",
    cta: "Verify credential",
    badge: true,
  },
  {
    kind: "Hackathon",
    title: "Hackniche 3.0 — Runner-up, Web/App domain",
    issuer: "DJ Synapse × GDG DJSCE",
    year: 2025,
    level: "2nd of 40 teams",
    url: "https://drive.google.com/file/d/1YYO_ELOZqzIv4xnp0iLyxRaFlFSAFCSR/view?usp=sharing",
    image: "/hackniche.jpg",
    cta: "View certificate",
    badge: false,
  },
]

export const tickerStats = [
  { label: "Now", value: "GET · AI @ MCX" },
  { label: "B.Tech CS", value: "DJSCE '26" },
  { label: "CGPA", value: "9.08" },
  { label: "Users served", value: "10,000+" },
  { label: "Juniors mentored", value: "08" },
  { label: "Hackniche 3.0", value: "Runner-up" },
  { label: "OCI Developer", value: "Professional" },
  { label: "Projects built", value: String(projects.length).padStart(2, "0") },
  { label: "Internships", value: "02" },
]
