import React from 'react'
import isaacPic from '../assets/isaac-pic.jpg'
import './About.scss'

const About = () => {
  return (
    <div className='page'>
      <div className='about-container' >
        <div className='photo'><img src={isaacPic} /></div>
        <div className='content'>
          <h1>About</h1>
          <br/>
          <p>
              Hi, I'm Isaac Kalu! This is my design 
              portfolio where I share all of my 
              favorite work. When I'm not designing 
              things, I enjoy exercising, 
              playing video games, drinking good 
              coffee, and more.
            </p>
            <br/>
            <p>
              If you'd like to 
              follow me on Twitter, my username is ----
            </p>
          </div>
      </div>
    </div>
  )
}

export default About