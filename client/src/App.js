import Landingpage from './pages/Navbar1'
import Signin  from './pages/Login';
import Signup from './pages/Register';
import Home from './pages/Home';
import styles from './styles/Register.css'
import { BrowserRouter,Outlet,Route ,Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { AuthContext, AuthContextProvider } from './pages/authContext';
import { Children, useContext } from 'react';
function App() 
{
   
   const {currentUser} = useContext(AuthContext);

   const isloggedin = currentUser !== null;
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
            <Home />
         </Protectedroutes>}
         ></Route>
         <Route exact path='/' 
         element={
         <Protectedroutes>
            <Home />
         </Protectedroutes>}
         ></Route>
         <Route exact path='/Tandon' 
         element={
         <Protectedroutes>
            <Home />
         </Protectedroutes>}
         ></Route>
         <Route exact path='/Tilak' 
         element={
         <Protectedroutes>
            <Home />
         </Protectedroutes>}
         ></Route>
      </Routes>
      <Routes>
          <Route path="/signin" element={<Signin />}></Route>
      </Routes>
   
      <Routes>
         <Route path="/signup" element={<Signup />}>
         </Route>
      </Routes>
     </BrowserRouter>
     
  );
}
export default App;
