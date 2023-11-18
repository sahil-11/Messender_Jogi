import Dropdown from "../../components/dropdown/Dropdown"
import Menu from "../../components/menu/Menu"
import MessMenu from "../../components/messMenu/MessMenu"
import Navbar from "../../components/navbar/Navbar"
import "./updatemenu.scss"


const UpdateMenu = ({menuOpen, setMenuOpen, messMenuOpen, setMessMenuOpen}) => {
  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
      <MessMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
    <div className="updatemenu">
        <div className="day-select">
            <span>Day</span>
            <Dropdown/>
        </div>
        <div className="meal-select">
            <span>Meal</span>
            <Dropdown/>
        </div>
        <div className="items">
           <div className="selected-items">

           </div>
           <div className="add-items">
              <input type="text" placeholder="Add new item..."/>
              <button>Add Item</button>
           </div>
        </div>
        <button className="update-btn">Update</button>
    </div>
    </div>
  )
}

export default UpdateMenu