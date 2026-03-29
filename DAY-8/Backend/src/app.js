// server ko create krna

const express=require("express");
const noteModel=require("./models/note.model");
const cors=require("cors");

const app=express();

app.use(cors());// CORS policy ko implement krne ke liye ye middleware use krna padta hai, jisse hum apne frontend se backend ko access kar sakte hai, bina iske hum apne frontend se backend ko access nahi kar paenge, kyunki CORS policy ke according, ek domain ke resources ko dusre domain ke resources se access karne ki permission nahi hoti hai, isliye hume CORS policy ko implement krna padta hai, jisse hum apne frontend se backend ko access kar sakte hai. 
app.use(express.json());// json data ko read krne ke liye ye middleware use krna padta hai, jisse hum request body me json data bhej sakte hai.

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.post("/api/notes",async  (req,res)=>{
    const {title,description}=req.body;
    const note=await noteModel.create({
        title,description
    })
    res.status(201).json({
        message:"Note created sucessfully",
    });
       
})

app.get("/api/notes",async  (req,res)=>{
    const notes=await noteModel.find();// always return data in the form of array of objects, even if there is only one document in the collection, it will return an array with one object.
    res.status(200).json({
        message:"Notes fetched sucessfully",
        notes

    });
    
})

app.delete("/api/notes/:id",async (req,res)=>{
    // console.log(req.params.id); 
    await noteModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
        message:"Note deleted sucessfully"

    });

})

app.patch("/api/notes/:id",async (req,res)=>{
    const {description}=req.body;
    await noteModel.findByIdAndUpdate(req.params.id,{description});  

    res.status(200).json({
        message:"Note updated sucessfully"
    })
})

module.exports=app; 