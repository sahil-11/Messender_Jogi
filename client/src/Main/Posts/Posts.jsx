import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styles from './Posts.scss'
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Components from "../Comments/Comments";
import { AuthContext } from "../../pages/authContext";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
export default function Posts({post, chief})
{
    console.log(post);
    console.log(chief);
    /*
    comments option must only be available when the user clicks on the comments option to 
    do that I am using a variable named setcumint and cumint 
    */
    const [cumint,setCumint]=useState(false);
    /*for like option I am introducing a new variable */
    const [liked, setLiked] = useState(false);
    const {resolve, deleteC}=useContext(AuthContext);
    const handleDelete = async (e) =>{
        e.preventDefault();
        try{
            await deleteC(post._id);
            
        }catch(err){
            console.log(err);
        }
        
    }

    const handleResolve = async (e) =>{
        e.preventDefault();
        try{
            await resolve(post._id);
            
        }catch(err){
            console.log(err);
        }
        
    }

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
         <div onClick={() => {
           setLiked(!liked);
         }} className="item">
            <>{liked ? <FavoriteIcon />: <FavoriteBorderIcon />}</>
            12 likes
         </div>
         <div className="item" onClick={()=>setCumint(!cumint)}>
           <CommentIcon />
            {post.comments.length} comments
         </div>
         {!chief && <div onClick={handleDelete} className="item">
           <DeleteOutlineOutlinedIcon />
             Delete
         </div>}
         {chief && <div onClick={handleResolve} className="item">
           <CheckCircleOutlinedIcon />
             Resolve
         </div>}
        </div>
        {cumint &&<Components props={post}/>}
        </div>
        </div>
    </div>;
    return (
         newLocal
      )
};