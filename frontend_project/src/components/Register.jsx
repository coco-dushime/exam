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
    <div className="flex items-center justify-center bg-gray-200 min-h-screen">

      <div className="bg-white w-90 p-5 rounded shadow">

        <h1 className="mt-5 text-gray-500 font-bold text-3xl flex justify-center">
          Registration Form
        </h1>

        <form className="grid grid-cols-1 gap-3 mt-5" onSubmit={handleSubmit}>

          <label className="text-gray-500">Name</label>

          <input
            type="text"
            name="name"
            placeholder="your name"
            className="w-full p-2 rounded focus:ring focus:ring-blue-500 bg-gray-200 outline-none"
            value={data.name}
            onChange={handleChange}
            required
          />

          <label className="text-gray-500">Password</label>

          <input
            type="password"
            name="password"
            placeholder="*******"
            className="w-full p-2 rounded focus:ring focus:ring-blue-500 bg-gray-200 outline-none"
            value={data.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="bg-blue-600 mt-2 p-2 rounded text-white hover:bg-blue-800"
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

    </div>
  )
}

export default Register