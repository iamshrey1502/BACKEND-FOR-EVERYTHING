// server ko create krna 
// server ko config krna

const express=require("express");
const noteModel=require("./models/notes.model");

const app=express();

app.use(express.json())//Middleware

app.post("/notes",async (req,res)=>{

    const {title,description}=req.body;

    const note=await noteModel.create({
        title,description

    })

    res.status(201).json({
        message:"Note created sucessfully",
        note
    })
});

app.get("/notes",async (req,res)=>{
    const notes=await noteModel.find();
    
    res.status(200).json({
        message:"notes fetched successfully",
        notes
    })


});

   
//mongoose package create a unique identifier to every document you create of any collection
//MONGODB find method always return data in the form of array of objects
module.exports=app;