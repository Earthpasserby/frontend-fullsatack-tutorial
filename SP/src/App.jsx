import { useState } from 'react';
import SiteHeader from './components/SiteHeader.jsx';
import HeroSection from './components/HeroSection.jsx';
import TripStylesSection from './components/TripStylesSection.jsx';
import DestinationCatalog from './components/DestinationCatalog.jsx';
import InspirationCarousel from './components/InspirationCarousel.jsx';
import WhySocialPrefect from './components/WhySocialPrefect.jsx';
import TravelNotes from './components/TravelNotes.jsx';
import FAQSection from './components/FAQSection.jsx';
import BookingSection from './components/BookingSection.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import './App.css';

function App() {
  const [tripType, setTripType] = useState('');
  const [destination, setDestination] = useState('');

  function planTrip(type, place = '') {
    setTripType(type);
    setDestination(place);
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <HeroSection onPlanTrip={planTrip} />
        <TripStylesSection onPlanTrip={planTrip} />
        <DestinationCatalog onPlanTrip={(place) => planTrip('Help me decide', place)} />
        <InspirationCarousel onPlanTrip={planTrip} />
        <WhySocialPrefect />
        <TravelNotes onPlanTrip={planTrip} />
        <FAQSection />
        <BookingSection destination={destination} onDestinationChange={setDestination} tripType={tripType} onTripTypeChange={setTripType} />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
