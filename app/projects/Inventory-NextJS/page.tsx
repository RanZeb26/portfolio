"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Package,
  ShoppingCart,
  FileText,
  Truck,
  BarChart3,
  Calculator,
  Database,
} from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Product & Inventory Management",
    description:
      "Manage product information, categories, brands, SKUs, barcodes, selling prices, and stock levels.",
  },
  {
    icon: ShoppingCart,
    title: "Sales Management",
    description:
      "Organize sales transactions, customer records, invoice details, and sales items.",
  },
  {
    icon: FileText,
    title: "Invoice Management",
    description:
      "Create, review, and print invoices with customer details, itemized purchases, and VAT calculations.",
  },
  {
    icon: Truck,
    title: "Purchasing & Delivery",
    description:
      "Maintain purchasing records and organize delivery-related business workflows.",
  },
  {
    icon: Calculator,
    title: "Accounting",
    description:
      "Organize accounts, revenue, expenses, assets, liabilities, and equity for financial tracking.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "Present business information in organized tables and reports to support operational decisions.",
  },
];

export default function BusinessInventoryPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-black">
            RAN<span className="text-cyan-400">DOLFH.</span>
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

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
          Business Management / Featured Project
        </p>

        <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
          Business Inventory
          <br />
          <span className="text-cyan-400">& Accounting System</span>
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
          A Next.js integrated business management application built to organize
          products, inventory, purchasing, sales, invoices, returns, and
          accounting records in one platform.
        </p>

        {/* Technologies */}
        <div className="mt-8 flex flex-wrap gap-3">
          {["HTML5", "CSS3", "MySQL", "TypeScript", "JavaScript", "Next.js"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300"
              >
                {tech}
              </span>
            )
          )}
        </div>

        {/* Main screenshot */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#0c1a2b] p-2">
          <img
            src="/images/Inventory-NextJS.png"
            alt="Business Inventory and Accounting System dashboard"
            className="max-h-[650px] w-full rounded-xl object-contain"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="border-y border-white/10 bg-[#0a1727]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              Project Overview
            </p>

            <h2 className="text-3xl font-black">
              About the System
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-slate-400">
            <p>
              This web-based application brings together essential business
              workflows, helping users manage products, monitor inventory,
              process sales, maintain purchasing records, and prepare invoices.
            </p>

            <p>
              The accounting component organizes financial information,
              including a Chart of Accounts and revenue and expense records.
              The system uses HTML5, CSS3, and TypeScript with PDO for database operations and MySQL
              for data storage.
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

                <h3 className="text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technology stack */}
      <section className="border-y border-white/10 bg-[#0a1727]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Development Stack
          </p>

          <h2 className="text-3xl font-black">
            Technologies Used
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["HTML5", "Server-side application logic"],
              ["CSS3", "Database connectivity"],
              ["TypeScript", "Relational database"],
              ["Next.js", "Responsive user interface"],
            ].map(([name, description]) => (
              <div
                key={name}
                className="rounded-xl border border-white/10 p-5"
              >
                <h3 className="font-bold">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-black sm:text-4xl">
          Let's Build Something Useful
        </h2>

        <p className="mt-4 leading-7 text-slate-400">
          Interested in business automation, inventory management, or custom
          software development? Let's talk.
        </p>

        <a
          href="mailto:randolfhsantos@gmail.com?subject=Business%20System%20Inquiry"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 font-bold text-[#07111f] transition hover:bg-cyan-300"
        >
          Contact Me
          <ArrowUpRight size={18} />
        </a>

        <div className="mt-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-400"
          >
            <ArrowLeft size={16} />
            Back to all projects
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-7 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} RANDOLFH. All rights reserved.
      </footer>
    </main>
  );
}