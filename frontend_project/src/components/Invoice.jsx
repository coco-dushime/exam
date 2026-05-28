import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Invoice() {

  const [data, setData] = useState({
    TotalCost: '',
    PaidAmount: '',
    Balance: '',
    PaymentMonth: ''
  })

  const {invoiceid} = useParams();

  const [payments, setPayments] = useState([])
  const [editId, setEditId] = useState(null)

  // Handle Input Change
  const handleChange = (e) => {

    const updatedData = {
      ...data,
      [e.target.name]: e.target.value
    }

    // Auto Calculate Balance
    if (
      updatedData.TotalCost !== '' &&
      updatedData.PaidAmount !== ''
    ) {

      updatedData.Balance =
        Number(updatedData.TotalCost) -
        Number(updatedData.PaidAmount)
    }

    setData(updatedData)
  }

  // Fetch Payments
  const fetchPayments = async () => {

    try {

      const res = await axios.get(
        'http://localhost:5000/select'
      )

      setPayments(
        Array.isArray(res.data.data) ? res.data.data : []
      )

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPayments()
  }, [])

  // Insert & Update
  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      if (editId === null) {

        // INSERT
        await axios.post(
          'http://localhost:5000/insertinvoices',
          data
        )

        alert('Inserted Successfully')

      } else {

        // UPDATE
        await axios.put(
          `http://localhost:5000/updateinvoices/${invoiceid}`,
          data
        )

        alert('Updated Successfully')
      }

      // Refresh Table
      fetchPayments()

      // Reset Form
      setData({
        TotalCost: '',
        PaidAmount: '',
        Balance: '',
        PaymentMonth: ''
      })

      setEditId(null)

    } catch (error) {

      console.log(error)
      alert('Error')
    }
  }

  // Delete
  const handleDelete = async (invoiceid) => {

    try {

      await axios.delete(
        `http://localhost:5000/deleteinvoices/${invoiceid}`
      )

      alert('Deleted Successfully')

      fetchPayments()

    } catch (error) {

      console.log(error)
    }
  }

  // Edit
  const handleEdit = (item) => {

    setData({
      TotalCost: item.TotalCost,
      PaidAmount: item.PaidAmount,
      Balance: item.Balance,
      PaymentMonth: item.PaymentMonth?.split('T')[0]
    })

    setEditId(item.invoiceid)
  }

  return (

      <div className="min-h-screen bg-gray-100 p-5">

      {/* FORM */}
      <div className="flex justify-center mb-10">

        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-xl"
        >

          <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Payment Form
          </h1>

          {/* Total Cost */}
          <div className="mb-5">

            <label className="block mb-2 font-semibold">
              Total Cost
            </label>

            <input
              type="number"
              name="TotalCost"
              value={data.TotalCost}
              onChange={handleChange}
              placeholder="Enter Total Cost"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          {/* Paid Amount */}
          <div className="mb-5">

            <label className="block mb-2 font-semibold">
              Paid Amount
            </label>

            <input
              type="number"
              name="PaidAmount"
              value={data.PaidAmount}
              onChange={handleChange}
              placeholder="Enter Paid Amount"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          {/* Balance */}
          <div className="mb-5">

            <label className="block mb-2 font-semibold">
              Balance
            </label>

            <input
              type="number"
              name="Balance"
              value={data.Balance}
              readOnly
              className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 outline-none"
            />

          </div>

          {/* Payment Month */}
          <div className="mb-6">

            <label className="block mb-2 font-semibold">
              Payment Month
            </label>

            <input
              type="date"
              name="PaymentMonth"
              value={data.PaymentMonth}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold duration-300"
          >
            {editId === null
              ? 'Save Payment'
              : 'Update Payment'}
          </button>

        </form>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">

        <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Total Cost</th>
              <th className="p-4">Paid Amount</th>
              <th className="p-4">Balance</th>
              <th className="p-4">Payment Month</th>
              <th className="p-4">Action</th>
            </tr>

          </thead>

          <tbody>

            {Array.isArray(payments) &&
              payments.map((item, index) => (

                <tr
                  key={index}
                  className="text-center border-b hover:bg-gray-100"
                >

                  <td className="p-4">
                    {item.invoiceid}
                  </td>

                  <td className="p-4">
                    {item.TotalCost}
                  </td>

                  <td className="p-4">
                    {item.PaidAmount}
                  </td>

                  <td className="p-4">
                    {item.Balance}
                  </td>

                  <td className="p-4">
                    {new Date(
                      item.PaymentMonth
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4 space-x-2">

                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(item.invoiceid)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default Invoice