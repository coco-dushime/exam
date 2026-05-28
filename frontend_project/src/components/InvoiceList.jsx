import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function InvoiceList() {

  const [invoice, setInvoice] = useState([])
  const navigate=useNavigate();

      const fetchUser=()=>{
     axios.get('http://localhost:5000/select')
      .then((res) => {
        setInvoice(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }

  useEffect(() => {
    fetchUser();

  }, [])

  const handleDelete=(invoiceid)=>{
    axios.delete(`http://localhost:5000/deleteinvoices/${invoiceid}`)
    .then(()=>{
        alert('delete successfully')
        fetchUser();
    })
    .catch((err)=>{
        alert('fail to delele',err)
    })
  }


  const handleEdit=(invoiceid)=>{
    navigate(`/update/${invoiceid}`)
  }
  return (
    <div className='min-h-screen bg-gray-100 p-8'>

      <div className='bg-white shadow-lg rounded-xl p-6'>

        <h1 className='text-3xl font-bold text-center mb-6 text-green-700'>
          Invoice Records
        </h1>
        <div className="flex justify-end m-4">
       <Link to='/invoice' 
       className="bg-blue-600 w-27 mr-3 p-2 rounded-l">
        CreateNew</Link>
       </div>

        <table className='w-full border-collapse'>

          <thead>
            <tr className='bg-green-600 text-white'>

              <th className='p-3 border'>Total Cost</th>
              <th className='p-3 border'>Paid Amount</th>
              <th className='p-3 border'>Balance</th>
              <th className='p-3 border'>Payment Month</th>
              <th className='p-3 border'>Actions</th>

            </tr>
          </thead>

          <tbody>

            {
              invoice.length > 0 ? (

                invoice.map((data, invoiceid) => (

                  <tr
                    key={invoiceid}
                    className='text-center hover:bg-gray-100'
                  >

                    <td className='border p-3'>
                      {data.TotalCost}
                    </td>

                    <td className='border p-3'>
                      {data.PaidAmount}
                    </td>

                    <td className='border p-3'>
                      {data.Balance}
                    </td>

                    <td className='border p-3'>
                      {data.PaymentMonth}
                    </td>

                    <td className='border p-3 space-x-2'>

                      <button className='bg-red-500 hover:bg-red-700 text-white px-4 py-1 rounded'
                      onClick={()=>handleDelete(data.invoiceid)}>
                        Delete
                      </button>

                      <button className='bg-blue-500 hover:bg-blue-700 text-white px-4 py-1 rounded'
                      onClick={()=>handleEdit(data.invoiceid)}>
                        Update
                      </button>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>
                  <td
                    colSpan={5}
                    className='text-center p-5 text-gray-500'
                  >
                    No Invoice Found
                  </td>
                </tr>

              )
            }

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default InvoiceList