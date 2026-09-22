import { ArrowRight } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div>
          <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">Market access specialists</p>
          <h2 className="text-display mt-5 max-w-3xl text-5xl leading-[0.9] tracking-[-0.05em] md:text-7xl">
            Your execution arm
            <br />
            <em>on the ground.</em>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-brand-ink/70">
            We deliver the on-the-ground intelligence and institutional access required to scale seamlessly across the MEA
            region.
          </p>
        </div>

        <a
          href="mailto:hello@braidedborders.com"
          className="inline-flex items-center justify-between border-b border-brand-ink pb-4 text-mono text-xs uppercase tracking-[0.16em] hover:text-brand-blue"
        >
          Start a conversation <ArrowRight size={17} />
        </a>
      </div>
    </section>
  )
}
