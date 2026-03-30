import React from 'react'
import {useState} from "react";
import axios from "axios";
import {useEffect} from "react";


const App = () => {
  const [notes, setnotes] = useState([
    { title: "Note 1", description: "This is the first note" },
    { title: "Note 2", description: "This is the first note" },
    { title: "Note 3", description: "This is the first note" },
    { title: "Note 4", description: "This is the first note" }
    ])

    // console.log("Hello World");

    function fetchNotes(){
          axios.get("http://localhost:3000/api/notes")
          .then((res)=>{
          // console.log(res.data.notes);
          setnotes(res.data.notes);
          })

    }

    useEffect(()=>{
      fetchNotes();
    },[])

    function submitHandler(e){
      e.preventDefault();
      
      const {title,description}=e.target.elements;
      console.log(title.value,description.value);

      axios.post("http://localhost:3000/api/notes",{
        title:title.value,
        description:description.value,
      })
      .then((res)=>{
        console.log(res.data);
        fetchNotes();
      })
    }

    function deleteNote(id){
      axios.delete(`http://localhost:3000/api/notes/${id}`)
      .then((res)=>{
        console.log(res.data);
        fetchNotes();
      })
    }

    function updateNote(e,id){
      e.preventDefault();
      const description=e.target.elements[0].value;
      console.log(description);

      // console.log(description);
      axios.patch(`http://localhost:3000/api/notes/${id}`,{description:description})
      .then((res)=>{
        console.log(res.data);
        fetchNotes();
      })



    }


  return (
    <>
    
    <form className='note-create-form'
    onSubmit={(e)=>{
      submitHandler(e);
    }}>
      <input name="title" type="text" placeholder='Enter Title' />
      <input name="description"type="text" placeholder='EnterDescription' />
      <button >Create Note</button>
    </form>

    <div className='notes'>
      {notes.map((val,idx)=>{
        return <div className='note' key={idx}>
        <h1>{val.title}</h1>
        <p>{val.description}</p>
        <button
        className='delete'
        onClick={()=>{
          
          deleteNote(val._id);
        }}>Delete</button>
        <form
        onSubmit={(e)=>{
          // e.preventDefault();
          updateNote(e,val._id)
        }}>
          <input type="text" placeholder="Enter updated description" className='input'/>
          <button 
          className='update'>Update</button>
        </form>
        
      </div>
      })}
      
    </div>
    </>
  )
}

export default App

//CORS policy is implemented on the broswer(client) side 

