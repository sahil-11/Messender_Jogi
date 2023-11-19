import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Warden from "./pages/warden/Warden";
import MessMenu from "./components/messMenu/MessMenu";
import { useState } from "react";
import UpdateMenu from "./pages/update_menu/UpdateMenu";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [messMenuOpen, setMessMenuOpen] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/warden",
      element: <Warden setMenuOpen={setMenuOpen} menuOpen={menuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>,
    },
    {
      path: "/update",
      element: <UpdateMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>,
    },
  ]);

  
  return (
          <div className="App">
            <RouterProvider router={router} />
          </div>
        );
}

export default App;
