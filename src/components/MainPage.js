import React from 'react'
import Navbar from './Navbar'
import NavPage from './NavPage'
import Footer from './Footer'
import './MainPage.scss'

const MainPage = () => {
  return (
    <div className='mainpage'>

            <Navbar />            
            <NavPage />
            <Footer />

    </div>
  )
}

export default MainPage