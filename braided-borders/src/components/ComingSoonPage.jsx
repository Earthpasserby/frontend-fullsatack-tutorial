import { ArrowRight, Mail, Linkedin, Twitter } from 'lucide-react'

import { socialLinks } from '../data/siteContent'

function SocialIcon({ label }) {
  if (label === 'LinkedIn') return <Linkedin size={15} />
  if (label === 'Email') return <Mail size={15} />
  return <Twitter size={15} />
}

export default function ComingSoonPage({ onViewInfo }) {
  return (
    <div className="min-h-screen bg-brand-ink text-white">
      <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-3">
          <img src="/source-assets/image2.png" alt="Braided Borders" className="h-16 w-auto object-contain" />
          <span className="text-mono text-[10px] uppercase tracking-[0.16em] text-white/80">Braided Borders</span>
        </div>

        <div className="flex items-center gap-4 text-mono text-[10px] uppercase tracking-[0.16em] text-white/75">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              <SocialIcon label={label} />
              {label}
            </a>
          ))}
        </div>
      </header>

      <main className="relative overflow-hidden px-6 pb-20 pt-10 md:px-12 md:pb-28 md:pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(7,87,200,0.35),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_25%)]" />

        <div className="relative mx-auto grid max-w-[1200px] gap-16 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-mono text-[10px] uppercase tracking-[0.24em] text-brand-blue">Coming soon</p>
            <h1 className="mt-6 text-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] tracking-[-0.06em] text-white">
              Building the bridge
              <br />
              <em>for frontier capital.</em>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/70 md:text-xl">
              We are preparing a focused platform for insurtech, fintech, and healthtech operators investing across Africa and MENA.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onViewInfo}
                className="inline-flex items-center gap-3 rounded-full bg-brand-blue px-5 py-3 text-mono text-[10px] uppercase tracking-[0.16em] text-white shadow-[0_18px_35px_rgba(7,87,200,0.4)] transition-transform hover:-translate-y-0.5"
              >
                View company overview <ArrowRight size={16} />
              </button>

              <a
                href="mailto:hello@braidedborders.com"
                className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-mono text-[10px] uppercase tracking-[0.16em] text-white/85 transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                Get in touch <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/15 bg-white/5 p-6 backdrop-blur-md">
            <div className="grid gap-5">
              {[
                ['Coverage', 'Sub-Saharan Africa & MENA'],
                ['Focus', 'Due diligence to exit'],
                ['Model', 'Local execution, global rationale'],
                ['Sectors', 'Insurtech · Fintech · Healthtech'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-[#07252e]/70 p-4">
                  <p className="text-mono text-[9px] uppercase tracking-[0.18em] text-brand-blue">{label}</p>
                  <p className="mt-3 text-base text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
