import React, { useEffect, useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Posts from "../Posts/Posts";
import { useQuery } from "@tanstack/react-query";
import Share from "../Addposts/Addposts";
import styles from './Stories.scss'
import { makeRequest } from "../../axios";

import { useLocation } from "react-router-dom";

import axios from "axios";
export default function Stories({props, chief})
{
  const location = useLocation();
  const id = !chief?location.pathname.split("/")[1]:location.pathname.split("/")[2];
  console.log(chief);
  console.log(id);
  const [arr,setArrya]=useState([]);
    const stories =[
        {
            id:1,
            image:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
           issue:"Bad food",
           upvotes:"1",
           downvotes:"4",
           raisedon:"18/01/2093",
           status:false,
           user:"archit bajpai",
           userName:"20214229",
           comments:"None",
           hostel:"Tandon"
        },
        {

            id:2,
            image:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
           issue:"Bad food",
           upvotes:"1",
           downvotes:"4",
           raisedon:"18/01/2093",
           status:false,
           user:"archit bajpai",
           userName:"20214229",
           comments:"None",
           hostel:"Tandon"
        },
    ];
    
    useEffect(()=> {
      const fetchData = async () => {
        try{
        
          const response = await axios.get("http://localhost:9000/api/showComplaints/"  + (id!==""?id:"Malviya"), {
          withCredentials: true
        })
   
          setArrya(response.data.complaints) // Set the fetched data into state
          console.log(arr);
        }catch(err){
          console.log(err);
        }
      };
      fetchData();
    }, []);
  
    return (
      <div>
         {!chief && <Share />}
        <div className="outer">
        <div className="useless"></div>
    <div className="Stories">
      {arr.map(story => (
       <Posts post={story} chief={chief} key={story._id} />
      ))}
    </div>
    <div className="useless"></div>
    </div>
    </div>)
}