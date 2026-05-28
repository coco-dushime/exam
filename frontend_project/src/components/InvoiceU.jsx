import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

function InvoiceU({ onUpdate }) {

  const { invoiceid } = useParams();

  const [data, setData] = useState({
    TotalCost: '',
    PaidAmount: '',
    Balance: '',
    PaymentMonth: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {

    const { name, value } = e.target;

    let updatedData = {
      ...data,
      [name]: value
    };

    // Auto calculate balance
    if (name === "TotalCost" || name === "PaidAmount") {

      updatedData.Balance =
        Number(updatedData.TotalCost) - Number(updatedData.PaidAmount);
    }

    setData(updatedData);
  };

  useEffect(() => {

    const fetchInvoice = async () => {

      try {

        const res = await axios.get(
          `http://localhost:5000/selectinvoices/${invoiceid}`
        );

        const invoice = res.data.data[0]

        // FIXED HERE
        setData({
          TotalCost: invoice?.TotalCost || '',
          PaidAmount: invoice?.PaidAmount || '',
          Balance: invoice?.Balance || '',
          PaymentMonth: invoice?.PaymentMonth || ''
        });

      } catch (err) {

        console.log('failed to load invoice', err);

      }
    };

    fetchInvoice();

  }, [invoiceid]);

 const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    console.log(data);

    const res = await axios.put(
      `http://localhost:5000/updateinvoices/${invoiceid}`,
      {
        TotalCost: data.TotalCost,
        PaidAmount: data.PaidAmount,
        Balance: data.Balance,
        PaymentMonth: data.PaymentMonth
      }
    );

    console.log(res.data);

    alert('Updated successfully');

    navigate('/invoicelist');

  } catch (err) {

    console.log(err.response?.data || err.message);

    alert('Update failed');
  }
};
  return (

    <div className="min-h-screen bg-gray-100 p-5">

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
              value={data.TotalCost || ''}
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
              value={data.PaidAmount || ''}
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
              value={data.Balance || ''}
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
              value={data.PaymentMonth || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold duration-300"
          >
            Update Invoice
          </button>

        </form>

      </div>

    </div>
  );
}

export default InvoiceU;