import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Routes,Route} from 'react-router-dom'
import Register from './Register'
import Home from './Home'
import Login from './Login'
import Dashboard from './Dashboard'
import CustomerForm from './Customer'
import ServiceForm from './Service'
import Notfound from './Notfound'
import Invoice from './Invoice'
import InvoiceList from './InvoiceList'
import InvoiceU from './InvoiceU'
import InvoiceI from './InvoiceI'


function AppRouter() {

  const [invoice,setInvoice]= useState([])

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
  return (
    
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
       <Route path='/customer' element={<CustomerForm/>}/>
       <Route path='/service' element={<ServiceForm/>}/>
       <Route path='*' element={<Notfound/>}/>
       <Route path='/invoice' element={<Invoice/>}/>
       <Route path='/invoicelist' element={<InvoiceList/>}/>
       <Route path='/addinvoice' element={<InvoiceI/>}/>
       <Route path='/update/:id' element={<InvoiceU onUpdate={fetchUser}/>}/>
    </Routes>
  )
}

export default AppRouter