import { ArrowDownRight, ArrowRight, MapPin } from 'lucide-react';

function HeroSection({ onPlanTrip }) {
  return (
    <section aria-labelledby="hero-title" className="hero-section" id="home">
      <img alt="Sunlit ocean and coastline for a day away" className="hero-image" fetchPriority="high" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=90" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="eyebrow hero-eyebrow"><i /> LAGOS, NIGERIA & BEYOND</span>
        <h1 id="hero-title">Go where<br />the day <em>takes you.</em></h1>
        <p>Good company. New places. A little more life in every getaway.</p>
        <button className="button button-lime" onClick={() => onPlanTrip('Help me decide')} type="button">Find your kind of trip <ArrowRight size={17} /></button>
        <div className="hero-caption"><span>01 / A DIFFERENT WAY OUT</span><span>MADE FOR THE MOMENT</span></div>
      </div>
      <a aria-label="Scroll to experiences" className="hero-scroll" href="#experiences"><ArrowDownRight size={23} /></a>
      <div className="hero-location"><MapPin size={14} /> LEKKI PHASE I · LAGOS</div>
    </section>
  );
}

export default HeroSection;