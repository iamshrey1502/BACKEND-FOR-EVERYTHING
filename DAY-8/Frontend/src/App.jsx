import React from 'react'
import {useState} from "react";
import axios from "axios";

const App = () => {
  const [notes, setnotes] = useState([
    { title: "Note 1", description: "This is the first note" },
    { title: "Note 2", description: "This is the first note" },
    { title: "Note 3", description: "This is the first note" },
    { title: "Note 4", description: "This is the first note" }
    ])

    axios.get("http://localhost:3000/api/notes")
    .then((res)=>{
      console.log(res.data.notes);
      // setnotes(res.data.notes);
    })
  return (
    <>
    <div className='notes'>
      {notes.map((val,idx)=>{
        return <div className='note' key={idx}>
        <h1>{val.title}</h1>
        <p>{val.description}</p>
      </div>
      })}
      
    </div>
    </>
  )
}

export default App

//CORS policy is implemented on the broswer(client) side 