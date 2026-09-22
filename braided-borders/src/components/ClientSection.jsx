import { clientTypes, networkRelationships, sectors } from '../data/siteContent'

export default function ClientSection() {
  return (
    <section className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-14 md:grid-cols-[0.65fr_1.35fr] md:gap-28">
          <div>
            <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">Who we serve</p>
            <h2 className="text-display mt-5 text-5xl leading-[0.95] tracking-[-0.04em] md:text-6xl">
              Capital with
              <br />
              <em>ambition.</em>
            </h2>
          </div>

          <div className="grid gap-0 border-t border-brand-ink/20">
            {clientTypes.map((client, index) => (
              <div key={client} className="flex gap-6 border-b border-brand-ink/20 py-7">
                <span className="text-mono text-xs text-brand-blue">0{index + 1}</span>
                <p className="max-w-xl text-xl leading-8">{client}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-12 border-t border-brand-ink/20 pt-8 md:grid-cols-2">
          <div>
            <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">Core sector focus</p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {sectors.map((sector) => (
                <span key={sector} className="border border-brand-ink/20 px-4 py-4 text-display text-2xl">
                  {sector}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">Anchor network relationships</p>
            <ul className="mt-7 border-t border-brand-ink/20">
              {networkRelationships.map((relationship) => (
                <li key={relationship} className="border-b border-brand-ink/20 py-4 text-base">
                  {relationship}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
