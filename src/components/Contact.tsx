/**
 * @file Contact.tsx
 * @description Contact section with primary communication channels and social links
 */

import React from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'

/**
 * Contact - Contact cards and social links
 */
export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">Contact</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Open to discussions on research collaborations, internships, and projects in AI safety and multimodal learning.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <a href="mailto:iskjcsun@gmail.com" className="flex items-center gap-3 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/70 p-4 hover:shadow-md transition">
            <div className="h-10 w-10 rounded-lg bg-sky-100 dark:bg-sky-900 flex items-center justify-center text-sky-600">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold">Email</div>
              <div className="text-sm text-slate-700 dark:text-slate-200">iskjcsun@gmail.com</div>
            </div>
          </a>

          <a href="https://github.com/iskjc" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/70 p-4 hover:shadow-md transition">
            <div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
              <Github className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold">GitHub</div>
              <div className="text-sm text-slate-700 dark:text-slate-200">@iskjc</div>
            </div>
          </a>

          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/70 p-4 hover:shadow-md transition">
            <div className="h-10 w-10 rounded-lg bg-sky-500 text-white flex items-center justify-center">
              <Linkedin className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold">LinkedIn</div>
              <div className="text-sm text-slate-700 dark:text-slate-200">Professional profile</div>
            </div>
          </a>
        </div>

        <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">
          <p>Built with modern tools and thoughtful design. Resume available via the View CV button.</p>
        </div>
      </div>
    </section>
  )
}