/**
 * @file useSystemTheme.tsx
 * @description Hook to sync HTML class with system color scheme (prefers-color-scheme)
 */

import { useEffect } from 'react'

/**
 * useSystemTheme - Synchronize document root `dark` class with system preference.
 * Adds/removes `dark` class on document.documentElement.
 */
export default function useSystemTheme(): void {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const apply = (isDark: boolean) => {
      const root = document.documentElement
      if (isDark) root.classList.add('dark')
      else root.classList.remove('dark')
    }

    apply(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => apply(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])
}