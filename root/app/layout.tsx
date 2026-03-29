import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Chaben Technology Solution Ltd', template: '%s | Chaben Technology' },
  description: 'Digital systems integration, IT strategy, and elite managed services for global institutions. A Chaben Holdings Company.',
  keywords: 'digital transformation, IT strategy, managed services, staff augmentation, Nigeria, Africa, technology consulting',
  openGraph: {
    title: 'Chaben Technology Solution Ltd',
    description: 'Integrated technology solutions for global institutions.',
    type: 'website', locale: 'en_NG',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width', initialScale: 1, themeColor: '#FFFFFF',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
