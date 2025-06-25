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
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <SocialProof />
      <Faqs />
      <Banner
        title="Your Confident Pregnancy Awaits!"
        description="Don't delay the personalized support you deserve. Connect with our experts today to discuss your unique needs and begin your journey to optimal health and an empowered birth."
        buttonText="Schedule Your Free Consultation"
      />
      <Footer />
    </>
  );
}

export default App
