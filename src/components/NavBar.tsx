/**
 * @file NavBar.tsx
 * @description Top navigation bar with responsive behavior and smooth scroll triggers
 */

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

/**
 * NavBarProps - Props for NavBar
 * @property onNavClick - callback when nav item clicked (receives section id)
 */
interface NavBarProps {
  onNavClick: (id: string) => void
}

/**
 * NavBar - Responsive top navigation with logo and menu
 */
export default function NavBar({ onNavClick }: NavBarProps) {
  const [open, setOpen] = useState(false)
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleClick = (id: string) => {
    setOpen(false)
    onNavClick(id)
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-violet-500 text-white font-semibold shadow-sm">
            RS
          </div>
          <div className="text-sm font-medium text-slate-900 dark:text-slate-50">Ruijie Sun</div>
        </div>

        <nav className="hidden md:flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => handleClick(it.id)}
              className="px-3 py-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {it.label}
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            aria-label="menu"
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {open ? <X className="h-5 w-5 text-slate-700 dark:text-slate-200" /> : <Menu className="h-5 w-5 text-slate-700 dark:text-slate-200" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md">
          <div className="mx-auto max-w-5xl px-4 py-3 flex flex-col gap-2">
            {items.map((it) => (
              <button
                key={it.id}
                onClick={() => handleClick(it.id)}
                className="text-left rounded-md px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                {it.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}