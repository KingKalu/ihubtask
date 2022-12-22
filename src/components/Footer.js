import React from 'react'
import './Footer.scss'
import facebook from '../assets/facebook-circle-fill.png'
import twitter from '../assets/twitter-fill.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <img src={facebook}/>
            <img src={twitter}/>
        </div>
        <p>2022 Isaac Kalu</p>
    </div>
  )
}

export default Footer