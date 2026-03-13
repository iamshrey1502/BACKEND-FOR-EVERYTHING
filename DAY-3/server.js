const express=require("express");

const app=express();

// const notes=[//Array of objects
//     {
//         title:"Title 1",
//         description:"Description 1"
//     },
//     {
//         title:"Title 2",
//         description:"Description 2"
//     }
// ]

// app.get("/",function(req,res){
//     res.send("Hello World");
// });

const notes=[];

app.use(express.json());//Middleware


app.post("/notes",(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.send("note created");
});

app.get("/notes",(req,res)=>{
    res.send(notes);

});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");

});

