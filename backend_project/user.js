import db from "./db.js";
import bcrypt from "bcrypt"

export const register=async (req,res)=>{
    const {name,password}=req.body;
    const hashedpassword= await bcrypt.hash(password,10)

    const sql="insert into users(name,password) values(?,?)";

    db.query(sql,[name,hashedpassword],(err,result)=>{
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

export const login=(req,res)=>{
     const {name,password}=req.body;

    const sql="select * from users where name=? and password=?";

    db.query(sql,[name,password],async(err,result)=>{
         if(err){
            console.log('fail',err)
            res.status(500).json({message:'internal server error'})
         }
         if(result===0){
            res.status(400).json({message:'user not found'})
         }
            res.json({
                message:'login successfully',
                data:result
            })
         
    })
}