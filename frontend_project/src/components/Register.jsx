import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

function Register() {

  const [data,setData]=useState({
    name:'',
    password:''
  })

  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/register',data)
    .then(res=>{
      res.data
      alert("user succesfully registered")
      navigate('/login')
    })
    .catch(err=>{
      alert("registeration fail")
    })
  }

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-xl"
      >

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Registration Form
        </h1>

          <label className="text-gray-500">Name</label>

          <input
            type="text"
            name="name"
            placeholder="your name"
             className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            value={data.name}
            onChange={handleChange}
            required
          />

          <label className="text-gray-500">Password</label>

          <input
            type="password"
            name="password"
            placeholder="*******"
             className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            value={data.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold duration-300"
          >
            Register
          </button>

          <p className="text-gray-500">
            Already have an account

            <Link to='/login' className="ml-2 text-blue-600">
              SignUp
            </Link>
          </p>

        </form>
      </div>

    
  )
}

export default Register