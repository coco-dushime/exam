import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from './Register'
import Home from './Home'
import Login from './Login'
import Dashboard from './Dashboard'

function AppRouter() {
  return (
    
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default AppRouter