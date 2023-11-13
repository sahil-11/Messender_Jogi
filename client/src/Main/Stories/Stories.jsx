import React from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Posts from "../Posts/Posts";
import styles from './Stories.scss'

export default function Stories()
{
    const stories =[
        {
            id:1,
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
    return (<div className="Stories">
      {stories.map(story => (
       <Posts post={story} key={story.id} />
      ))}
    </div>)
}