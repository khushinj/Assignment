import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Sections from './pages/Sections'
import Demand from './pages/Demand'
import Fleet from './pages/Fleet'
import Contact from './pages/Contact'
import './App.css'
import Footer from './pages/Footer'

function App() {

  return (
    <>
      <Home />
      <Sections/>
      <About/>
      <Demand/>
      <Fleet/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
