import React from "react";
import { ReactDOM } from "react";
import styles from '../styles/Landingpage.css'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer,toast} from 'react-toastify'
import { useState } from "react";
import axios from "axios";
import LandingPage from "./Navbar1";
export default function Login()
{
  const [fName,setfName]=useState('');
  const [lName,setlName]=useState('');
  const [Password,setPassword]=useState('');
  const [Email,setEmail]=useState('');
  const [reg,setReg]=useState('');
   async function   handlesSubmit(event)
  {
    event.preventDefault();
    function isvalidEmail(Email)
    {  
      
      var x=fName;
      var y=reg;
      var z=x+'.'+y+'@mnnit.ac.in';
      if(z==Email)
      return 1;
    return 0;
  }
  if(!isvalidEmail(Email))
        {
 
          toast('Wrong Email address');
        }
        else
        {
        toast(toString({fName,lName,reg,Email,Password}));
        }
        try
        {
                await axios.post("http://localhost:3000",{
                  fName,lName,Email,Password,reg
                });
        }
        catch
        {
              console.log(Email);
        }

   }
  
    return (
      <>
      <LandingPage />      
      <div className="body">
      <div className="main">
      <div className="former">
    <h3>Register at MESSender Jogi</h3>
    <br />
          <form  method="post" action="/signup">
  <div className="form-group">
    <input  type="text" 
    className="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp" 
    placeholder="First Name" 
    required="on"
    value={fName}
    onChange={(e)=>setfName(e.target.value)}
    />
  </div>
  <div className="form-group">
    <input  type="text" 
    className="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp" 
    placeholder="Last Name" 
    required="on"
    value={lName}
    onChange={(e)=>setlName(e.target.value)}
    />
  </div>
  <div className="form-group">
    <input  
    type="password" 
    className="form-control" 
    id="exampleInputPassword1" 
    placeholder="Password"
    autoComplete="off"
    autoSave="off"
    required="on"
    value={Password}
    onChange={(e)=>setPassword(e.target.value)}
     />
  </div>
  <div className="form-group">
    <input  
    type="email" 
    className="form-control" 
    id="exampleInputPassword1" 
    placeholder="Enter G-Suite Id"
    autoComplete="off"
    autoSave="off"
    required="on"
    value={Email}
    onChange={(e)=>setEmail(e.target.value)}
     />
     </div>
     <div className="form-group">
    <input  
    type="text" 
    className="form-control" 
    id="exampleInputPassword1" 
    placeholder="Enter Registration Number"
    autoComplete="off"
    autoSave="off"
    required="on"
    value={reg}
    onChange={(e)=>setReg(e.target.value)}
     />
     </div>
    <button  type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
      </div>
      <ToastContainer
    autoClose={5000}
    hideProgressBar={true}
/>
  </div>
  </>
    );
}