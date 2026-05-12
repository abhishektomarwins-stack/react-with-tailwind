import { useState } from 'react'
import logo from '../assets/images/svg/logo.svg'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#' },
  { label: 'Community', href: '#community' },
  { label: 'Blog', href: '#' },
  { label: 'Pricing', href: '#' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8">

        <a href="#" className="flex items-center gap-2 text-lg text-heading no-underline sm:text-xl">
          <img src={logo} alt="Nexcent logo" className="h-8 w-8" />
          Nexcent
        </a>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 lg:gap-8">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href}
                className="text-sm font-bold text-heading no-underline transition-colors duration-300 hover:text-primary">
                {label}
              </a>
            ))}
          </nav>
          <button className="inline-flex cursor-pointer items-center gap-2 rounded-sm border-0 bg-primary px-6 py-3 text-sm font-bold text-white">
            Register Now
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 cursor-pointer items-center justify-center border border-border-soft bg-white text-heading"
          type="button"
          aria-controls="mobileMenu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`} aria-hidden="true"></i>
        </button>
      </div>

      {menuOpen && (
        <div id="mobileMenu" className="absolute top-full left-0 right-0 border-t border-border-soft bg-surface px-4 pb-5 pt-2 shadow-sm sm:px-6 md:hidden">
          <nav className="flex flex-col">
            {navLinks.map(({ label, href }, i) => (
              <a key={label} href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-bold text-heading no-underline transition-colors duration-300 hover:text-primary py-3${i < navLinks.length - 1 ? ' border-b border-border-soft' : ''}`}>
                {label}
              </a>
            ))}
          </nav>
          <button className="inline-flex cursor-pointer items-center gap-2 rounded-sm border-0 bg-primary px-6 py-3 text-sm font-bold text-white mt-3 w-full justify-center">
            Register Now
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      )}
    </header>
  )
}
