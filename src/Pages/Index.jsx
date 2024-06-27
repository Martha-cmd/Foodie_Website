import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import About from './About/About'

const Index = () => {
  return (
    <>
          <Router>
            <Nav />
                <Routes>
                     <Route path='/' element={<Home />}/>
                     <Route path='about' element={<About />}/>
                </Routes>
            <Footer />    
          </Router>
    </>
  )
}

export default Index