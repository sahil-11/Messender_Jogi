import React, { useContext } from "react";
import { ReactDOM } from "react";
import axios from "axios";
import styles from '../styles/Landingpage.css'
import { useState } from "react";
import LandingPage from "./Navbar1";
import { Navigate,Link } from "react-router-dom";
import { AuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";
export default function Login()
{
  const {currentUser,login}=useContext(AuthContext);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [chiefemail,setemail]=useState('');
  const [chiefpassword,setpassword]=useState('');

  const[inputs, setInputs] = useState({
    email:"",
    password:"",
  })

  const handleChange = (e) =>{
    setInputs((prev)=>({...prev, [e.target.name]: e.target.value}))
  };

  const inputs2={chiefemail,chiefpassword};
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
     await axios.post("http://localhost:9000/api/chief/signin",{
       email,password,
     });
     navigate("/");
    }
   catch (error) 
   {
     console.log(error.response.data);
    }
  }
    return (
      <>
      <LandingPage />
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
    <input value={chiefemail} onChange={(e)=>setemail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input value={chiefpassword} onChange={(e)=>setpassword(e.target.value)} 
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