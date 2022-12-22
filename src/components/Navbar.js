import React from 'react'
import './Navbar.scss'
import Logo from '../logo.svg'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  const activeLink = 'active'
  const normalLink = ''
  return (
        <nav>
            <div><Link to='/'><img className='logo' src={Logo} /></Link></div>
            <ul>
                <li><NavLink to='/' className={({isActive})=>isActive?activeLink:normalLink}>Home</NavLink></li>
                <li><NavLink to='portfolio' className={({isActive})=>isActive?activeLink:normalLink}>PortFolio</NavLink></li>
                <li><NavLink to='about' className={({isActive})=>isActive?activeLink:normalLink}>About</NavLink></li>
                <li><NavLink to='contact' className={({isActive})=>isActive?activeLink:normalLink}>Contact</NavLink></li>
            </ul>
        </nav>
  )
}

export default Navbar