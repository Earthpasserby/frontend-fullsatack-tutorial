import { founders } from '../data/siteContent'

export default function LeadershipSection() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="relative flex min-h-[430px] flex-col justify-between overflow-hidden bg-brand-ink px-6 py-12 text-white md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(231,201,166,0.2),transparent_25%)]" />
        <div className="relative">
          <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-sand">Leadership synergy</p>
          <h2 className="text-display mt-5 text-5xl leading-[0.9] md:text-6xl">
            Regional depth.
            <br />
            <em>Global fluency.</em>
          </h2>
        </div>

        <p className="relative max-w-md text-lg leading-8 text-white/70">
          Seasoned builders behind MENA Insurtech Summit and Africa Insurtech Rising, with networks spanning GCC sovereign,
          global insurance, and Sub-Saharan markets.
        </p>
      </div>

      <div className="flex min-h-[430px] flex-col justify-end bg-[#edf0f1] px-6 py-12 md:px-12">
        <div className="grid gap-8 sm:grid-cols-2">
          {founders.map((founder) => (
            <article key={founder.name} className="african-card rounded-[24px] border border-brand-ink/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(6,31,40,0.12)]">
              <div className="mb-5 h-48 overflow-hidden rounded-2xl bg-brand-ink">
                <img
                  src={founder.image}
                  alt={founder.alt}
                  className="h-full w-full object-cover opacity-80 grayscale transition-transform duration-500 hover:scale-105"
                />
              </div>
              <p className="text-mono text-[10px] uppercase tracking-[0.16em] text-brand-blue">{founder.region}</p>
              <h3 className="text-display mt-3 text-3xl">{founder.name}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-ink/65">{founder.description}</p>
              <p className="mt-3 text-xs leading-5 text-brand-ink/55">{founder.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
