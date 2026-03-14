// This file is used for creating server and configuring server

const express=require("express");

const app=express(); //server instance created

app.use(express.json()); //Middleware

const notes=[];

app.get("/",function(req,res){
    res.send("Hello World");

});

app.post("/notes",(req,res)=>{
    console.log(req.body);

    notes.push(req.body);
    console.log(notes);
    res.send("note created");

});

app.get("/notes",(req,res)=>{
    res.send(notes);

});

//req.body-> for larger data
//req.params-> for smaller data(works for dynamic routing/data)
app.delete("/notes/:index",(req,res)=>{
    // console.log(req.params.index);
    delete notes[req.params.index];
    res.send(notes);

});

//PUT-> complete replacement of data
//PATCH-> partial replacement of data
app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description=req.body.description;
    res.send("note updated sucessfully");
});

module.exports=app;
