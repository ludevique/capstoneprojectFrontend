import React from 'react'
import { useState } from 'react'

//manage our data here we want to change and update everytime.
const RegisterPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')

    //function handler
    const handleRegister = (e) => {
        e.preventDefault();
    };

    //implementing the logic we want to return in our page
  return (
    <div className='register'>
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
            <label>
                Username:
                <input 
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <br/>
            <label htmlFor="password">
                Password:
                <input 
                    type='text'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br/>
            <label htmlFor="Email">
                Email:
                <input 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />

            </label>

            {/* create our submit button for the registration page */}
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default RegisterPage