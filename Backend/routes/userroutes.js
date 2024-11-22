const express=require("express")
const userRoutes=express.Router()
const {userTable} =require('../models/usermodels');

//user registration 
userRoutes.post("/user-register",async(req,res)=>{
    const {name,email,contact,password} =req.body;
    let img=req.files.img;
    img.mv("uploads/"+img.name,(err)=>{
        if(err){
            res.send(err)
        }
    })
   const data = new userTable({name:name,img:img.name,email:email,contact:contact,password:password})
   const result= await data.save()
       res.json({
        code :200,
        data:result
       })
}) ;


//user logIn 
userRoutes.post("/user-login", async (req, res) => {
    const {email,password}=req.body
          const result = await userTable.findOne({email,password}); 
          if(result) {
          res.json({
            code: 200,
            message: "Login Successfull !...",
            data:result
          });
        } else {
          res.json({
            code: 404,
            message: "Invalid Email or Password"
        
          });
        }
      });



module.exports={userRoutes};