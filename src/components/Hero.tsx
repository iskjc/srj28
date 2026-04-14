/**
 * @file Hero.tsx
 * @description Hero section with name, role, intro and primary actions
 */

import React from 'react'
import { ArrowRight, FileText, Github } from 'lucide-react'

/**
 * Hero - Primary landing area
 */
export default function Hero() {
  return (
    <section id="home" className="py-12">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Left - Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/60 dark:bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300">
              Open to research collaborations & internships
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
              Ruijie Sun
            </h1>

            <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl">
              Computer Science undergraduate focusing on AI Safety and Multimodal Learning. Currently
              conducting research on robust alignment methods and adaptive inference for vision-language models.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:-translate-y-0.5 transition"
              >
                <FileText className="h-4 w-4" />
                View CV
                <ArrowRight className="h-4 w-4 opacity-90" />
              </a>

              <a
                href="https://github.com/iskjc"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-800 hover:shadow-sm transition dark:border-slate-700 dark:text-slate-100"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>

            <div className="flex flex-wrap gap-2 text-xs mt-2">
              {['AI Safety', 'Multimodal', 'PyTorch', 'Vision-Language'].map((t) => (
                <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Visual Card */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-sky-400/20 via-violet-300/10 to-transparent blur-3xl rounded-2xl pointer-events-none" />
            <div className="relative rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/70 p-5 shadow-lg backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                  <img src="https://pub-cdn.sider.ai/u/U0R7H72R6JO/web-coder/69ddf7597c8f2ff4c723e278/resource/12df446c-3e60-483b-abe2-11174718c13e.jpg" alt="avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-xs uppercase text-slate-500 dark:text-slate-400 tracking-wide">Currently</div>
                  <div className="font-semibold text-sm text-slate-900 dark:text-slate-50">Undergraduate Researcher · M Lab</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Shanghai University · AI Safety & Multimodal Alignment</div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 text-sm">
                <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                  <div className="text-[0.7rem] text-slate-500 dark:text-slate-400 uppercase tracking-wide font-semibold">Highlights</div>
                  <ul className="mt-2 text-slate-700 dark:text-slate-200 text-sm space-y-2">
                    <li><span className="font-semibold">Role:</span> Undergraduate Researcher — M Lab (AI Safety & Multimodal Alignment)</li>
                    <li><span className="font-semibold">Research Focus:</span> Robustness, multimodal alignment, and adaptive inference for vision-language systems</li>
                    <li><span className="font-semibold">Open To:</span> Research collaborations & internship opportunities</li>
                  </ul>
                </div>

                <div className="flex items-center justify-between border border-dashed rounded-lg p-3 dark:border-slate-700">
                  <div>
                    <div className="text-xs font-semibold">Focus</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Robust & safe multimodal systems</div>
                  </div>
                  <div className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">Long-term</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  )
}