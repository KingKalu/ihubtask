import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './NavPage.scss'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import About from '../pages/About'
import Contact from '../pages/Contact'

const NavPage = () => {
  return (
    <main>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </main>
      )
}

export default NavPage