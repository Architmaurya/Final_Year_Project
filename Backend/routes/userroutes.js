const express=require("express")
const userRoutes=express.Router()
const {userTable} =require('../models/usermodels');
const {booktabl, booktable} =require('../models/bookdatamodels')

//user registration 
userRoutes.post("/user-register",async(req,res)=>{
    const {name,email,contact,password,location} =req.body;
    let img=req.files.img;
    img.mv("uploads/"+img.name,(err)=>{
        if(err){
            res.send(err)
        }
    })
   const data = new userTable({name:name,img:img.name,email:email,location:location,contact:contact,password:password})
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

//User Update 
userRoutes.put("/user-update/:_id",async(req,res)=>{
  const _id=req.params._id;
  const {name,email,contact,password,location}=req.body;
  let img=req.files.img;
  img.mv("uploads/"+img.name,(err)=>{
    if(err){
        res.send(err)
    }
})
  

const result=await userTable.findByIdAndUpdate({_id:_id},{
       $set:{name,email,contact,password,location,img:img.name}},
      {new:true}
)
 res.json({
  code:200,
  message:"Data updated Successfull",
  data:result

 })

})


//Book reg
userRoutes.post("/user-bookreg",async(req,res)=>{
  const { userId,Book_Name,Author_Name, Genres, Amount, contact} =req.body;
  let img=req.files.img;
  img.mv("uploads/"+img.name,(err)=>{
      if(err){
          res.send(err)
      }
  })
 const data = new booktable({ userId,Book_Name: Book_Name,img:img.name,Author_Name:Author_Name,Genres:Genres,contact:contact, Amount: Amount})
 const result= await data.save()
     res.json({
      code :200,
      data:result
     })
})


module.exports={userRoutes};