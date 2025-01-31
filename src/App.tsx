import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Font imports
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/700.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import BookSection from './components/BookSection'
import AboutSchool from './components/AboutSchool'
import Founders from './components/Founders'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-tertiary">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <BookSection />
        <AboutSchool />
        <Founders />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  )
}

export default App
