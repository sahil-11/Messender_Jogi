import Menu from "./components/menu/Menu";
import Signin  from './pages/Login';
import Signup from './pages/Register';
import Home from './pages/Home';
// import styles from './styles/Register.css'
import { BrowserRouter,Outlet,Route ,Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { AuthContext, AuthContextProvider } from './pages/authContext';
import { Children, useContext } from 'react';
import Warden from "./pages/warden/Warden";
import { useState } from "react";
import UpdateMenu from "./pages/update_menu/UpdateMenu";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() 
{ 

  const [menuOpen, setMenuOpen] = useState(false);
  const [messMenuOpen, setMessMenuOpen] = useState(false);
   
  const [chief, setChief] = useState(false);

   const {currentUser} = useContext(AuthContext);

   const isloggedin = (currentUser !== null);
   console.log(isloggedin);
  const Protectedroutes =({children})=>{
   if(!isloggedin)
   {
      return <Navigate to="/signin" />
   }
  
   return children
  }
  return (
   
     <BrowserRouter >
      <Routes>
         <Route exact path='/Malviya' 
         element={
         <Protectedroutes>
            <Home chief = {chief} setChief={setChief} setMenuOpen={setMenuOpen} menuOpen={menuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
         </Protectedroutes>}
         ></Route>
         <Route exact path='/' 
         element={
         <Protectedroutes>
            <Home chief = {chief} setChief={setChief} setMenuOpen={setMenuOpen} menuOpen={menuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
         </Protectedroutes>}
         ></Route>
         <Route exact path='/Tandon' 
         element={
         <Protectedroutes>
            <Home chief = {chief} setChief={setChief} setMenuOpen={setMenuOpen} menuOpen={menuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
         </Protectedroutes>}
         ></Route>
         <Route exact path='/Tilak' 
         element={
         <Protectedroutes>
            <Home chief = {chief} setChief={setChief} setMenuOpen={setMenuOpen} menuOpen={menuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
         </Protectedroutes>}
         ></Route>
      </Routes>
      <Routes>
          <Route path="/signin" element={<Signin chief = {chief} setChief={setChief} setMenuOpen={setMenuOpen} menuOpen={menuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>}></Route>
      </Routes>
      <Routes>
      <Route exact path='/chief/Malviya'
         element={
         <Protectedroutes>
            <Home chief = {chief} setChief={setChief} setMenuOpen={setMenuOpen} menuOpen={menuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
         </Protectedroutes>}
         ></Route>
         <Route exact path='/chief' 
         element={
         <Protectedroutes>
            <Home chief = {chief} setChief={setChief} setMenuOpen={setMenuOpen} menuOpen={menuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
         </Protectedroutes>}
         ></Route>
         <Route exact path='/chief/Tandon' 
         element={
         <Protectedroutes>
            <Home chief = {chief} setChief={setChief} setMenuOpen={setMenuOpen} menuOpen={menuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
         </Protectedroutes>}
         ></Route>
         <Route exact path='/chief/Tilak' 
         element={
         <Protectedroutes>
            <Home chief = {chief} setChief={setChief} setMenuOpen={setMenuOpen} menuOpen={menuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
         </Protectedroutes>}
         ></Route>
      </Routes>
      <Routes>
         <Route path="/update/Malviya" element={<UpdateMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>}>
         </Route>
         <Route path="/update/Tandon" element={<UpdateMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>}>
         </Route>
         <Route path="/update/Tilak" element={<UpdateMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>}>
         </Route>
      </Routes>
      <Routes>
         <Route path="/signup" element={<Signup setMenuOpen={setMenuOpen} menuOpen={menuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>}>
         </Route>
      </Routes>
     </BrowserRouter>
     
  );
}
export default App;
