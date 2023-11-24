import Stories from "../../Main/Stories/Stories"
import Menu from "../../components/menu/Menu"
import MessMenu from "../../components/messMenu/MessMenu"
import Navbar from "../../components/navbar/Navbar"
import "./warden.scss"

const Warden = ({chief, menuOpen, setMenuOpen, messMenuOpen, setMessMenuOpen}) => {
  return (
    <div classname="warden">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
      <MessMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
      <Stories chief={chief}/>
    </div>
  )
}

export default Warden