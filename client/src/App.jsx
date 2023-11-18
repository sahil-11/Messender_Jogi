import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Warden from "./pages/warden/Warden";
import MessMenu from "./components/messMenu/MessMenu";
import { useState } from "react";
import UpdateMenu from "./pages/update_menu/UpdateMenu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messMenuOpen, setMessMenuOpen] = useState(false);
  return
        (
          <Router>
            <Routes>
              <Route exact path="/warden" element={<Warden setMenuOpen={setMenuOpen} menuOpen={menuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>}/>
              <Route path="/menu/update" element={<UpdateMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>}/>
            </Routes>
          </Router>
        )
}

export default App;
