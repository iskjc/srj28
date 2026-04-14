/**
 * @file Home.tsx
 * @description Assembles the personal homepage from modular components with smooth scroll and system theme support
 */

import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import useSystemTheme from '../hooks/useSystemTheme'

/**
 * scrollToSection - Smoothly scroll to the given section id
 * @param id section id to scroll into view
 */
function scrollToSection(id: string) {
  if (typeof document === 'undefined') return
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/**
 * Home - Root page combining NavBar and content sections
 */
export default function Home() {
  useSystemTheme()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-50 antialiased">
      <div className="fixed inset-x-0 top-0 h-56 bg-gradient-to-b from-sky-400/15 via-violet-300/8 to-transparent pointer-events-none blur-3xl" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <NavBar onNavClick={scrollToSection} />
        <main className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>

        <footer className="mx-auto max-w-5xl px-4 py-8 text-sm text-slate-500 dark:text-slate-400">
          <div className="border-t border-slate-200/60 dark:border-slate-800/60 pt-6">© {new Date().getFullYear()} Ruijie Sun · Built with care</div>
        </footer>
      </div>
    </div>
  )
}