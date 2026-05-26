import db from "./db.js";

export const insertServices=(req,res)=>{
    const {ServiceCode,ServiceName,ServiceCost}= req.body;

    const sql= "insert into services(ServiceCode,ServiceName,ServiceCost)values(?,?,?)"
    db.query(sql,[ServiceCode,ServiceName,ServiceCost],(err,result)=>{
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
