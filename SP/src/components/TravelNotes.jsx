import { ArrowUpRight } from 'lucide-react';

const notes = [
  { number: '01', category: 'BEFORE YOU GO', title: 'A little planning makes room for more fun.', text: 'Choose a date range, tell us who’s coming, and share the kind of day you want. We can help with the next steps.', tripType: 'Help me decide' },
  { number: '02', category: 'PACK LIGHT', title: 'Bring what helps you feel at ease.', text: 'Think weather-ready layers, comfortable shoes, any personal essentials, and space for the moments you didn’t plan.', tripType: 'Daycation' },
  { number: '03', category: 'TRAVEL TOGETHER', title: 'Get everyone on the same page.', text: 'For group and family trips, agree on the basics early: dates, pace, accessibility needs, and what matters most to each person.', tripType: 'Group tour' },
];

function TravelNotes({ onPlanTrip }) {
  return (
    <section aria-labelledby="notes-title" className="notes-section">
      <div className="notes-inner section-wrap">
        <div className="notes-heading">
          <div><span className="eyebrow"><i /> NOTES FOR THE ROAD</span><h2 id="notes-title">A smoother start<br />to <em>getting away.</em></h2></div>
          <p>A few simple ideas to make planning feel lighter, before the bags are packed.</p>
        </div>
        <div className="notes-grid">
          {notes.map((note) => (
            <article className="note-card" key={note.number}>
              <div className="note-topline"><span>{note.number}</span><span>{note.category}</span></div>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
              <button onClick={() => onPlanTrip(note.tripType)} type="button">Plan with us <ArrowUpRight size={16} /></button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelNotes;