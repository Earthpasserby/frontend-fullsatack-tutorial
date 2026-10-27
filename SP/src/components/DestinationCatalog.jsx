import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, MapPin } from 'lucide-react';
import { useRef, useState } from 'react';

const destinationIdeas = [
  {
    place: 'Doha',
    country: 'Qatar',
    region: 'GULF COAST',
    note: 'A meeting of modern skylines, old markets, and wide-open desert.',
    image: 'https://images.unsplash.com/photo-1700901742651-6b353164caf3?auto=format&fit=crop&w=1800&q=85',
    alt: 'The crescent-shaped Katara Towers rising above the waterfront in Lusail, Qatar',
  },
  {
    place: 'Cape Town',
    country: 'South Africa',
    region: 'SOUTHERN AFRICA',
    note: 'Ocean air, mountain views, and a city made for taking the long way around.',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1800&q=85',
    alt: 'Aerial view of Cape Town, Table Mountain, and the coastline',
  },
  {
    place: 'Zanzibar',
    country: 'Tanzania',
    region: 'INDIAN OCEAN',
    note: 'Warm water, winding lanes, and a slower island rhythm.',
    image: 'https://images.unsplash.com/photo-1621583628955-42fbc37bf424?auto=format&fit=crop&w=1800&q=85',
    alt: 'Small wooden boats in turquoise water off a Tanzanian beach',
  },
  {
    place: 'Marrakech',
    country: 'Morocco',
    region: 'NORTH AFRICA',
    note: 'A historic skyline framed by the distant Atlas Mountains.',
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1800&q=85',
    alt: 'The Koutoubia Mosque in Marrakech with the Atlas Mountains behind it',
  },
];

function DestinationCatalog({ onPlanTrip }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);
  const activeDestination = destinationIdeas[activeIndex];

  function moveSlide(direction) {
    setActiveIndex((current) => (current + direction + destinationIdeas.length) % destinationIdeas.length);
  }

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (distance > 45) moveSlide(-1);
    if (distance < -45) moveSlide(1);
    touchStartX.current = null;
  }

  return (
    <section aria-labelledby="destinations-title" className="destination-section" id="destinations">
      <div className="destination-inner section-wrap">
        <div className="destination-heading">
          <div>
            <span className="eyebrow"><i /> THE WORLD, AT YOUR PACE</span>
            <h2 id="destinations-title">Where could<br />you <em>go next?</em></h2>
          </div>
          <p>Browse a few places to get inspired. Tell us what draws you in and we’ll help check what’s possible.</p>
        </div>
        <div aria-live="polite" className="destination-slide" key={activeDestination.place} onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
          <img alt={activeDestination.alt} fetchPriority="low" loading="eager" src={activeDestination.image} />
          <div className="destination-shade" />
          <span className="destination-region"><MapPin size={13} /> {activeDestination.region}</span>
          <div className="destination-copy">
            <span className="destination-country">{activeDestination.country}</span>
            <h3>{activeDestination.place}</h3>
            <p>{activeDestination.note}</p>
            <button className="destination-cta" onClick={() => onPlanTrip(activeDestination.place)} type="button">Ask about {activeDestination.place} <ArrowUpRight size={17} /></button>
          </div>
          <span aria-hidden="true" className="destination-stamp"><Compass size={20} /> DESTINATION<br />INSPIRATION</span>
          <span className="destination-count">0{activeIndex + 1} <i /> 0{destinationIdeas.length}</span>
        </div>
        <div className="destination-controls">
          <div aria-label="Choose a destination" className="destination-dots">
            {destinationIdeas.map((destination, index) => (
              <button aria-label={`Show ${destination.place}, ${destination.country}`} aria-current={activeIndex === index ? 'step' : undefined} className={activeIndex === index ? 'is-active' : ''} key={destination.place} onClick={() => setActiveIndex(index)} type="button" />
            ))}
          </div>
          <div className="destination-arrows">
            <button aria-label="Previous destination" onClick={() => moveSlide(-1)} type="button"><ArrowLeft size={18} /></button>
            <button aria-label="Next destination" onClick={() => moveSlide(1)} type="button"><ArrowRight size={18} /></button>
          </div>
        </div>
        <p className="destination-disclaimer">Destination imagery is editorial inspiration, not a confirmed itinerary. Ask Social Prefect Tours about current trips and availability.</p>
      </div>
    </section>
  );
}

export default DestinationCatalog;