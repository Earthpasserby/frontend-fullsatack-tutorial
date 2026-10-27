import { ArrowRight } from 'lucide-react';

const tripStyles = [
  {
    number: '01',
    title: 'Group escapes',
    value: 'Group tour',
    description: 'Good people, fresh perspectives, and the kind of shared stories that stay with you.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85',
    alt: 'Friends sharing an outdoor trip together',
    className: 'trip-card-group',
  },
  {
    number: '02',
    title: 'Daycations',
    value: 'Daycation',
    description: 'Trade the usual routine for a thoughtful day out, close to home or somewhere new.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85',
    alt: 'A quiet tropical shoreline ready for a day away',
    className: 'trip-card-day',
  },
  {
    number: '03',
    title: 'Private & family trips',
    value: 'Private / family trip',
    description: 'A little more personal, with room to make the day your own from the first hello.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1400&q=85',
    alt: 'Family enjoying time together outdoors',
    className: 'trip-card-private',
  },
];

function TripStylesSection({ onPlanTrip }) {
  return (
    <>
      <section aria-label="Trip styles" className="trust-strip">
        <span>YOUR NEXT DAY OUT, WELL SPENT</span><i />
        <span>GROUP TOURS</span><i />
        <span>DAYCATIONS</span><i />
        <span>PRIVATE & FAMILY TRIPS</span>
      </section>
      <section aria-labelledby="experiences-title" className="experiences-section section-wrap" id="experiences">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><i /> PICK YOUR PACE</span>
            <h2 id="experiences-title">A good trip<br />starts <em>with you.</em></h2>
          </div>
          <p>From a spontaneous daycation to a private escape, we’ll help shape a trip around the people coming along.</p>
        </div>
        <div className="trip-grid">
          {tripStyles.map((trip) => (
            <article className={`trip-card ${trip.className}`} key={trip.number}>
              <img alt={trip.alt} loading="lazy" src={trip.image} />
              <div className="trip-shade" />
              <span className="trip-number">{trip.number} / 03</span>
              <div className="trip-card-copy">
                <h3>{trip.title}</h3>
                <p>{trip.description}</p>
                <button aria-label={`Plan ${trip.title.toLowerCase()}`} onClick={() => onPlanTrip(trip.value)} type="button">Plan this trip <ArrowRight size={15} /></button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default TripStylesSection;