'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const pathname = usePathname()
  const isHome   = pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const white = !isHome || scrolled

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      white ? 'bg-white shadow-sm border-b border-[rgba(13,30,58,0.08)]' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-9 h-9">
            <Image src="/logo.png" alt="Chaben Technology" fill className="object-contain" priority />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-display font-bold text-base tracking-widest transition-colors ${white ? 'text-[#0D1E3A]' : 'text-white'}`}>CHABEN</span>
            <span className="font-ui text-[8px] font-semibold tracking-[0.25em] uppercase text-[#B8892A]">Technology</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className={`nav-link ${pathname === l.href ? 'active' : ''} ${white ? 'text-[#3E4E5E] hover:text-[#0D1E3A]' : 'text-white/80 hover:text-white'}`}>
              {l.label}
            </Link>
          ))}
        </div>

        <Link href="/contact" className="hidden lg:inline-flex btn-gold text-xs px-6 py-3">
          Get In Touch
        </Link>

        <button className="lg:hidden p-2 flex flex-col gap-1.5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {[0,1,2].map((i) => (
            <span key={i} className={`block w-6 h-px transition-all duration-300 ${white ? 'bg-[#0D1E3A]' : 'bg-white'} ${
              i === 0 && open ? 'rotate-45 translate-y-2' :
              i === 1 && open ? 'opacity-0' :
              i === 2 && open ? '-rotate-45 -translate-y-2' : ''
            }`} />
          ))}
        </button>
      </nav>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-72' : 'max-h-0'}`}>
        <div className="bg-white border-t border-[rgba(13,30,58,0.08)] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className={`nav-link ${pathname === l.href ? 'active text-[#0D1E3A]' : 'text-[#3E4E5E]'}`}
              onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold text-center mt-2" onClick={() => setOpen(false)}>
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  )
}
