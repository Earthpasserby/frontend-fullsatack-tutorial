export default function ChallengeSection() {
  return (
    <section id="challenge" className="border-b border-brand-ink/15 px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-14 md:grid-cols-[0.65fr_1.35fr] md:gap-28">
        <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">The investor challenge</p>

        <div>
          <h2 className="text-display text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
            The execution gap
            <br />
            <em>is the risk.</em>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-brand-ink/70">
            International investors deploying capital into Africa and MENA lack boots-on-ground intelligence, regional
            operational networks, and infrastructure to accurately de-risk deals and scale portfolio ventures.
          </p>

          <div className="mt-10 grid gap-5 border-t border-brand-ink/15 pt-5 text-mono text-[10px] uppercase tracking-[0.14em] sm:grid-cols-3">
            <span>Mispriced risk</span>
            <span>Regulatory friction</span>
            <span>Slow venture traction</span>
          </div>
        </div>
      </div>
    </section>
  )
}
