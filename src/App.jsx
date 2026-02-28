import React from 'react'
import Navbar from "./components/layouts/Navbar"
import Hero from './components/sections/Hero'
const App = () => {
  return (
    <div className='min-h-screen bg-black'>
      <Navbar/>
      {/* main */}
      <main>
        {/* Hero Sections */}
        <Hero/>
      </main>
    </div>
  )
}

export default App
