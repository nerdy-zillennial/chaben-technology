'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="2" width="12" height="12" stroke="#1A6B9E" strokeWidth="1.5"/>
        <rect x="18" y="2" width="12" height="12" stroke="#1A6B9E" strokeWidth="1.5"/>
        <rect x="2" y="18" width="12" height="12" stroke="#1A6B9E" strokeWidth="1.5"/>
        <rect x="18" y="18" width="12" height="12" stroke="#1A6B9E" strokeWidth="1.5"/>
        <line x1="14" y1="8" x2="18" y2="8" stroke="#B8892A" strokeWidth="1.5"/>
        <line x1="14" y1="24" x2="18" y2="24" stroke="#B8892A" strokeWidth="1.5"/>
        <line x1="8" y1="14" x2="8" y2="18" stroke="#B8892A" strokeWidth="1.5"/>
        <line x1="24" y1="14" x2="24" y2="18" stroke="#B8892A" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Digital Systems Integration',
    body: 'End-to-end digital ecosystems — cloud migration, ERP/CRM platforms, API orchestration, and legacy modernisation built to scale.',
    href: '/services#integration',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="13" stroke="#1A6B9E" strokeWidth="1.5"/>
        <path d="M16 8v8l5 3" stroke="#B8892A" strokeWidth="1.5" strokeLinecap="square"/>
      </svg>
    ),
    title: 'IT Strategy & Advisory',
    body: 'Board-level technology counsel. We translate complex digital landscapes into clear investment roadmaps aligned with organisational objectives.',
    href: '/services#strategy',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="10" r="5" stroke="#1A6B9E" strokeWidth="1.5"/>
        <path d="M6 28c0-5.52 4.48-10 10-10s10 4.48 10 10" stroke="#1A6B9E" strokeWidth="1.5" strokeLinecap="square"/>
        <line x1="22" y1="18" x2="30" y2="18" stroke="#B8892A" strokeWidth="1.5"/>
        <line x1="26" y1="14" x2="26" y2="22" stroke="#B8892A" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'IT Staff Augmentation',
    body: 'Pre-vetted senior engineers embedded into your teams under a Managed Services model. Global-standard talent, local accountability.',
    href: '/services#augmentation',
  },
]

const stats = [
  { value: '3+', label: 'Countries Active' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '6', label: 'Group Subsidiaries' },
]

