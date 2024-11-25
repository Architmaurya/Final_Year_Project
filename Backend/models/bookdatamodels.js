const mongoose=require("mongoose")
const BookSchema=new mongoose.Schema({
    userId:{type:String},
    Book_Name:{type:String,required:true},
   Author_Name:{type:String,required:true},
    Genres:{type:String,required:true},
    Amount:{type:Number,required:true},
    contact:{type:Number,required:true},
    img:{type:String,required:true},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()}
})
const booktable=mongoose.model("Book",BookSchema)
module.exports={booktable}