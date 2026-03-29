'use client'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const schema = z.object({
  name:    z.string().min(2, 'Please enter your full name'),
  company: z.string().min(2, 'Please enter your organisation'),
  role:    z.string().min(2, 'Please enter your role'),
  email:   z.string().email('Please enter a valid email address'),
  phone:   z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(20, 'Please provide a brief description (min 20 characters)'),
})

type FormData = z.infer<typeof schema>

const services = [
  'Digital Systems Integration',
  'IT Strategy & Advisory',
  'IT Staff Augmentation',
  'Managed Services',
  'Other / Not Sure Yet',
]

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setError,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('vis')),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          'bot-field': '',
          name:    data.name,
          company: data.company,
          role:    data.role,
          email:   data.email,
          phone:   data.phone ?? '',
          service: data.service,
          message: data.message,
        }),
      })

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
      }
      // isSubmitSuccessful becomes true — success UI shown
    } catch (err) {
      setError('root', {
        message: 'Submission failed. Please email us directly at enquiries@chabentech.com',
      })
    }
  }

  return (
    <div>
      <Nav />

      <section className="page-hero pt-36 pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="eyebrow mb-5" style={{ color: 'rgba(232,237,242,0.6)' }}>
            <span className="gold-bar" />Partner With Us
          </div>
          <h1 className="font-display font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.08 }}>
            Start a Conversation
          </h1>
          <p className="font-body text-white/60 max-w-xl" style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
            If you are ready to operate at a global standard, we would like to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">

          {isSubmitSuccessful ? (
            <div className="text-center p-12 border border-[rgba(13,30,58,0.08)]">
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center" style={{ background: '#B8892A' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-display font-bold text-[#0D1E3A] text-2xl mb-3">Message Received</h3>
              <p className="font-body text-[#3E4E5E] mb-8">Our team will respond within two business days.</p>
              <Link href="/" className="btn-navy">Return Home</Link>
            </div>
          ) : (
            <>
              {errors.root && (
                <div className="mb-6 p-4 border border-red-300 bg-red-50 text-red-700 font-ui text-sm">
                  {errors.root.message}
                </div>
              )}

              {/* 
                IMPORTANT: data-netlify="true" and name="contact" MUST match 
                the static form in /public/__forms.html for Netlify to register 
                submissions. The onSubmit handler posts to /__forms.html directly.
              */}
              <form
                name="contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit(onSubmit)}
                className="p-8 lg:p-12 border border-[rgba(13,30,58,0.08)]"
                noValidate
              >
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: 'none' }}>
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </div>

                <h2 className="font-display font-bold text-[#0D1E3A] mb-2" style={{ fontSize: '1.8rem' }}>
                  Initiate a Conversation
                </h2>
                <p className="font-ui text-[10px] tracking-[0.15em] uppercase text-[#3E4E5E]/50 mb-10">
                  All fields marked * are required
                </p>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="field-label">Full Name *</label>
                    <input {...register('name')} type="text" placeholder="e.g. Aminu Bello" className="field-input" />
                    {errors.name && <p className="field-error">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="field-label">Organisation *</label>
                    <input {...register('company')} type="text" placeholder="Your company name" className="field-input" />
                    {errors.company && <p className="field-error">{errors.company.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="field-label">Role *</label>
                    <input {...register('role')} type="text" placeholder="e.g. CEO, CTO, Head of IT" className="field-input" />
                    {errors.role && <p className="field-error">{errors.role.message}</p>}
                  </div>
                  <div>
                    <label className="field-label">Email Address *</label>
                    <input {...register('email')} type="email" placeholder="you@company.com" className="field-input" />
                    {errors.email && <p className="field-error">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="field-label">Phone Number</label>
                    <input {...register('phone')} type="tel" placeholder="+234 000 000 0000" className="field-input" />
                  </div>
                  <div>
                    <label className="field-label">Service of Interest *</label>
                    <select {...register('service')} className="field-input">
                      <option value="">Select a Service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p className="field-error">{errors.service.message}</p>}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="field-label">Message *</label>
                  <textarea
                    {...register('message')}
                    placeholder="Briefly describe your technology challenge or what you are looking to achieve..."
                    rows={6}
                    className="field-input resize-none"
                  />
                  {errors.message && <p className="field-error">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full justify-center"
                  style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Enquiry →'}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
