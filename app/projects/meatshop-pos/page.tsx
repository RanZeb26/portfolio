"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Code2, Database, ShoppingCart, Package, Scale, BarChart3 } from "lucide-react";

export default function MeatShopProjectPage() {
  const features = [
    {
      icon: Package,
      title: "Product Management",
      description:
        "Manage meat products, product details, prices, and available inventory.",
    },
    {
      icon: Scale,
      title: "Weighing & Pricing",
      description:
        "Calculate product prices based on weight and the configured price per unit.",
    },
    {
      icon: ShoppingCart,
      title: "Point of Sale",
      description:
        "Process customer purchases and organize daily sales transactions.",
    },
    {
      icon: Database,
      title: "Inventory Tracking",
      description:
        "Maintain product stock records and track inventory changes.",
    },
    {
      icon: BarChart3,
      title: "Sales Monitoring",
      description:
        "Support daily business monitoring with organized transaction records.",
    },
    {
      icon: Code2,
      title: "Desktop Application",
      description:
        "A desktop-based application built with Python and Tkinter.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-black">
            RANDOLFH<span className="text-cyan-400">.</span>
          </Link>

          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>
        </div>
      </nav>

      {/* Project Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
          Python POS System / Featured Project
        </p>

        <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
          Global SDG 
          <br />
          <span className="text-cyan-400">Digital Dashboard</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
          A Python-powered point-of-sale and inventory management application
          designed to support meat shop operations, product pricing, sales
          transactions, and stock monitoring.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {["Python", "Tkinter", "SQLite", "POS"].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Screenshot */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#0c1a2b] p-2">
          <img
            src="/images/Dashboard_Full.jpg"
            alt="Meat Shop POS and Inventory application screenshot"
            className="max-h-[650px] w-full rounded-xl object-contain"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="border-y border-white/10 bg-[#0a1727]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              Project Overview
            </p>
            <h2 className="text-3xl font-black">About the System</h2>
          </div>

          <div className="space-y-5 leading-8 text-slate-400">
            <p>
              The Meat Shop POS & Inventory System is a desktop software
              project focused on simplifying common meat shop operations.
              It brings product management, pricing, sales, and inventory
              workflows into one application.
            </p>
            <p>
              The interface is developed with Python and Tkinter, with SQLite
              listed as the database technology for this portfolio entry.
              The actual implemented features can be documented and expanded
              to match your application.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
          Core Capabilities
        </p>

        <h2 className="mb-12 text-3xl font-black sm:text-4xl">
          System Features
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-[#0c1a2b] p-7 transition hover:border-cyan-400/40"
              >
                <Icon size={28} className="mb-6 text-cyan-400" />

                <h3 className="text-lg font-bold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technology */}
      <section className="border-y border-white/10 bg-[#0a1727]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Development Stack
          </p>

          <h2 className="text-3xl font-black">Technologies Used</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Python", "Application logic"],
              ["Tkinter", "Desktop user interface"],
              ["SQLite", "Local database"],
            ].map(([name, description]) => (
              <div
                key={name}
                className="rounded-xl border border-white/10 p-5"
              >
                <h3 className="font-bold text-white">{name}</h3>
                <p className="mt-2 text-sm text-slate-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-black sm:text-4xl">
          Have a project in mind?
        </h2>

        <p className="mt-4 text-slate-400">
          Let's discuss how software can improve your business operations.
        </p>

        <a
          href="mailto:randolfhsantos@gmail.com?subject=Meat%20Shop%20POS%20Project%20Inquiry"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 font-bold text-[#07111f] transition hover:bg-cyan-300"
        >
          Contact Me
          <ArrowUpRight size={18} />
        </a>

        <div className="mt-12">
          <Link
            href="/#projects"
            className="text-sm text-slate-500 transition hover:text-cyan-400"
          >
            <span className="inline-flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to all projects
            </span>
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-7 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} RANDOLFH. All rights reserved.
      </footer>
    </main>
  );
}