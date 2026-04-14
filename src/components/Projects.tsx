/**
 * @file Projects.tsx
 * @description Projects list with project cards highlighting tech stack and results
 */

import React from 'react'

/**
 * Project interface - structure for a project item
 */
interface Project {
  title: string
  period: string
  description: string
  techStack: string[]
  highlights: string[]
}

/**
 * ProjectCard - Display a single project
 */
function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/70 p-5 shadow-sm hover:shadow-md transition flex flex-col">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">{project.title}</h3>
          <div className="text-xs text-slate-500 dark:text-slate-400">{project.period}</div>
        </div>
        <div className="text-[0.7rem] bg-slate-100 px-2 py-1 rounded-full text-slate-700 dark:bg-slate-800 dark:text-slate-300">Research</div>
      </div>

      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.techStack.map((t) => (
          <span key={t} className="text-xs bg-slate-100 px-2 py-1 rounded-full dark:bg-slate-800 dark:text-slate-300 text-slate-700">
            {t}
          </span>
        ))}
      </div>

      <ul className="mt-4 text-sm text-slate-600 dark:text-slate-300 space-y-1 flex-1">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 items-start">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

/**
 * Projects - Section listing selected projects
 */
export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Adaptive Premature Inference for Vision-Language Models',
      period: 'Dec 2025',
      description:
        'Developed an adaptive inference strategy to reduce computation while preserving performance on VLM tasks.',
      techStack: ['PyTorch', 'Evaluation', 'VLM','Early-exit'],
      highlights: [
        'Dynamic stopping criteria based on confidence and representation stability.',
        'Measured speed–accuracy trade-offs on benchmark datasets.',
        'Analyzed robustness under distributional shifts.',
      ],
    },
    {
      title: 'Prompt-driven Safety Alignment for VLMs',
      period: 'Mar 2026',
      description:
        'Explored prompt-based methods and projection techniques to align safety subspaces across modalities.',
      techStack: ['PyTorch', 'LMM', 'Mechanstic-Interpretability', 'Soft Prompt Engineering'],
      highlights: [
        'Characterized shared safety directions with PLS and cosine similarity.',
        'Combined visual tokens and safety prompts to improve safety performance.',
        'Trained soft prompts and projection heads for internal alignment.',
      ],
    },
  ]

  return (
    <section id="projects" className="py-12">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">Projects</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Selected research and technical work with clear tech stack and outcomes.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}