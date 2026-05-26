import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ServiceForm() {

  const [data, setData] = useState({
    ServiceCode: '',
    ServiceName: '',
    ServiceCost: ''
  })

  const navigate=useNavigate()

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      await axios.post('http://localhost:5000/services', data)

      alert('Service inserted successfully')
      navigate('/dashboard')

      setData({
        ServiceCode: '',
        ServiceName: '',
        ServiceCost: ''
      })

    } catch (error) {
      console.log(error)
      alert('Error inserting service')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl"
      >

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Service Form
        </h1>

        {/* Service Code */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Service Code
          </label>

          <input
            type="text"
            name="ServiceCode"
            value={data.ServiceCode}
            onChange={handleChange}
            placeholder="Enter Service Code"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Service Name */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Service Name
          </label>

          <input
            type="text"
            name="ServiceName"
            value={data.ServiceName}
            onChange={handleChange}
            placeholder="Enter Service Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Service Cost */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">
            Service Cost
          </label>

          <input
            type="number"
            name="ServiceCost"
            value={data.ServiceCost}
            onChange={handleChange}
            placeholder="Enter Service Cost"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold duration-300"
        >
          Save Service
        </button>

      </form>
    </div>
  )
}

export default ServiceForm