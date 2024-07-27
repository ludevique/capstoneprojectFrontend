import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <nav className='navbar'>
            <Link to='/'>home</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/login'>Login</Link>
        </nav>  
    </header>
    
  )
}

export default Header