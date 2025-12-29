import React from 'react'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Education } from "@/components/sections/Education"
import { Contact } from "@/components/sections/Contact"

import { GridBackground } from "@/components/ui/grid-background"

import { Skills } from "@/components/sections/Skills"
import { Projects } from "@/components/sections/Projects"

import { ScrollProgress } from "@/components/ui/scroll-progress"
import { WelcomeToast } from "@/components/ui/welcome-toast"
import { BackToTop } from "@/components/ui/back-to-top"

function App() {
  return (
    <div className="min-h-screen font-sans antialiased relative">
      <ScrollProgress />
      <GridBackground />
      <Header />
      <main>
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <WelcomeToast />
    </div>
  )
}

export default App
