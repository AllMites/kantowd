import { useEffect } from 'react'
import DotGridShader from './components/DotGridShader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ExampleSites from './components/ExampleSites'
import About from './components/About'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <DotGridShader />
      <div className="bg-mesh" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <ExampleSites />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
