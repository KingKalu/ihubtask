import React from 'react'  
import './App.scss'
import MainPage from './components/MainPage'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
        <BrowserRouter>
            <MainPage/>
        </BrowserRouter>
    </>
  )
}

export default App