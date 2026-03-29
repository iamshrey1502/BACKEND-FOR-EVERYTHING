const mongoose=require("mongoose");

const noteSchema=new mongoose.Schema({
    title:String,
    description:String,
})

const noteModel=mongoose.model("notes",noteSchema);// CRUD operations ke liye model banana jruri hai, jisme pehla argument collection ka naam hai, aur dusra argument schema hai.

module.exports=noteModel;