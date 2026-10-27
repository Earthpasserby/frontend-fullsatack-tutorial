import { ArrowLeft, ArrowRight, ArrowUpRight, Compass } from 'lucide-react';
import { useState } from 'react';

const inspirations = [
  {
    label: 'A SLOWER DAY',
    title: 'Follow the water.',
    copy: 'A coast-and-island kind of day, shaped around your crew and the pace you want.',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1800&q=85',
    alt: 'Clear blue water and a sunlit shoreline',
    tripType: 'Daycation',
  },
  {
    label: 'OUT OF OFFICE',
    title: 'Make it a group thing.',
    copy: 'Get your favorite people together and turn an ordinary weekend into a shared story.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=85',
    alt: 'Friends making the most of a trip together',
    tripType: 'Group tour',
  },
  {
    label: 'YOUR OWN PACE',
    title: 'Keep it personal.',
    copy: 'A thoughtful escape for family, friends, or a celebration worth making time for.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1800&q=85',
    alt: 'Family sharing an easy day out together',
    tripType: 'Private / family trip',
  },
];

function InspirationCarousel({ onPlanTrip }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIdea = inspirations[activeIndex];

  function moveSlide(direction) {
    setActiveIndex((current) => (current + direction + inspirations.length) % inspirations.length);
  }

  return (
    <section aria-labelledby="inspiration-title" className="inspiration-section" id="inspiration">
      <div className="inspiration-inner section-wrap">
        <div className="inspiration-topline"><span className="eyebrow"><i /> A FEW WAYS TO GET AWAY</span><span className="inspiration-index">0{activeIndex + 1} <i /> 0{inspirations.length}</span></div>
        <div aria-live="polite" className="inspiration-slide" key={activeIdea.title}>
          <img alt={activeIdea.alt} loading="lazy" src={activeIdea.image} />
          <div className="inspiration-shade" />
          <div className="inspiration-copy">
            <span className="inspiration-label">{activeIdea.label}</span>
            <h2 id="inspiration-title">{activeIdea.title}</h2>
            <p>{activeIdea.copy}</p>
            <button className="inspiration-cta" onClick={() => onPlanTrip(activeIdea.tripType)} type="button">Ask about this idea <ArrowUpRight size={16} /></button>
          </div>
          <span aria-hidden="true" className="inspiration-stamp"><Compass size={21} /> TRIP<br />INSPIRATION</span>
        </div>
        <div className="inspiration-controls">
          <div aria-label="Choose a trip idea" className="inspiration-dots">
            {inspirations.map((idea, index) => (
              <button aria-label={`Show ${idea.title}`} aria-current={activeIndex === index ? 'step' : undefined} className={activeIndex === index ? 'is-active' : ''} key={idea.title} onClick={() => setActiveIndex(index)} type="button" />
            ))}
          </div>
          <div className="inspiration-arrows">
            <button aria-label="Previous trip idea" onClick={() => moveSlide(-1)} type="button"><ArrowLeft size={18} /></button>
            <button aria-label="Next trip idea" onClick={() => moveSlide(1)} type="button"><ArrowRight size={18} /></button>
          </div>
        </div>
        <p className="inspiration-disclaimer">Trip ideas are for inspiration. Ask us about current availability before booking.</p>
      </div>
    </section>
  );
}

export default InspirationCarousel;