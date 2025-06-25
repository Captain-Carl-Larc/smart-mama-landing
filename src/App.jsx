//imports
import Hero from './components/hero'
import Navbar from './components/navbar'
import Features from './components/features'
import './App.css'
import Benefits from './components/benefits'
import SocialProof from './components/socialProof'
import Faqs from './components/faqs'

function App() {
  return(
    <>
      <Navbar/>
      <Hero />
      <Features />
      <Benefits />
      <SocialProof />
      <Faqs />
    </>
  )
}

export default App
