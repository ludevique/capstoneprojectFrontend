import React from 'react'
import { useState } from 'react'

const Login = () => {
    //manage our date here
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //handling function 
    const handleLogin = (e) => {
        e.preventDefault();
    }

    //display what we want to see on our browser
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <label>
                Username:
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
            </label>
            <br/>
            <label>
                Password:
                <input
                    type='text'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <br/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login