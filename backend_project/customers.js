import db from './db.js'

export const insertCustomer=(req,res)=>{
    const {FirstName,LastName,Address,Telephone,VehiclePlateNumber,VehicleType} =req.body;

    const sql= "insert into customers(FirstName,LastName,Address,Telephone,VehiclePlateNumber,VehicleType) values(?,?,?,?,?,?)" ;

    db.query(sql,[FirstName,LastName,Address,Telephone,VehiclePlateNumber,VehicleType],(err,result)=>{
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