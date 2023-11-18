import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styles from './Posts.scss'
import { useState } from "react";
import { Link } from "react-router-dom";
import Components from "../Comments/Comments";
export default function Posts({post})
{
    /*
    comments option must only be available when the user clicks on the comments option to 
    do that I am using a variable named setcumint and cumint 
    */
    const [cumint,setCumint]=useState(false);
    /*for like option I am introducing a new variable */
    const liked=0;

    const newLocal = <div className="Posts">
    <div className="contained">
        <div className="User">
            <div className="userInfo">
                <img src="logo192.png" alt="" />
                <div className="details">
                <Link to="/Home" style={{textDecoration:"none",color:"inherit"}}>
                     <span className="name" >{post.userName+" "}</span>
                </Link>
                     <span className="Date">{post.raisedon}</span>   
                </div>
            </div>
            <MoreHorizIcon />
        </div>
        <div className="content">
        <p id="issue">{post.issue}</p>
        <img className="proimages" src={post.image} />
        <div className="info">
         <div className="item">
            <>{liked ? <FavoriteIcon />: <FavoriteBorderIcon />}</>
            12 likes
         </div>
         <div className="item" onClick={()=>setCumint(!cumint)}>
           <CommentIcon />
            14 comments
         </div>
        </div>
        {cumint &&<Components />}
        </div>
        </div>
    </div>;
    return (
         newLocal
      )
};