import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <div>
            <nav>
                <Link to='/'>home</Link>
                <Link to='/courses'>Courses</Link>
                <Link to='/login'>Login</Link>
            </nav>
        </div>
    </header>
    
  )
}

export default Header