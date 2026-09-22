export default function SectionIntro({ eyebrow, title, description, dark = false }) {
  return (
    <div className={dark ? 'text-white' : ''}>
      <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">{eyebrow}</p>
      <h2 className="text-display mt-5 text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-7 max-w-2xl text-lg leading-8 ${dark ? 'text-white/65' : 'text-brand-ink/70'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
