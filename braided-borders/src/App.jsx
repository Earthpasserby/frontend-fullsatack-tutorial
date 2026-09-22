import { useState } from 'react'

import ChallengeSection from './components/ChallengeSection'
import ClientSection from './components/ClientSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LeadershipSection from './components/LeadershipSection'
import ModelSection from './components/ModelSection'
import ServicesSection from './components/ServicesSection'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-brand-white text-brand-ink">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HeroSection />
      <ChallengeSection />
      <ServicesSection />
      <ClientSection />
      <ModelSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
