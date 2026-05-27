import React from 'react'
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


function AppRouter() {
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
    </Routes>
  )
}

export default AppRouter