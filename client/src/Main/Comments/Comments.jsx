import React, { Component, useContext, useEffect, useState } from 'react'
import axios from 'axios';
import styles from './Comments.scss'
import Comment from './comment/comment'

export default function Components({props}) 
{
     const [comment,setComment]=useState('');
     const [cummints, setCummints] = useState([]);

    const comint=props.comments;

    const [currentUser, setCurrentUser] = useState(
      JSON.parse(localStorage.getItem("user"))
    );
    useEffect(()=> {
      const fetchData = async () => {
        try{
            const response = await axios.get("http://localhost:9000/api/comment/"+props._id,)
            console.log(response);
            setCummints(response.data.comments);
        }catch(err){
            console.log(err);
        }   
      };
      fetchData();
    }, []);
   
    const handlesSubmit= async (e) =>
    {
      e.preventDefault();
      console.log("pressed");
     const port=props._id;
     console.log(comment);
     console.log(port);
     const _id=currentUser.user._id;
  
     const firstName=currentUser.user.firstName;
     const lastName=currentUser.user.lastName;
     var str="http://localhost:9000/api/comment/"+port;
     try
     {
      
     axios.post(str,{
      comment,_id,firstName,lastName
     })
     }
     catch(error)
     {
      console.log(error.body);
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
      <form onSubmit={handlesSubmit}>
     <div className='writecomment'>
        <img src='logo512.png' alt="" />
        <input type="text" placeholder='Write a comment' value={comment} onChange={(e)=> {setComment(e.target.value)
        }}/>
        <button onClick={handlesSubmit}>Post</button>
     </div>
     </form>
        {cummints.map(comment =>(
            <Comment comment={comment} key={comment._id}/>
        ))}
      </div>
    )
};
