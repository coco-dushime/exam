import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='bg-gray-300 min-h-screen flex items-center justify-center gap-5'>
        <div className='bg-gray-700 h-full p-10 grid text-white rounded-xl'>
            <h1 className="mt-5 text-white font-bold text-3xl flex justify-center">
              Welcome To Vehicle Service Managment System
              </h1>
            <nav className='gap-3 mt-10 grid grid-cols-2 '>
            <Link to='/register' className='bg-green-400 shadow-white/90 rounded-xl p-5 animate-bounce w-50 ml-40'>Register</Link>
              <Link to='/login' className='bg-yellow-400 shadow-white/90 rounded-xl p-5 animate-bounce w-50'>Login</Link>
            </nav>
        </div>

    </div>
  )
}

export default Home