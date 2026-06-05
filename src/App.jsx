import { useEffect, useState } from 'react'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import PorQue from './components/sections/PorQue'
import Campaign from './components/sections/Campaign'
import Experiencia from './components/sections/Experiencia'
import Alianzas from './components/sections/Alianzas'
import Somos from './components/sections/Somos'
import Footer from './components/sections/Footer'

const ACCENT_MAP = {
  '#F26522': 'orange',
  '#FF5F03': 'redorange',
  '#2EE000': 'green',
  '#8B82E3': 'lavender',
  '#CDE600': 'acid',
}

export default function App() {
  const [accent] = useState('#F26522')

  useEffect(() => {
    const cls = document.documentElement.classList
    Object.values(ACCENT_MAP).forEach(c => cls.remove('accent-' + c))
    const name = ACCENT_MAP[accent] || 'orange'
    if (name !== 'orange') cls.add('accent-' + name)
  }, [accent])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PorQue />
        <Campaign />
        <Experiencia />
        <Alianzas />
        <Somos />
      </main>
      <Footer />
    </>
  )
}
