import React, { useContext } from "react";
import { ReactDOM } from "react";
import axios from "axios";
import styles from '../styles/Landingpage.css'
import { useState } from "react";

import { Navigate,Link } from "react-router-dom";
import { AuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Menu from "../components/menu/Menu";
import MessMenu from "../components/messMenu/MessMenu";
export default function Login({chief, setChief, menuOpen, setMenuOpen, messMenuOpen, setMessMenuOpen})
{
  const {currentUser,login,loginChief}=useContext(AuthContext);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [chiefemail,setemail]=useState('');
  const [chiefpassword,setpassword]=useState('');

  const[inputs, setInputs] = useState({
    email:"",
    password:"",
  })

  const[inputsC, setInputsC] = useState({
    email:"",
    password:"",
  })

  const handleChange = (e) =>{
    setInputs((prev)=>({...prev, [e.target.name]: e.target.value}))
  };

  const handleChangeC = (e) =>{
    setInputsC((prev)=>({...prev, [e.target.name]: e.target.value}))
  };

  const navigate =useNavigate();
  const handleLogin = async (e) =>{
    e.preventDefault();
    try{
        await login(inputs);
        navigate("/Malviya");
    }catch(err){
        console.log(err);
    }
    
}
  const chiefsubmit = async (e) =>
  {
    e.preventDefault();
    try
    {
     //  await login(inputs1);
     await loginChief(inputsC);
     setChief(true);
     navigate("/chief/Malviya");
    }
   catch (err) 
   {
     console.log(err);
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
    <h3>Student</h3>
    <br />
          <form  onSubmit={handleLogin}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input name="email" onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input name="password" onChange={handleChange} 
    type="password" 
    className="form-control" 
    id="exampleInputPassword1" 
    placeholder="Password"
    autoComplete="off"
    autoSave="off"
     />
  </div>
  <div className="form-check">
    </div>
    <button  type="submit" className="btn btn-primary" onClick={handleLogin}>Submit</button>
  </form>
  </div>
  <div className="former">
  <h3>Management</h3>
  <br></br>
  <form onSubmit={chiefsubmit} >
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input name="email" onChange={handleChangeC} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input name="password" onChange={handleChangeC} 
    type="password" 
    className="form-control" 
    id="exampleInputPassword1" 
    placeholder="Password"
    autoComplete="off"
    autoSave="off"
     />
  </div>
  <div className="form-check">
    </div>
    <button   className="btn btn-primary">Submit</button>
  </form>
  </div>
      </div>
      <div id="gSignInWrapper">
      <br></br>
      <br></br>
    {/* <span className="label">Sign in with </span> */}
    <div id="customBtn" className="customGPlusSignIn">
      <span className="icon">Signinwith </span>
      <img src="./images/google.jpeg" className="googlelogo"/>
      <span className="buttonText"></span>
    </div>
  </div>
        </div>
     </>
    );
}