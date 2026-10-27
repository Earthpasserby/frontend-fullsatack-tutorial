import { ArrowRight, Phone } from 'lucide-react';

const bookingFields = [
  { name: 'name', label: 'Your name', type: 'text', autoComplete: 'name' },
  { name: 'phone', label: 'Your WhatsApp number', type: 'tel', autoComplete: 'tel' },
];

const tripOptions = ['Group tour', 'Daycation', 'Private / family trip', 'Help me decide'];

function BookingSection({ destination, onDestinationChange, tripType, onTripTypeChange }) {
  function sendBooking(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      'Hello Social Prefect Tours! I would like to plan a trip.',
      '',
      `Name: ${formData.get('name')}`,
      `WhatsApp: ${formData.get('phone')}`,
      `Trip style: ${formData.get('tripStyle')}`,
      `Destination: ${formData.get('destination') || 'Open to suggestions'}`,
      `Preferred date: ${formData.get('date') || 'Flexible'}`,
      `Group size: ${formData.get('guests')}`,
      `A little more about the trip: ${formData.get('details') || 'Please share available options.'}`,
    ].join('\n');

    window.location.href = `https://wa.me/2349166709829?text=${encodeURIComponent(message)}`;
  }

  return (
    <section aria-labelledby="booking-title" className="booking-section" id="booking">
      <div className="booking-layout section-wrap">
        <div className="booking-copy">
          <span className="eyebrow"><i /> YOUR NEXT STORY STARTS HERE</span>
          <h2 id="booking-title">Tell us what<br />you’re <em>dreaming up.</em></h2>
          <p>Share a few details and we’ll help you explore the options. Your request opens in WhatsApp, ready for you to review and send.</p>
          <a className="booking-phone" href="tel:+2349166709829"><Phone size={17} /><span><small>Rather talk it through?</small>+234 916 670 9829</span></a>
        </div>
        <form className="booking-form" onSubmit={sendBooking}>
          <div className="form-heading"><span>PLAN A TRIP</span><span>01 — 04</span></div>
          {bookingFields.map((field) => (
            <label className="field" htmlFor={`booking-${field.name}`} key={field.name}>
              <span>{field.label}<b>*</b></span>
              <input autoComplete={field.autoComplete} id={`booking-${field.name}`} name={field.name} placeholder={field.name === 'name' ? 'Full name' : '+234 800 000 0000'} required type={field.type} />
            </label>
          ))}
          <div className="form-row">
            <label className="field" htmlFor="booking-trip">
              <span>What sounds like you? <b>*</b></span>
              <select id="booking-trip" name="tripStyle" onChange={(event) => onTripTypeChange(event.target.value)} required value={tripType}>
                <option disabled value="">Choose a trip style</option>
                {tripOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label className="field" htmlFor="booking-guests">
              <span>Travelers <b>*</b></span>
              <select defaultValue="2" id="booking-guests" name="guests" required>
                <option value="1">1 traveler</option>
                <option value="2">2 travelers</option>
                <option value="3-5">3–5 travelers</option>
                <option value="6-10">6–10 travelers</option>
                <option value="10+">More than 10</option>
              </select>
            </label>
          </div>
          <label className="field" htmlFor="booking-destination">
            <span>Where would you like to go?</span>
            <input autoComplete="off" id="booking-destination" name="destination" onChange={(event) => onDestinationChange(event.target.value)} placeholder="A place in mind, or open to ideas" type="text" value={destination} />
          </label>
          <label className="field" htmlFor="booking-date">
            <span>When would you like to go?</span>
            <input id="booking-date" name="date" type="date" />
          </label>
          <label className="field" htmlFor="booking-details">
            <span>Anything else we should know?</span>
            <textarea id="booking-details" name="details" placeholder="A place you have in mind, a special occasion, or just a feeling..." rows="3" />
          </label>
          <button className="button button-lime submit-button" type="submit">Continue to WhatsApp <ArrowRight className="diagonal-arrow" size={17} /></button>
          <p className="form-note">No payment needed to send an enquiry.</p>
        </form>
      </div>
    </section>
  );
}

export default BookingSection;