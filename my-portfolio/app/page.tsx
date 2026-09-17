"use client";

import {
  ArrowUpRight,
  // Github,
  // Linkedin,
  Mail,
  ShieldCheck,
  Code2,
  Database,
  Globe2,
  Smartphone,
  Terminal,
  ChevronDown,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Global SDG Digital Dashboard",
    category: "DATA ANALYTICS PLATFORM",
    description:
      "A global platform for monitoring Sustainable Development Goal progress through interactive maps, rankings, regional analytics, and data visualization.",
    tech: ["Next.js", "Node.js", "MySQL", "Tailwind"],
    accent: "cyan",
  },
  {
    number: "02",
    title: "Business Inventory & Accounting",
    category: "BUSINESS MANAGEMENT SYSTEM",
    description:
      "Integrated inventory, purchasing, sales, invoicing, delivery, and accounting platform designed for real-world business operations.",
    tech: ["PHP", "MySQL", "Bootstrap", "AJAX"],
    accent: "blue",
  },
  {
    number: "03",
    title: "HR & Payroll Management",
    category: "ENTERPRISE SYSTEM",
    description:
      "Employee scheduling, attendance processing, biometric log integration, overtime, deductions, and payroll preparation system.",
    tech: ["VB.NET", "SQL Server", "ZKTeco"],
    accent: "purple",
  },
  {
    number: "04",
    title: "FixXpress",
    category: "MOBILE SERVICE PLATFORM",
    description:
      "On-demand repair booking application concept connecting customers with technicians through location-based services.",
    tech: ["Ionic React", "Capacitor", "Mapbox"],
    accent: "orange",
  },
];

const skills = [
  { name: "Next.js / React", level: "90%" },
  { name: "PHP / Backend Systems", level: "88%" },
  { name: "VB.NET / Desktop Systems", level: "92%" },
  { name: "MySQL / SQL Server", level: "90%" },
  { name: "Cybersecurity / ICT", level: "88%" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white selection:bg-cyan-400 selection:text-black">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#07111f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" className="text-xl font-black tracking-tight">
            RANDOLFH<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">About</a>
            <a href="#projects" className="transition hover:text-cyan-400">Projects</a>
            <a href="#skills" className="transition hover:text-cyan-400">Skills</a>
            <a href="#contact" className="transition hover:text-cyan-400">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/40 px-5 py-2 text-xs font-bold uppercase tracking-wider text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 lg:px-10">
        
        {/* Background glow */}
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                Full-Stack Developer · ICT Specialist
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[90px]">
              I BUILD
              <br />
              <span className="text-cyan-400">SYSTEMS</span>
              <br />
              THAT MATTER.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              I design and develop secure, practical, and data-driven digital
              solutions that transform complex operations into simple
              experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 text-sm font-black uppercase tracking-wider text-[#07111f] transition hover:bg-cyan-300"
              >
                Explore Projects
                <ArrowUpRight
                  size={17}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#about"
                className="rounded-full border border-white/15 px-7 py-4 text-sm font-bold uppercase tracking-wider text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                About Me
              </a>
            </div>
          </div>

          {/* HERO TERMINAL CARD */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-3xl bg-cyan-400/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c1a2b] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>

                <span className="font-mono text-[10px] text-slate-500">
                  developer.config
                </span>
              </div>

              <div className="space-y-5 p-7 font-mono text-sm">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">developer</span> = {"{"}
                </div>

                <div className="pl-5 text-slate-400">
                  name: <span className="text-green-300">"Randolfh"</span>,
                </div>

                <div className="pl-5 text-slate-400">
                  role: <span className="text-green-300">"Full-Stack Developer"</span>,
                </div>

                <div className="pl-5 text-slate-400">
                  focus: <span className="text-green-300">"Systems & Security"</span>,
                </div>

                <div className="pl-5 text-slate-400">
                  status: <span className="text-green-300">"Building..."</span>,
                </div>

                <div className="text-slate-400">{"}"}</div>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <div className="mb-2 text-xs text-slate-500">
                    CURRENT CAPABILITIES
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["WEB", "DESKTOP", "MOBILE", "DATABASE", "SECURITY"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-[10px] text-cyan-300"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-xl border border-cyan-400/30 bg-[#0c1a2b] px-5 py-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-cyan-400/10 p-2 text-cyan-400">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">
                    Core Principle
                  </p>
                  <p className="text-sm font-bold">Secure · Reliable · Scalable</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-slate-600 md:flex">
          <ChevronDown size={15} />
          Scroll to explore
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-[#0a1727]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
          {[
            ["06+", "Major Systems"],
            ["04+", "Development Stacks"],
            ["10+", "Years ICT Experience"],
            ["∞", "Problems to Solve"],
          ].map(([value, label]) => (
            <div key={label} className="px-6 py-10 text-center lg:py-14">
              <div className="text-3xl font-black text-cyan-400 lg:text-4xl">
                {value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-slate-500">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              01 / About Me
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              TECHNOLOGY
              <br />
              WITH A
              <br />
              <span className="text-slate-500">PURPOSE.</span>
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 text-slate-300">
              I am a cybersecurity-focused ICT professional and systems
              developer passionate about building software that solves actual
              operational problems.
            </p>

            <p className="mt-6 leading-8 text-slate-500">
              My experience spans military ICT infrastructure, hospital
              information systems, business applications, enterprise payroll,
              lending platforms, mobile applications, and modern data
              visualization platforms.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                [Code2, "Application Development"],
                [Database, "Database Architecture"],
                [ShieldCheck, "Cybersecurity & ICT"],
                [Globe2, "Data & Digital Platforms"],
              ].map(([Icon, text]) => (
                <div
                  key={text as string}
                  className="flex items-center gap-3 border border-white/10 bg-white/[0.02] p-4"
                >
                  <Icon size={20} className="text-cyan-400" />
                  <span className="text-sm font-semibold text-slate-300">
                    {text as string}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-y border-white/10 bg-[#0a1727]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                02 / Selected Work
              </p>

              <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
                SYSTEMS I&apos;VE
                <br />
                <span className="text-slate-500">BUILT.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-slate-500">
              A selection of platforms and applications developed to solve
              business, organizational, and operational challenges.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.number}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c1a2b] p-7 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-cyan-400">
                    / {project.number}
                  </span>

                  <ArrowUpRight
                    size={22}
                    className="text-slate-600 transition group-hover:text-cyan-400"
                  />
                </div>

                <p className="mt-12 text-[10px] font-bold tracking-[0.25em] text-slate-500">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
                  {project.title}
                </h3>

                <p className="mt-5 min-h-[80px] text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              03 / Technical Expertise
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
              BUILT ON
              <br />
              <span className="text-slate-500">EXPERIENCE.</span>
            </h2>

            <p className="mt-7 max-w-md leading-8 text-slate-500">
              Combining software engineering, database development,
              infrastructure knowledge, and cybersecurity principles.
            </p>
          </div>

          <div className="space-y-7">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-3 flex justify-between text-sm">
                  <span className="font-semibold text-slate-300">
                    {skill.name}
                  </span>
                  <span className="font-mono text-cyan-400">{skill.level}</span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-cyan-400"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-white/10 bg-[#0a1727]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            04 / What I Do
          </p>

          <h2 className="mb-16 text-4xl font-black tracking-tight sm:text-6xl">
            FROM IDEA
            <br />
            TO <span className="text-cyan-400">SYSTEM.</span>
          </h2>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {[
              {
                icon: Terminal,
                title: "Web Systems",
                text: "Modern web applications, dashboards, business platforms, and API-driven systems.",
              },
              {
                icon: Smartphone,
                title: "Mobile Apps",
                text: "Cross-platform mobile applications with maps, booking workflows, and integrations.",
              },
              {
                icon: ShieldCheck,
                title: "ICT & Security",
                text: "Infrastructure support, cybersecurity practices, database reliability, and system operations.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-[#0c1a2b] p-8 transition hover:bg-[#102238]"
              >
                <service.icon size={30} className="mb-8 text-cyan-400" />

                <h3 className="text-xl font-black">{service.title}</h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden px-6 py-32 lg:px-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[140px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            05 / Get In Touch
          </p>

          <h2 className="text-5xl font-black tracking-[-0.04em] sm:text-7xl">
            HAVE A SYSTEM
            <br />
            <span className="text-cyan-400">IN MIND?</span>
          </h2>

          <p className="mx-auto mt-7 max-w-lg leading-8 text-slate-500">
            Whether you need a business application, data platform, mobile
            solution, or technical consultation, let&apos;s build something
            useful.
          </p>

          <a
            href="mailto:your@email.com"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 text-sm font-black uppercase tracking-wider text-[#07111f] transition hover:bg-cyan-300"
          >
            Start a Conversation
            <Mail size={18} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-slate-600 md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} RANDOLFH. All rights reserved.
          </div>

          {/* <div className="flex items-center gap-5">
            <a href="#" className="transition hover:text-cyan-400">
              <Github size={18} />
            </a>
            <a href="#" className="transition hover:text-cyan-400">
              <Linkedin size={18} />
            </a>
            <a href="mailto:your@email.com" className="transition hover:text-cyan-400">
              <Mail size={18} />
            </a>
          </div> */}
        </div>
      </footer>
    </main>
  );
}