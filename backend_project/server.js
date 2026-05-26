import db from "./db.js";
import express from 'express';
import cors from 'cors'
import { login, register } from "./user.js";
import { insertCustomer } from "./customers.js";
import { deleteInvoices, insertinvoice, selectInvoices, updateinvoices } from "./invoice.js";
import { insertServices } from "./services.js";

const app= express()

app.use(express.json())
app.use(cors())

app.post('/register',register);
app.post('/login',login);
app.post('/customer',insertCustomer)
app.post('/services',insertServices)
app.post('/insertinvoices',insertinvoice)
app.get('/selectinvoices',selectInvoices)
app.put('/updateinvoices/:invoiceid',updateinvoices)
app.delete('/deleteinvoices/:invoiceid',deleteInvoices)

app.listen(5000,()=>{
    console.log('server is running on http://localhost:5000')
})