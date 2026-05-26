import db from './db.js'

export const insertinvoice=(req,res)=>{
    const {TotalCost,PaidAmount,Balance,PaymentMonth}=req.body;

    const sql="insert into invoices(TotalCost,PaidAmount,Balance,PaymentMonth) values(?, ?, ?, ?)"

    db.query(sql,[TotalCost,PaidAmount,Balance,PaymentMonth],(err,result)=>{
        if(err){
            console.log('fail',err)
            res.status(500).json({message:'internal server error'})
         }else{
            res.json({
                message:'successfully inserted',
                data:result
            })
         }
    })
}


export const updateinvoices=(req,res)=>{
    const {invoiceid}=req.params;
    const {TotalCost,PaidAmount,Balance,PaymentMonth}=req.body;

    const sql="update invoices set TotalCost=? ,PaidAmount=? ,Balance=? ,PaymentMonth=? where invoiceid=?";
    db.query(sql,[TotalCost,PaidAmount,Balance,PaymentMonth,invoiceid],(err,result)=>{
        if(err){
            console.log('fail',err)
            res.status(500).json({message:'internal server error'})
         }else{
            res.json({
                message:'updated ',
                data:result
            })
         }
    })

}

export const selectInvoices=(req,res)=>{
    const sql='select * from invoices';
    db.query(sql,(err,result)=>{
        if(err){
            console.log('fail',err)
            res.status(500).json({message:'internal server error'})
         }else{
            res.json({
                message:'selected ',
                data:result
            })
         }
    })
} 

export const deleteInvoices=(req,res)=>{
    const {invoiceid}=req.params;

    const sql='delete from invoices where invoiceid=?'
    db.query(sql,[invoiceid],(err,result)=>{
        if(err){
            console.log('fail',err)
            res.status(500).json({message:'internal server error'})
         }else{
            res.json({
                message:'deleted ',
                data:result
            })
         }
    })
}