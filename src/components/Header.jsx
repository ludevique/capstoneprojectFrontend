import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <div>
            <h1><i>STUDY CENTER FOR ALL</i></h1>
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