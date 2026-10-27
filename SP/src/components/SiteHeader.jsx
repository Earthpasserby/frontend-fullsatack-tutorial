import { ArrowRight, Compass, Menu, X } from 'lucide-react';
import { useState } from 'react';

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a aria-label="Social Prefect Tours home" className="brand" href="#home" onClick={closeMenu}>
        <span className="brand-mark"><Compass aria-hidden="true" size={23} strokeWidth={1.8} /></span>
        <span className="brand-name">social prefect<span>tours</span></span>
      </a>
      <button aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} type="button">
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav aria-label="Main navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'}>
        <a href="#experiences" onClick={closeMenu}>Experiences</a>
        <a href="#destinations" onClick={closeMenu}>Destinations</a>
        <a href="#about" onClick={closeMenu}>Our approach</a>
        <a className="nav-book" href="#booking" onClick={closeMenu}>Plan a trip <ArrowRight className="diagonal-arrow" size={16} /></a>
      </nav>
    </header>
  );
}

export default SiteHeader;