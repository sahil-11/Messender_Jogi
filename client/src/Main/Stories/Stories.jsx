import React from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Posts from "../Posts/Posts";
import Navbar from '../../pages/Navbar1'
import styles from './Stories.scss'
import {useQuery} from '@tanstack/react-query'
import { makeRequest } from "../../axios";
export default function Stories()
{
    const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/api/showComplaints").then((res) => {
      return res.data;
    })
  );
    return (
        <>        <Navbar />
        <div className="outer">
        <div className="useless"></div>
    <div className="Stories">

      {
        error ? "Something Went Wrong!" :isLoading ?"Loading" :
        data.map(story => (
       <Posts post={story} key={story.id} />
      ))
      }
    </div>
    <div className="useless"></div>
    </div>
    </>
)
}