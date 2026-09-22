import { capabilities, startupServices } from '../data/siteContent'

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-brand-ink px-6 py-20 text-white md:px-12 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(231,201,166,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(7,87,200,0.18),transparent_26%)]" />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-14 grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">End-to-end fund enablement</p>
          <div className="animate-rise">
            <h2 className="text-display text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
              The specialist partner
              <br />
              <em>from diligence to exit.</em>
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
              Dedicated local operational infrastructure for global capital, across both regions and every stage of the fund
              lifecycle.
            </p>
          </div>
        </div>

        <div className="grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => (
            <div
              key={capability}
              className="african-card border-b border-white/20 px-0 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-sand/60 hover:bg-white/5 sm:even:border-l sm:even:pl-6 lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0"
            >
              <span className="text-mono text-[10px] text-brand-sand">0{index + 1}</span>
              <p className="mt-7 text-lg">{capability}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/20 pt-8">
          <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">Startup services</p>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {startupServices.map((service, index) => (
              <div
                key={service}
                className="african-card animate-soft-enter rounded-2xl border border-white/15 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-sand/60"
              >
                <span className="text-mono text-xs text-white/50">0{index + 1}</span>
                <p className="mt-10 text-lg">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
