'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const pillars = [
  {
    title: 'Authority',
    body: 'We speak and act from earned expertise. Our advisory is delivered at board level — precise, evidence-based, and built on institutional rigour.',
    color: '#0D1E3A',
  },
  {
    title: 'Synergy',
    body: 'Every technology decision connects. We design systems that communicate, integrate, and amplify one another — creating compound returns on infrastructure investment.',
    color: '#1A6B9E',
  },
  {
    title: 'Modernity',
    body: 'We build for 2030, not 2020. Our stack, delivery model, and talent pool are calibrated to emerging global digital infrastructure standards.',
    color: '#B8892A',
  },
]

const stats = [
  { value: '3+', label: 'Countries Active' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '6', label: 'Group Companies' },
]

export default function AboutPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('vis')),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div>
      <Nav />

      <section className="page-hero pt-36 pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="eyebrow mb-5" style={{ color: 'rgba(232,237,242,0.6)' }}>
            <span className="gold-bar" />Our Story
          </div>
          <h1 className="font-display font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.08 }}>
            About Chaben Technology
          </h1>
          <p className="font-body text-white/60 max-w-xl" style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
            A Chaben Holdings Company — building the digital institutions that will define Africa&apos;s next century.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-[rgba(13,30,58,0.07)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className="py-10 px-6 text-center"
                style={{ borderRight: i < stats.length - 1 ? '1px solid rgba(13,30,58,0.07)' : 'none' }}>
                <p className="font-display font-bold text-[#0D1E3A] mb-1" style={{ fontSize: '2.4rem' }}>{s.value}</p>
                <p className="font-ui text-[10px] tracking-[0.15em] uppercase text-[#3E4E5E]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="reveal eyebrow mb-5"><span className="gold-bar" />Who We Are</div>
              <h2 className="reveal font-display font-bold text-[#0D1E3A] mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', lineHeight: 1.1 }}>
                Chaben Technology Solution Ltd
              </h2>
              <p className="reveal font-body text-[#3E4E5E] mb-5" style={{ lineHeight: 1.8 }}>
                Chaben Technology Solution Ltd is the technology arm of Chaben Holdings — a proprietary investment conglomerate built on the philosophy of integrated value creation across high-impact sectors.
              </p>
              <p className="reveal font-body text-[#3E4E5E] mb-5" style={{ lineHeight: 1.8 }}>
                We are not a technology vendor. We are a technology institution. Every engagement is approached with the permanence and rigour of an institutional mandate — not a project timeline.
              </p>
              <p className="reveal font-body text-[#3E4E5E] mb-8" style={{ lineHeight: 1.8 }}>
                Our mission is to modernise African business infrastructure, deliver executive-level technology counsel, and provide elite technology talent to international firms — local in execution, global in standard.
              </p>
              <div className="reveal flex gap-4">
                <Link href="/contact" className="btn-navy">Work With Us</Link>
                <Link href="/services" className="btn-outline-navy">Our Services</Link>
              </div>
            </div>
            <div className="reveal relative h-96 lg:h-[480px]">
              <div className="absolute inset-0 overflow-hidden" style={{ border: '1px solid rgba(13,30,58,0.1)' }}>
                <Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=75"
                  alt="Modern office" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DNA */}
      <section id="dna" className="py-24" style={{ background: '#F7F9FC' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="reveal text-center mb-16">
            <div className="eyebrow justify-center mb-5"><span className="gold-bar" />Our DNA</div>
            <h2 className="font-display font-bold text-[#0D1E3A] mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.1 }}>
              The Chaben Brand Pillars
            </h2>
            <p className="font-body text-[#3E4E5E] max-w-2xl mx-auto" style={{ lineHeight: 1.75 }}>
              Every service, engagement, and engineer we deploy is guided by three founding principles inherited from the Chaben Holdings mandate.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div key={p.title} className="reveal p-10 bg-white"
                style={{ border: '1px solid rgba(13,30,58,0.07)', borderTop: `3px solid ${p.color}`, transitionDelay: `${i * 80}ms` }}>
                <h3 className="font-display font-bold text-[#0D1E3A] mb-4" style={{ fontSize: '1.6rem' }}>{p.title}</h3>
                <p className="font-body text-[#3E4E5E] text-sm" style={{ lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-16 pt-12 border-t border-[rgba(13,30,58,0.08)] text-center">
            <blockquote className="font-display italic text-[#0D1E3A]/50 max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)', lineHeight: 1.5 }}>
              &ldquo;We do not build for the next quarter. We build for the next generation.&rdquo;
            </blockquote>
            <p className="font-ui text-[10px] tracking-[0.2em] uppercase mt-4 text-[#B8892A]">
              Chaben Holdings — Integrated Value Creation
            </p>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20" style={{ background: '#0D1E3A' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="reveal eyebrow mb-5 text-[#B8892A]"><span className="gold-bar" />Where We Operate</div>
              <h2 className="reveal font-display font-bold text-white mb-5"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                Operating Across Africa &amp; Beyond
              </h2>
              <p className="reveal font-body text-white/55 mb-8" style={{ lineHeight: 1.8 }}>
                From the commercial capitals of West Africa to international markets — we are where our clients need us, with global standards applied locally.
              </p>
              <div className="reveal grid grid-cols-2 gap-3">
                {['West Africa', 'East Africa', 'Southern Africa', 'International'].map((r) => (
                  <div key={r} className="px-4 py-3"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <span className="font-ui text-xs font-semibold tracking-wider text-white/60">{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal relative h-64 overflow-hidden"
              style={{ border: '1px solid rgba(184,137,42,0.2)' }}>
              <Image src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800&q=75"
                alt="Global operations" fill className="object-cover opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display font-bold text-white" style={{ fontSize: '3.5rem' }}>3+</p>
                  <p className="font-ui text-xs tracking-widest uppercase text-[#B8892A]">Countries Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
