import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/svg/logo.svg'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'Community', to: '/community' },
  { label: 'Blog', to: '/blog' },
  { label: 'Pricing', to: '/pricing' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 md:px-8">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold text-heading no-underline sm:text-xl">
          <img src={logo} alt="Nexcent logo" title="Nexcent logo" className="size-12" />
          Nexcent
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex flex-wrap items-center gap-4 lg:gap-8">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-base font-bold no-underline transition-colors duration-200 hover:text-primary ${isActive ? 'text-primary' : 'text-heading'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/pricing"
            className="inline-flex cursor-pointer items-center gap-2 rounded-sm border-0 bg-primary hover:bg-primary/80 px-6 py-3 text-sm font-bold text-white"
          >
            Register Now
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border-soft bg-white text-heading"
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
        <div id="mobileMenu" className="md:hidden border-t border-border-soft bg-surface px-4 pb-4 pt-3">
          <nav className="flex flex-col items-end gap-2">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-sm px-2 py-2 text-right text-sm font-bold no-underline transition-colors duration-200 hover:bg-white hover:text-primary ${isActive ? 'text-primary' : 'text-heading'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/pricing"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm border-0 bg-primary px-6 py-3 text-sm font-bold text-white"
          >
            Register Now
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      )}
    </header>
  )
}
