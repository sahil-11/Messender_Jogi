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
   
   const isloggedin =1;
  const Protectedroutes =({children})=>{
   if(!isloggedin)
   {
      return <Navigate to="/signin" />
   }
   return children
  }
  return (
   <AuthContextProvider >
     <BrowserRouter >
      <Routes>
         <Route exact path='/' 
         element={
         <Protectedroutes>
            <Home />
         </Protectedroutes>}
         ></Route>
      </Routes>
      <Routes>
          <Route path="/signup" element={<Signin />}></Route>
      </Routes>
   
      <Routes>
         <Route path="/Signin" element={<Signup />}>
         </Route>
      </Routes>
     </BrowserRouter>
     </AuthContextProvider>
  );
}
export default App;
