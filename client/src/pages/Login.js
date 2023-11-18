import React from "react";
import { ReactDOM } from "react";
import styles from '../styles/Landingpage.css'
import { useState } from "react";
import LandingPage from "./Navbar1";
export default function Login()
{
  const [Email,setEmail]=useState('');
  const [Password,setPassword]=useState('');
  const handlesSubmit= (e) =>
  {
e.preventDefault();
console.log(Email);
  };
    return (
      <>
      <LandingPage />
      <div className="body">
      <div className="main">
      <div className="former">
    <h3>Student</h3>
    <br />
          <form method= "/post" action="/signin" onSubmit={handlesSubmit}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input value={Email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input value={Password} onChange={(e)=>setPassword(e.target.value)} 
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
    <button  type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
  <div className="former">
  <h3>Management</h3>
  <br></br>
  <form onSubmit={handlesSubmit} action="/chief/signin">
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input value={Email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input value={Password} onChange={(e)=>setPassword(e.target.value)} 
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
    <button  type="submit" className="btn btn-primary">Submit</button>
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