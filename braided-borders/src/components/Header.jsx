import { Menu, X } from 'lucide-react'

import { navItems, socialLinks } from '../data/siteContent'

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <nav className="absolute left-0 right-0 top-0 z-30 border-b border-white/20 px-6 py-5 text-white md:px-12">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src="/source-assets/image2.png" alt="Braided Borders" className="h-20 w-auto object-contain" />
          <span className="hidden text-mono text-[10px] uppercase tracking-[0.16em] sm:block">Braided Borders</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-5 text-mono text-[10px] uppercase tracking-[0.16em] text-white/80">
            {navItems.map(({ label, href, primary }) => (
              <a
                key={label}
                href={href}
                className={primary ? 'border border-white px-4 py-2 hover:bg-white hover:text-brand-ink' : 'hover:text-brand-blue'}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 border-l border-white/20 pl-4 text-[10px] uppercase tracking-[0.16em] text-white/75">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="transition-colors hover:text-brand-blue"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/5 text-white backdrop-blur-sm transition-colors hover:border-brand-blue hover:bg-brand-blue md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-4 max-w-[1440px] rounded-2xl border border-white/15 bg-[#031b25]/80 p-3 shadow-[0_20px_50px_rgba(3,26,37,0.45)] backdrop-blur-md md:hidden">
          <div className="grid gap-2 text-mono text-[10px] uppercase tracking-[0.16em] text-white/80">
            {navItems.map(({ label, href, primary }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={[
                  'rounded-xl px-4 py-3 transition-all duration-200',
                  primary
                    ? 'border border-white/20 bg-white text-brand-ink hover:bg-brand-blue hover:text-white'
                    : 'border border-white/10 bg-white/5 hover:border-brand-blue/60 hover:bg-brand-blue/10 hover:text-white',
                ].join(' ')}
              >
                {label}
              </a>
            ))}

            <div className="mt-2 grid grid-cols-3 gap-2 border-t border-white/10 pt-3">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg border border-white/10 bg-white/5 px-2 py-2 text-center transition-colors hover:border-brand-blue hover:bg-brand-blue/20"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
