import Landingpage from './pages/Navbar1'
import Signin  from './pages/Login';
import Signup from './pages/Register';
import Home from './pages/Home';
import styles from './styles/Register.css'
import { BrowserRouter,Outlet,Route ,Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Children } from 'react';
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
     <BrowserRouter >
      <Routes>
         <Route path='/' 
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
  );
}
export default App;
