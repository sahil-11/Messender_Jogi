import React, { Component, useContext, useEffect, useState } from 'react'
import axios from 'axios';
import styles from './Comments.scss'
import Comment from './comment/comment'

export default function Components({props}) 
{
     const [comment,setComment]=useState('');
     const [cummints, setCummints] = useState([]);

    const comint=props.comments;
    console.log(comint);
   
      const fetchData = async () => {
        try{
            const response = await axios.get("http://localhost:9000/api/comment/655a3453df07c93104f2d98b", {
            withCredentials: true
          })
            console.log(response);
        }catch(err){
            console.log(err);
        }
        
          
        
        
      };
      fetchData();
   
    const handlesSubmit= async (e) =>
    {
     e.preventDefault();
     const port=comint._id;
     try
     {
     axios.post("http://localhost:9000/api/comment/"+port,{
      comment
     })
     }
     catch(error)
     {
      console.log(error.response.data);
     }
    };
    const comments = [
        {
          id: 1,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
          name: "John Doe",
          userId: 1,
          profilePicture:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
          name: "Jane Doe",
          userId: 2,
          profilePicture:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      ];
    return (
      <div className='Comments'>
     <div className='writecomment'>
        <img src='logo512.png' alt="" />
        <input type="text" placeholder='Write a comment' value={comment} onChange={(e)=> {setComment(e.target.value)
        console.log(comment)}}/>
        <button onSubmit={handlesSubmit}>Post</button>
     </div>
        {cummints.map(comment =>(
            <Comment comment={comment} key={comment._id}/>
        ))}
      </div>
    )
};
