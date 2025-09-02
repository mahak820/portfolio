import React from 'react'
import Hero from './components/Hero'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import About from './Pages/about'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Contact from './Pages/Contacts'
import SleekLineCursor from './components/SleekLineCursor'
import Experience from './Pages/Experience'
import './index.css'  

const App = () => {
  return (
    <div className=''>

          <SleekLineCursor
        trails={10}        // Number of trailing lines
        size={25}          // Number of nodes per trail
        friction={0.4}     // Global friction
        dampening={0.3}    // Velocity damping between nodes
        tension={0.98}     // Spring intensity
      />

      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Hero/>} />
          <Route path='/about' element ={<About/>} />
          <Route path='/projects' element ={<Projects/>} />
          <Route path='/skills' element ={<Skills/>} />
          <Route path='/contact' element ={<Contact/>} />
          <Route path='/experience' element ={<Experience/>} />
        </Routes>
      </BrowserRouter>

      {/* <Hero/> */}
    </div>
  )
}

export default App