export default function Home() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const items = ref.current?.querySelectorAll('.hero-reveal')
    items?.forEach((el, i) => setTimeout(() => el.classList.add('vis'), 150 + i * 120))
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('vis')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(140deg, #0D1E3A 0%, #1A3259 50%, #1A6B9E 100%)' }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(rgba(184,137,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(184,137,42,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1800&q=75"
            alt="" fill className="object-cover opacity-[0.07]" priority />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(26,107,158,0.22) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 w-full">
          <div className="max-w-3xl">
            <div className="hero-reveal reveal eyebrow mb-8">
              <span className="gold-bar" />Chaben Technology Solution Ltd
            </div>
            <h1 className="hero-reveal reveal text-white font-display font-bold mb-6"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              Engineering the{' '}
              <span className="grad">Digital Backbone</span>{' '}
              of Africa&apos;s Institutions.
            </h1>
            <p className="hero-reveal reveal text-white/65 font-body mb-10 max-w-xl"
              style={{ fontSize: '1.1rem', lineHeight: 1.75 }}>
              Systems integration, executive IT strategy, and elite managed services — delivered at the rigour of a global institution.
            </p>
            <div className="hero-reveal reveal flex flex-wrap gap-4 mb-16">
              <Link href="/contact" className="btn-gold">
                Partner With Us
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </Link>
              <Link href="/services" className="btn-outline">Our Services</Link>
            </div>

            <div className="hero-reveal reveal grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-[#B8892A] mb-1" style={{ fontSize: '2.1rem' }}>{s.value}</p>
                  <p className="font-ui text-[10px] tracking-[0.15em] uppercase text-white/40">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="eyebrow mb-4"><span className="gold-bar" />What We Do</div>
              <h2 className="font-display font-bold text-navy" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.1 }}>
                Three Pillars of Technology Leadership
              </h2>
            </div>
            <Link href="/services" className="flex-shrink-0 font-ui text-xs font-semibold tracking-widest uppercase text-[#1A6B9E] hover:text-[#0D1E3A] transition-colors">
              All Services →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link key={s.title} href={s.href}
                className="card block p-8 group"
                style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="mb-6 w-14 h-14 flex items-center justify-center" style={{ background: '#EEF2F7' }}>
                  {s.icon}
                </div>
                <h3 className="font-display font-bold text-[#0D1E3A] mb-3" style={{ fontSize: '1.25rem', lineHeight: 1.2 }}>{s.title}</h3>
                <p className="font-body text-[#3E4E5E] text-sm mb-6" style={{ lineHeight: 1.75 }}>{s.body}</p>
                <span className="font-ui text-xs font-semibold tracking-widest uppercase text-[#1A6B9E] group-hover:text-[#0D1E3A] transition-colors">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24" style={{ background: '#F7F9FC' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="reveal eyebrow mb-5"><span className="gold-bar" />Why Chaben Technology</div>
              <h2 className="reveal font-display font-bold text-[#0D1E3A] mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.1 }}>
                Local Execution.{' '}<span className="grad">Global Standard.</span>
              </h2>
              <p className="reveal font-body text-[#3E4E5E] mb-6" style={{ lineHeight: 1.8 }}>
                We are not a technology vendor. We are a technology institution — one that draws its operational philosophy from the Chaben Holdings mandate of integrated value creation.
              </p>
              <p className="reveal font-body text-[#3E4E5E] mb-8" style={{ lineHeight: 1.8 }}>
                Every system we integrate and every engineer we place is built to outlast a project cycle — designed for the generation of African institutions being built today.
              </p>
              <div className="reveal flex gap-4">
                <Link href="/about" className="btn-navy">Our Story</Link>
                <Link href="/contact" className="btn-outline-navy">Work With Us</Link>
              </div>
            </div>

            <div className="reveal relative h-96 lg:h-[480px]">
              <div className="absolute inset-0 overflow-hidden" style={{ border: '1px solid rgba(13,30,58,0.1)' }}>
                <Image src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=700&q=80"
                  alt="Technology professionals" fill className="object-cover" />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(13,30,58,0.4) 100%)' }} />
              </div>
              <div className="absolute -bottom-5 -left-5 p-6 bg-white shadow-xl" style={{ border: '1px solid rgba(13,30,58,0.08)' }}>
                <p className="font-display font-bold text-[#0D1E3A]" style={{ fontSize: '2rem' }}>100%</p>
                <p className="font-ui text-[10px] tracking-widest uppercase text-[#3E4E5E]">Client Satisfaction</p>
              </div>
              <div className="absolute -top-5 -right-5 p-5 shadow-xl" style={{ background: '#B8892A' }}>
                <p className="font-display font-bold text-[#0D1E3A]" style={{ fontSize: '1.6rem' }}>2026</p>
                <p className="font-ui text-[9px] tracking-widest uppercase text-[#0D1E3A]/70">Est. Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#0D1E3A' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="reveal eyebrow justify-center mb-5"><span className="gold-bar mx-auto" />Ready to Begin</div>
          <h2 className="reveal font-display font-bold text-white mb-5"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Let&apos;s Build Your Technology Institution
          </h2>
          <p className="reveal font-body text-white/55 mb-8 max-w-xl mx-auto" style={{ lineHeight: 1.75 }}>
            We work with organisations ready to operate at a global standard. If that is you, we would like to hear from you.
          </p>
          <div className="reveal flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold">Partner With Us</Link>
            <Link href="/services" className="btn-outline">View Services</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
