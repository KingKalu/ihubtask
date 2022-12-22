import React from 'react'
import './Portfolio.scss'
import CardOne from '../assets/card1.jpg'
import CardTwo from '../assets/card2.jpg'

const Portfolio = () => {
  return (
    <div className='portfolio page'>
        <div className='content'>
          <ul>
            <li>
              <img src={CardOne} />
              <p>This is the First Card Design</p>
            </li>
            <li>
              <img src={CardTwo} />
              <p>This is the First Card Design</p>
            </li>
            <li>
              <img src={CardOne} />
              <p>This is the First Card Design</p>
            </li>
            <li>
              <img src={CardTwo} />
              <p>This is the First Card Design</p>
            </li>
          </ul>
        </div>

    </div>
  )
}

export default Portfolio