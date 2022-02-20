const mongoose=require('mongoose');


const todoschema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:String,
    description:String
});


module.exports=mongoose.model('Todo',todoschema);