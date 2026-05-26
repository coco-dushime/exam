import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CustomerForm() {

  const [data, setData] = useState({
    FirstName: '',
    LastName: '',
    Address: '',
    Telephone: '',
    VehiclePlateNumber: '',
    VehicleType: ''
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

      await axios.post('http://localhost:5000/customer', data)

      alert('Customer inserted successfully')
      navigate('/dashboard')

      setData({
        FirstName: '',
        LastName: '',
        Address: '',
        Telephone: '',
        VehiclePlateNumber: '',
        VehicleType: ''
      })

    } catch (error) {
      console.log(error)
      alert('Error inserting customer')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-xl"
      >

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Customer Form
        </h1>

        {/* First Name */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            First Name
          </label>

          <input
            type="text"
            name="FirstName"
            value={data.FirstName}
            onChange={handleChange}
            placeholder="Enter First Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Last Name
          </label>

          <input
            type="text"
            name="LastName"
            value={data.LastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Address */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Address
          </label>

          <input
            type="text"
            name="Address"
            value={data.Address}
            onChange={handleChange}
            placeholder="Enter Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Telephone */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Telephone
          </label>

          <input
            type="text"
            name="Telephone"
            value={data.Telephone}
            onChange={handleChange}
            placeholder="Enter Telephone"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Vehicle Plate Number */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Vehicle Plate Number
          </label>

          <input
            type="text"
            name="VehiclePlateNumber"
            value={data.VehiclePlateNumber}
            onChange={handleChange}
            placeholder="Enter Plate Number"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Vehicle Type */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">
            Vehicle Type
          </label>

          <input
            type="text"
            name="VehicleType"
            value={data.VehicleType}
            onChange={handleChange}
            placeholder="Enter Vehicle Type"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold duration-300"
        >
          Save Customer
        </button>

      </form>
    </div>
  )
}

export default CustomerForm