import Link from 'next/link'
import Image from 'next/image'

const links = {
  Services: [
    { label: 'Digital Systems Integration', href: '/services#integration' },
    { label: 'IT Strategy & Advisory',       href: '/services#strategy' },
    { label: 'IT Staff Augmentation',        href: '/services#augmentation' },
    { label: 'Managed Services',             href: '/services#managed' },
  ],
  Company: [
    { label: 'About Us',  href: '/about' },
    { label: 'Our DNA',   href: '/about#dna' },
    { label: 'Contact',   href: '/contact' },
  ],
  'Chaben Group': [
    { label: 'Chaben Holdings',    href: '#' },
    { label: 'Chaben Agriculture', href: '#' },
    { label: 'Chaben Capital',     href: '#' },
    { label: 'Chaben Properties',  href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: '#0D1E3A' }}>
      <div style={{ height: '2px', background: '#B8892A' }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9">
                <Image src="/logo.png" alt="Chaben Technology" fill className="object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-base tracking-widest">CHABEN</span>
                <span className="font-ui text-[8px] font-semibold tracking-[0.25em] uppercase text-[#B8892A]">Technology</span>
              </div>
            </Link>
            <p className="font-body text-white/45 text-sm mb-6 max-w-xs" style={{ lineHeight: 1.8 }}>
              Digital systems integration, IT strategy, and elite managed services — built for institutions operating at global scale.
            </p>
            <p className="font-ui text-[10px] tracking-widest uppercase text-[#B8892A]">A Chaben Holdings Company</p>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="font-ui text-[10px] font-bold tracking-[0.2em] uppercase mb-5 text-[#B8892A]">{group}</h4>
              <ul className="space-y-3">
                {items.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="font-body text-white/40 text-sm hover:text-white/80 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="gold-rule mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-ui text-[11px] text-white/25 tracking-wide">
            © 2026 Chaben Technology Solution Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use'].map((l) => (
              <Link key={l} href="#" className="font-ui text-[11px] text-white/25 hover:text-white/60 transition-colors tracking-wide">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
