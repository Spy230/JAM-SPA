import { useState } from 'react'
import AgeVerification from './components/AgeVerification'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Masters from './components/Masters'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Interior from './components/Interior'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [ageVerified, setAgeVerified] = useState(
    localStorage.getItem('ageVerified') === 'true'
  )

  const handleAgeVerify = () => {
    localStorage.setItem('ageVerified', 'true')
    setAgeVerified(true)
  }

  return (
    <>
      {!ageVerified && <AgeVerification onVerify={handleAgeVerify} />}
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Services />
        <Masters />
        <About />
        <WhyUs />
        <Interior />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}

export default App
