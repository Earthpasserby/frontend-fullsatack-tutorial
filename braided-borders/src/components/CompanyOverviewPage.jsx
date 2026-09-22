import { ArrowRight, ChevronRight } from 'lucide-react'

import {
  capabilities,
  clientTypes,
  founders,
  networkRelationships,
  phases,
  sectors,
  startupServices,
} from '../data/siteContent'

export default function CompanyOverviewPage({ onBack }) {
  return (
    <main className="bg-brand-white text-brand-ink">
      <header className="border-b border-brand-ink/10 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12">
          <a href="#top" className="flex items-center gap-3">
            <img src="/source-assets/image2.png" alt="Braided Borders" className="h-14 w-auto object-contain" />
            <span className="text-mono text-[10px] uppercase tracking-[0.16em] text-brand-ink">Braided Borders</span>
          </a>

          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-brand-ink/15 px-4 py-2 text-mono text-[10px] uppercase tracking-[0.16em] text-brand-ink transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Back to home <ChevronRight size={14} />
          </button>
        </div>
      </header>

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-mono text-[10px] uppercase tracking-[0.22em] text-brand-blue">About the firm</p>
          <h1 className="mt-6 text-display text-[clamp(3.2rem,7vw,6rem)] leading-[0.9] tracking-[-0.05em] text-brand-ink">
            An institutional bridge
            <br />
            <em>for frontier markets.</em>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-brand-ink/70">
            Braided Borders helps investors and operators navigate the realities of deploying capital across Africa and MENA,
            combining on-the-ground intelligence, operational support, and ecosystem access into a single strategic platform.
          </p>
        </div>
      </section>

      <section className="bg-brand-ink px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">What we do</p>
            <div>
              <h2 className="text-display text-5xl leading-[0.95] tracking-[-0.04em] md:text-6xl">
                From diligence to exit,
                <br />
                <em>with sleeves rolled up.</em>
              </h2>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <div key={capability} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <span className="text-mono text-[10px] text-brand-blue">0{index + 1}</span>
                <p className="mt-6 text-lg leading-7">{capability}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-white/15 pt-8">
            <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">Startup services</p>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {startupServices.map((service, index) => (
                <div key={service} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                  <span className="text-mono text-xs text-white/60">0{index + 1}</span>
                  <p className="mt-10 text-lg leading-7">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">Who we serve</p>
            <div>
              <h2 className="text-display text-5xl leading-[0.9] tracking-[-0.04em] md:text-6xl">
                Capital with
                <br />
                <em>ambition.</em>
              </h2>
            </div>
          </div>

          <div className="grid gap-0 rounded-3xl border border-brand-ink/10 overflow-hidden">
            {clientTypes.map((client, index) => (
              <div key={client} className="flex gap-6 border-b border-brand-ink/10 bg-white px-5 py-6 last:border-b-0 md:px-8">
                <span className="text-mono text-xs text-brand-blue">0{index + 1}</span>
                <p className="max-w-xl text-lg leading-8">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-blue px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-white/70">Operational methodology</p>
              <h2 className="text-display mt-5 text-5xl leading-[0.9] tracking-[-0.05em] md:text-6xl">
                The “sleeves-up”
                <br />
                <em>braided model.</em>
              </h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-white/75">
              Three distinct layers of execution, from investor intelligence to local institutional growth.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {phases.map((phase) => (
              <article key={phase.number} className="rounded-2xl border border-white/30 bg-white/5 p-6">
                <span className="text-mono text-xs text-white/75">PHASE {phase.number}</span>
                <h3 className="text-display mt-10 text-3xl">{phase.title}</h3>
                <p className="mt-5 leading-7 text-white/75">{phase.text}</p>
                <ul className="mt-7 space-y-3 border-t border-white/20 pt-5 text-mono text-[10px] uppercase tracking-[0.12em]">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <ChevronRight size={13} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">Core sectors</p>
              <div className="mt-7 grid grid-cols-2 gap-3">
                {sectors.map((sector) => (
                  <span key={sector} className="rounded-2xl border border-brand-ink/15 bg-brand-white px-4 py-4 text-display text-2xl">
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">Network relationships</p>
              <ul className="mt-7 space-y-3">
                {networkRelationships.map((relationship) => (
                  <li key={relationship} className="rounded-2xl border border-brand-ink/10 bg-[#f6f8f8] px-4 py-4 text-base">
                    {relationship}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#edf1f2] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12">
            <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">Leadership</p>
            <h2 className="mt-5 text-display text-5xl leading-[0.9] tracking-[-0.04em] md:text-6xl">
              Regional depth.
              <br />
              <em>Global fluency.</em>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {founders.map((founder) => (
              <article key={founder.name} className="rounded-[28px] border border-brand-ink/10 bg-white p-5 shadow-sm">
                <div className="mb-5 h-56 overflow-hidden rounded-2xl bg-brand-ink">
                  <img src={founder.image} alt={founder.alt} className="h-full w-full object-cover opacity-80 grayscale" />
                </div>
                <p className="text-mono text-[10px] uppercase tracking-[0.16em] text-brand-blue">{founder.region}</p>
                <h3 className="text-display mt-3 text-3xl">{founder.name}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-ink/70">{founder.description}</p>
                <p className="mt-3 text-xs leading-5 text-brand-ink/55">{founder.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1200px] rounded-[32px] border border-brand-ink/10 bg-[#f6f8f8] p-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">Market access specialists</p>
              <h2 className="text-display mt-5 text-5xl leading-[0.9] tracking-[-0.05em] md:text-6xl">
                Your execution arm
                <br />
                <em>on the ground.</em>
              </h2>
            </div>

            <a
              href="mailto:hello@braidedborders.com"
              className="inline-flex items-center gap-3 text-mono text-[10px] uppercase tracking-[0.16em] text-brand-ink transition-colors hover:text-brand-blue"
            >
              Start a conversation <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
