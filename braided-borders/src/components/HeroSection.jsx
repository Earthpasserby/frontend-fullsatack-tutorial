import { ArrowRight } from 'lucide-react'

import { heroImageUrl, linkedInUrl } from '../data/siteContent'

export default function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-[720px] items-end overflow-hidden bg-brand-ink px-6 pb-16 pt-40 text-white md:min-h-[820px] md:px-12 md:pb-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(3,26,37,.96), rgba(3,26,37,.54)), url('${heroImageUrl}')`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(7,87,200,0.25),transparent_30%)]" />
      <div className="absolute right-8 top-40 hidden h-28 w-28 rounded-full border border-brand-blue/70 md:block" />
      <div className="absolute bottom-10 right-10 hidden h-48 w-48 rounded-full border border-white/10 md:block" />

      <div className="relative mx-auto grid w-full max-w-[1440px] gap-12 md:grid-cols-[1fr_0.48fr] md:items-end">
        <div className="max-w-[760px]">
          <p className="text-mono mb-7 text-[10px] uppercase tracking-[0.22em] text-brand-blue">
            Institutional bridge for MEA
          </p>
          <h1 className="text-display max-w-5xl text-[clamp(4rem,9vw,9rem)] leading-[0.83] tracking-[-0.06em] text-white">
            De-risking capital
            <br />
            <em>across Africa & MENA.</em>
          </h1>
          <p className="mt-9 max-w-xl text-lg leading-7 text-white/75 md:text-xl">
            Local intelligence, boots-on-ground execution, and operational infrastructure for global investors in insurtech,
            fintech, and healthtech.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#challenge"
              className="inline-flex items-center gap-4 rounded-full bg-brand-blue px-5 py-3 text-mono text-[10px] uppercase tracking-[0.16em] shadow-[0_18px_35px_rgba(7,87,200,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-brand-ink"
            >
              See the opportunity <ArrowRight size={16} />
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/5 px-5 py-3 text-mono text-[10px] uppercase tracking-[0.16em] backdrop-blur-sm transition-all duration-200 hover:border-brand-blue hover:bg-brand-blue"
            >
              Connect with us <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md shadow-[0_30px_80px_rgba(3,26,37,0.32)]">
          <div className="border-l border-white/30 pl-6 text-mono text-[10px] uppercase leading-7 tracking-[0.16em] text-white/65">
            <p>
              Coverage <strong className="block font-normal text-white">Sub-Saharan Africa & MENA</strong>
            </p>
            <p className="mt-5">
              Focus <strong className="block font-normal text-white">Due diligence to exit</strong>
            </p>
            <p className="mt-5">
              Model <strong className="block font-normal text-white">Local execution, global rationale</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
