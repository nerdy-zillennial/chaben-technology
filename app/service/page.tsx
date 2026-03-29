'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const services = [
  {
    id: 'integration',
    number: '01',
    title: 'Digital Systems Integration',
    subtitle: 'Modernising Business Infrastructure',
    description: 'We architect and deliver end-to-end digital ecosystems. From ERP and CRM platforms to cloud migrations, API orchestration, and legacy system transformation — our integrations are built to scale with institutional ambition.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=75',
    features: [
      'ERP & CRM Implementation (SAP, Oracle, Salesforce)',
      'Cloud Migration & Architecture (AWS, Azure, GCP)',
      'API Design, Integration & Orchestration',
      'Legacy System Modernisation',
      'Data Warehouse & BI Integration',
      'Cybersecurity & Compliance Frameworks',
    ],
    accent: '#1A6B9E',
  },
  {
    id: 'strategy',
    number: '02',
    title: 'IT Strategy & Advisory',
    subtitle: 'Executive-Level Technology Counsel',
    description: 'Board-ready technology strategy for organisations operating at scale. We translate complex digital landscapes into clear investment roadmaps — aligning infrastructure decisions with long-term organisational objectives.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=75',
    features: [
      'Digital Transformation Roadmaps',
      'Technology Governance & Policy Frameworks',
      'Vendor Selection & Management',
      'Technology Risk & Compliance Advisory',
      'IT Budget Optimisation',
      'CTO-as-a-Service Advisory',
    ],
    accent: '#B8892A',
  },
  {
    id: 'augmentation',
    number: '03',
    title: 'IT Staff Augmentation & Managed Services',
    subtitle: 'Elite Tech Talent. Institutional Rigour.',
    description: 'We embed pre-vetted, senior-level technology professionals directly into your teams under a Managed Services model. From DevOps engineers to CTO-level advisors — delivered with the standards of a global institution.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=75',
    features: [
      'Senior Engineering Placement (Full-Stack, DevOps, Data)',
      'Technology Leadership (CTO / CIO as a Service)',
      'Managed DevOps & Cloud Operations Teams',
      'Offshore Development Centres',
      'Quality Assurance & Testing Teams',
      'Project Management & Scrum Masters',
    ],
    accent: '#1A6B9E',
  },
]

export default function ServicesPage() {
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
            <span className="gold-bar" />What We Offer
          </div>
          <h1 className="font-display font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.08 }}>
            Our Services
          </h1>
          <p className="font-body text-white/60 max-w-xl" style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
            Three integrated disciplines — from strategy through delivery through sustained operational excellence.
          </p>
          <div className="flex flex-wrap gap-3 mt-10">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`}
                className="font-ui text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.15)' }}>
                {s.number} {s.title.split(' ').slice(0,2).join(' ')}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        {services.map((svc, i) => (
          <div key={svc.id} id={svc.id}
            className={`border-b border-[rgba(13,30,58,0.07)] ${i % 2 === 1 ? 'bg-[#F7F9FC]' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
              <div className={`grid lg:grid-cols-2 gap-14 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                style={{ direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
                <div className="reveal relative h-80 lg:h-[440px] overflow-hidden"
                  style={{ border: '1px solid rgba(13,30,58,0.1)', direction: 'ltr' }}>
                  <Image src={svc.image} alt={svc.title} fill className="object-cover" />
                  <div className="absolute inset-0"
                    style={{ background: `linear-gradient(135deg, ${svc.accent}33, rgba(13,30,58,0.45))` }} />
                  <div className="absolute top-6 left-6">
                    <span className="font-display font-bold text-white/40" style={{ fontSize: '6rem', lineHeight: 1 }}>
                      {svc.number}
                    </span>
                  </div>
                </div>
                <div style={{ direction: 'ltr' }}>
                  <div className="reveal flex items-center gap-3 mb-4">
                    <div className="h-px w-10" style={{ background: svc.accent }} />
                    <span className="font-ui text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: svc.accent }}>
                      {svc.subtitle}
                    </span>
                  </div>
                  <h2 className="reveal font-display font-bold text-[#0D1E3A] mb-5"
                    style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', lineHeight: 1.12 }}>
                    {svc.title}
                  </h2>
                  <p className="reveal font-body text-[#3E4E5E] mb-8" style={{ lineHeight: 1.8 }}>
                    {svc.description}
                  </p>
                  <ul className="reveal grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-[7px]" style={{ background: svc.accent }} />
                        <span className="font-ui text-[#3E4E5E] text-sm" style={{ lineHeight: 1.55 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="reveal">
                    <Link href="/contact" className="btn-navy">Discuss This Service</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="reveal eyebrow justify-center mb-5"><span className="gold-bar mx-auto" />Get Started</div>
          <h2 className="reveal font-display font-bold text-[#0D1E3A] mb-5"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}>
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="reveal font-body text-[#3E4E5E] mb-8" style={{ lineHeight: 1.75 }}>
            Tell us about your technology challenge. Our team responds within two business days.
          </p>
          <div className="reveal">
            <Link href="/contact" className="btn-gold">Start a Conversation</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
