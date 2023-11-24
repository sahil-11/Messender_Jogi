import React from "react";
import { ReactDOM } from "react";

import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer,toast} from 'react-toastify'
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar/Navbar";
import Menu from "../components/menu/Menu";
import MessMenu from "../components/messMenu/MessMenu";

export default function Login({menuOpen, setMenuOpen, messMenuOpen, setMessMenuOpen})
{
  const [firstName,setfName]=useState('');
  const [lastName,setlName]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  const [RegistrationNumber,setReg]=useState('');
  const [err,setErr]=useState(false);
   async function handlesSubmit(event)
  {
    event.preventDefault();
    function isvalidEmail(Email)
    {  
      
      var x=firstName;
      var y=RegistrationNumber;
      var z=x+'.'+y+'@mnnit.ac.in';
      if(z==email)
      return 1;
    return 0;
  }
  if(!isvalidEmail(email))
        {
          toast('Wrong Email address');
        }
        else
        {
        try
        {
                await axios.post("http://localhost:9000/api/signup",{
                  RegistrationNumber,firstName,lastName,email,password,
                });
                
        }
        catch (err)
        {
            setErr(true);
            toast(err.response.data.error);
        }
      }
   }
  
    return (
      <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
      <MessMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>      
      <div className="body">
      <div className="main">
      <div className="former">
    <h3>Register at messenderJogi</h3>
    <br />
          <form>
  <div className="form-group">
    <input  type="text" 
    className="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp" 
    placeholder="First Name" 
    required="on"
    value={firstName}
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
    value={lastName}
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
    value={password}
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
    value={email}
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
    value={RegistrationNumber}
    onChange={(e)=>setReg(e.target.value)}
     />
     </div>
    <button className="btn btn-primary" onClick={handlesSubmit}>Submit</button>
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