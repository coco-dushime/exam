import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


function InvoiceI() {
     
    const navigate = useNavigate();
     const [data, setData] = useState({
        TotalCost: '',
        PaidAmount: '',
        Balance: '',
        PaymentMonth: ''
      });
      

      const handleSubmit = (e) =>{
        e.preventDefault();

        axios.post('http://localhost:5000/insertinvoices',data)
        .then(res=>{
            res.data
            alert('registered successfully')
            navigate('/invoicelist')
        })
        .catch((err)=>{
            alert('fail',err)
        })
      }
    const handleChange =(e) =>{

        const {name,value} = e.target;

    let updateData={
        ...data,
        [name]:value  
    } 

    // auto calculate balance

    if(name=== "TotalCost" || name === "PaidAmount"){
        updateData.Balance =
        Number(updateData.TotalCost) - Number(updateData.PaidAmount)
    }
      
    setData(updateData)
}
  return (
    <div>
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
            Save Payment
          </button>

        </form>

      </div>
    </div>
  )
}

export default InvoiceI