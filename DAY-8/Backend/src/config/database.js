const mongoose=require("mongoose");

const connectToDB=()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected to database sucessfully");
    })
}

module.exports = connectToDB;