
import { useContext, useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import styles from './Addposts.scss'
import { AuthContext } from "../../pages/authContext";
export default function Share()
{
    // const {user}=useContext();
    // console.log(JSON.stringify(user));
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user"))
      );
    //   console.log(currentUser.user);
    const [complaint,setcomplaint]=useState('');
    const handlesSubmit = async (event)=> 
    {
        event.preventDefault();
        console.log("pressed");
        const issue=complaint;
        const _id=currentUser.user._id;
        const hostelName=currentUser.user.Hostel;
        const userName=currentUser.user.firstName+" "+currentUser.user.lastName;
            console.log(userName,hostelName,issue,_id);
             try
             {
                 await axios.post("http://localhost:9000/api/hostel/raisecomplaint",{
                     issue,_id,hostelName,userName 
                 },)        
             } 
             catch(error)
             {
                console.log(error);
             }
    }
    return ( 
        <div className="outers">
        <form onSubmit={handlesSubmit}>
    <div className="Addposts">
    <img src="logo192.png" ></img>
        <input type="text" value={complaint} onChange={(e)=>
            {
                setcomplaint(e.target.value)
            }
        }></input>
        <button onSubmit={handlesSubmit}>Complain</button>
    </div>
        </form>
    </div>)
}