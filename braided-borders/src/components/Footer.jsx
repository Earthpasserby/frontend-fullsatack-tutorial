import { linkedInUrl } from '../data/siteContent'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-6 bg-brand-ink px-6 py-8 text-white md:flex-row md:items-center md:px-12">
      <div className="flex items-center gap-3">
        <img src="/source-assets/image2.png" alt="Braided Borders" className="h-14 w-auto" />
        <span className="text-mono text-[9px] uppercase tracking-[0.15em] text-white/50">Braided Borders</span>
      </div>

      <div className="flex flex-wrap items-center gap-7 text-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
        <p>&copy; {new Date().getFullYear()} Braided Borders. All rights reserved.</p>
        <a href={linkedInUrl} target="_blank" rel="noreferrer" className="text-white transition-colors hover:text-brand-blue">
          LinkedIn ↗
        </a>
      </div>
    </footer>
  )
}
