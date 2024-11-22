const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const expressFileupload=require('express-fileupload');
const app=express()
const {AdminRoutes}=require('./routes/AdminRoutes')
const {userRoutes}=require('./routes/userroutes');
app.use(express.json());
app.use(cors())
app.use("/upload",express.static("./uploads"));

//http://localhost:9000/upload/daya.jpg
app.use(expressFileupload())
const DbConnect=async()=>{ 
        const con=await mongoose.connect("mongodb://localhost:27017/BookSwap_Data");
        if(con){
            console.log("Connected to MongoDB...");
        }
} 

DbConnect();
 app.use("/api",AdminRoutes);
 app.use("/api",userRoutes);
 


app.listen(8000,()=>{
    console.log("Server is Running at 8000 port")
})

