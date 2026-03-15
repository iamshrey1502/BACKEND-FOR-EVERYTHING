const mongoose=require("mongoose");

const noteSchema=new mongoose.Schema({// schema for creating the structure
    title:String,
    description:String,

});

const noteModel=mongoose.model("notes",noteSchema);  // actual CRUD operations performs on model

module.exports=noteModel;

