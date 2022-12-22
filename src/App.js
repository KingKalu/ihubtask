import React from 'react'  
import './App.scss'
import Navbar from './components/Navbar'
import NavPage from './components/NavPage'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='app'>
        <Navbar />            
        <NavPage />
        <Footer />
    </div>
  )
}
export default App