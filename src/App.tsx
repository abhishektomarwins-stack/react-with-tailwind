import Header from './components/Header'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Community from './components/Community'
import Spending from './components/Spending'
import Stats from './components/Stats'
import Testimonial from './components/Testimonial'
import DesignSection from './components/DesignSection'
import Footer from './components/footer'
import Blog from './components/Blog'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clients />
        <Community />
        <Spending />
        <Stats />
        <DesignSection />
        <Testimonial />
        <Blog />
      </main>
      <Footer />
    </>
  )
}

export default App
