import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Warden from "./pages/warden/Warden";
import MessMenu from "./components/messMenu/MessMenu";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messMenuOpen, setMessMenuOpen] = useState(false);
  return <div>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
            <MessMenu messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
        </div>;
}

export default App;
