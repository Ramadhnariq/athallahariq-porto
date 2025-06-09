import React from 'react'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import NavBar from './components/NavBar.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import TechStack from './sections/TechStack.jsx'
import Footer from './sections/Footer.jsx'

const App = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <ShowcaseSection />
        <FeatureCards />
        <TechStack />
        <Footer />
    </>
  )
}

export default App