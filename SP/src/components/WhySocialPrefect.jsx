import { ArrowRight, MapPin, Star, UsersRound } from 'lucide-react';

function WhySocialPrefect() {
  return (
    <section aria-labelledby="about-title" className="about-section" id="about">
      <div className="about-image-wrap">
        <img alt="Travelers taking in a wide open landscape" loading="lazy" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=85" />
        <span className="image-note">A LITTLE FURTHER, A LITTLE FREER</span>
      </div>
      <div className="about-copy">
        <span className="eyebrow"><i /> SOCIAL PREFECT TOURS</span>
        <h2 id="about-title">More than a place.<br /><em>A feeling you bring back.</em></h2>
        <p>We make it easier to step away from the everyday and spend time somewhere new. Tell us what you have in mind; we’ll help you find a trip that feels like yours.</p>
        <div className="about-facts">
          <div><strong><Star aria-hidden="true" className="star-icon" size={18} fill="currentColor" /> 5.0</strong><span>Google rating · 79 reviews</span></div>
          <div><strong><MapPin aria-hidden="true" size={18} /> Lekki</strong><span>Our home base · Lagos</span></div>
          <div><strong><UsersRound aria-hidden="true" size={18} /> 3 ways</strong><span>Group, daycation, private</span></div>
        </div>
        <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Social+Prefect+Tours+Lekki+Lagos" rel="noreferrer" target="_blank">Read Google reviews <ArrowRight size={17} /></a>
      </div>
    </section>
  );
}

export default WhySocialPrefect;