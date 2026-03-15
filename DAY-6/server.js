//this file used for starting the server and connecting to database

const app=require("./src/app");
const mongoose=require("mongoose");

function connectToDb(){
    mongoose.connect("mongodb+srv://shreymishra1502_db_user:bB796RupyBQD8htG@cluster0.dbja7dv.mongodb.net/day-6")
    .then(()=>{
        console.log("Connected to Database");

    });

}

connectToDb();

app.listen("3000",()=>{
    console.log("server is running on port 3000");
});