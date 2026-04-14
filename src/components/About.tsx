/**
 * @file About.tsx
 * @description About section: education, research, skills
 */

import React from 'react'

/**
 * StatCardProps - small card used in About section
 */
interface StatCardProps {
  title: string
  children: React.ReactNode
}

/**
 * StatCard - Reusable card for education/research/skills
 */
function StatCard({ title, children }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/70 p-4 shadow-sm hover:shadow-md transition">
      <div className="text-[0.7rem] uppercase text-slate-500 dark:text-slate-400 font-semibold tracking-wide">{title}</div>
      <div className="mt-3 text-sm text-slate-700 dark:text-slate-200">{children}</div>
    </div>
  )
}

/**
 * About - Education, research and skills area
 */
export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">About</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Background in computer science with research focus on AI safety and multimodal alignment.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <StatCard title="Education">
            <div className="font-semibold">Shanghai University</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">B.Eng. in Computer Science · Sep 2024 – Present</div>
            <div className="mt-2 text-sm">GPA: 3.5 / 4.0 · Exchange: University of Toronto (Sep 2026 – Jan 2027)</div>
          </StatCard>

          <StatCard title="Research">
            <div className="font-semibold">M Lab · Hanzhang Wang</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Undergraduate Researcher · Sep 2025 – Present</div>
            <ul className="mt-2 text-sm list-inside list-disc space-y-1 text-slate-600 dark:text-slate-300">
              <li>AI safety for multimodal models</li>
              <li>Representation learning & alignment</li>
              <li>Designing safety mechanisms and evaluations</li>
            </ul>
          </StatCard>

          <StatCard title="Skills">
            <div className="font-semibold">Languages</div>
            <div className="text-sm">Python · C++ · SQL</div>
            <div className="mt-2 font-semibold">Frameworks & Tools</div>
            <div className="text-sm">PyTorch · Hugging Face · Git · Docker · Linux</div>
          </StatCard>
        </div>
      </div>
    </section>
  )
}