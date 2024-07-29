import './App.css'
import {Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './components/Login'
import CoursePage from './components/CoursePage'
import Header from './components/Header'
import RegisterPage from './components/RegisterPage'

function App() {
  

  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/course' element={<CoursePage/>}/>
      </Routes>
    </div>
  )
}

export default App
