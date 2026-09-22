import { ChevronDown } from 'lucide-react'

import { phases } from '../data/siteContent'

export default function ModelSection() {
  return (
    <section id="model" className="relative overflow-hidden bg-brand-blue px-6 py-20 text-white md:px-12 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(231,201,166,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(6,31,40,0.2),transparent_26%)]" />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="animate-rise">
            <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-white/70">Operational methodology</p>
            <h2 className="text-display mt-5 text-5xl leading-[0.9] tracking-[-0.05em] md:text-7xl">
              The “sleeves-up”
              <br />
              <em>braided model.</em>
            </h2>
          </div>

          <p className="max-w-sm text-base leading-7 text-white/75">
            Three distinct layers of the fund lifecycle. Domain expertise, professional services, and active growth in one
            execution arm.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {phases.map((phase) => (
            <article key={phase.number} className="african-card rounded-[26px] border border-white/35 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-sand/70">
              <span className="text-mono text-xs text-white/70">PHASE {phase.number}</span>
              <h3 className="text-display mt-12 text-3xl">{phase.title}</h3>
              <p className="mt-5 min-h-20 leading-7 text-white/75">{phase.text}</p>

              <ul className="mt-7 space-y-3 border-t border-white/30 pt-5 text-mono text-[10px] uppercase tracking-[0.12em]">
                {phase.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <ChevronDown size={13} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
