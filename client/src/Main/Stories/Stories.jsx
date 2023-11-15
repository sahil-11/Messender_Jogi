import React from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Posts from "../Posts/Posts";
import styles from './Stories.scss'

export default function Stories()
{
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
    return (
        <div className="outer">
        <div className="useless"></div>
    <div className="Stories">
      {stories.map(story => (
       <Posts post={story} key={story.id} />
      ))}
    </div>
    <div className="useless"></div>
    </div>)
}