//imports
import Hero from './components/hero'
import Navbar from './components/navbar'
import Features from './components/features'
import './App.css'
import Benefits from './components/benefits'
import SocialProof from './components/socialProof'
import Faqs from './components/faqs'
import Banner from './components/banner'
import Footer from './components/footer'

function App() {
  return(
    <>
      <Navbar/>
      <Hero />
      <Features />
      <Benefits />
      <SocialProof />
      <Faqs />
      <Banner
        title="Don't wait!"
        description="Contact us to get instant consultation!"
        buttonText="Contact Us Now!"
      />
      <Footer />
    </>
  )
}

export default App
