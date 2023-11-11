
import Landingpage from './Navbar'
import Login  from './Login';
import Register from './Register';

import { BrowserRouter,Route ,Routes } from 'react-router-dom';
function App() {
  return (
     <BrowserRouter >
      <Landingpage />
      <Routes>
          <Route path="/" element={<Login />}></Route>
      </Routes>
      <Routes>
         <Route path="/Register" element={<Register />}>

         </Route>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
