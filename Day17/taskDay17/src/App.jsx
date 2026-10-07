import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Parent from './components/Parent/Parent'

function App() {

  return (
    <>
      <Parent />
      <Contact />
      <About />
    </>
  )
}

export default App
