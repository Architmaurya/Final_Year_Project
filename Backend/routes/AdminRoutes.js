const express=require("express")
const AdminRoutes=express.Router()
const {AdminTable} =require('../models/adminmodels')

//Admin register
AdminRoutes.post("/Admin-register",async(req,res)=>{
    const {name,email,contact,password} =req.body;
    let img=req.files.img;
    img.mv("uploads/"+img.name,(err)=>{
        if(err){
            res.send(err)
        }
    })
   const data=  new AdminTable({name:name,img:img.name,email:email,contact:contact,password:password})
   const result= await data.save()
       res.json({
        code :200,
        data:result
       })
})

//Admin logIn 
AdminRoutes.post("/Admin-login", async (req, res) => {
    const {email,password}=req.body
    
    
          const result = await AdminTable.findOne({email,password}); 
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

//Admin update
AdminRoutes.put("/admin-update/:_id",async(req,res)=>{
  const _id=req.params._id;
  const {name,email,contact,password}=req.body;
  let img=req.files.img;
  img.mv("uploads/"+img.name,(err)=>{
    if(err){
        res.send(err)
    }
})
  

const result=await AdminTable.findByIdAndUpdate({_id:_id},{
       $set:{name,email,contact,password,img:img.name}},
      {new:true}
)
 res.json({
  code:200,
  message:"Data updated Successfull",
  data:result

 })

})

module.exports={AdminRoutes}