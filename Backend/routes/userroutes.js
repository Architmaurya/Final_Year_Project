const express=require("express")
const userRoutes=express.Router()
const {userTable} =require('../models/usermodels');
const {booktable} =require('../models/bookdatamodels')

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

//Posted Book

userRoutes.post("/user-bookpost",async(req,res)=>{
  const { userId }=req.body;
  const bookPost=await booktable.find({userId:userId}).sort({createdAt:-1});
  const finnalData= await Promise.all(
    bookPost.map(async(item)=>{
    const BookDetails= await userTable.findOne({_id:item.userId});
     return {

          _id:item._id,
          Book_Name:item.Book_Name,
          Author_Name:item.Author_Name,
          Genres:item.Genres,
          Amount:item.Amount,
          contact:item.contact,
          img:item.img,
          name:BookDetails.name
    }
    })
   )
   res.json({
    code:200,
    message:"data found",
    data:finnalData
   })
}) ;

//All bookListing
userRoutes.get("/user-allbooklisting", async (req, res) => {
  try {
    const allBooks = await booktable.find({});
    res.status(200).json(allBooks); // Send the books to the frontend
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch books" });
  }
});




module.exports={userRoutes};