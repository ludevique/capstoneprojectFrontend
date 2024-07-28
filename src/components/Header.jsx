import React from 'react'
import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import './header.css'
const Header = () => {

  const [navbar, setNavbar] = useState(false)
  return (
    
        <nav>
          <Link to='/' className='navbar'>
            home
          </Link>
          <div className="menu">
            <span></span>
            <span></span>
            <span></span>  
          </div> 
          <ul className={navbar ? 'open': ''}>
            <li>
                <NavLink to='/register'>Register</NavLink>
            </li>
            <li>
                <NavLink to='/courses'>Courses</NavLink>
            </li>
            <li>
                <NavLink to='/login'>Login</NavLink>
            </li>
          </ul>    
        </nav>  
    
    
  )
}

export default Header