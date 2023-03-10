import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import About from '../pages/About'
import Contact from '../pages/Contact'

const NavPage = () => {
  return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
      )
}

export default NavPage