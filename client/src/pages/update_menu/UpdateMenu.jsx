import Dropdown from "../../components/dropdown/Dropdown"
import Menu from "../../components/menu/Menu"
import MessMenu from "../../components/messMenu/MessMenu"
import Navbar from "../../components/navbar/Navbar"
import "./updatemenu.scss"
import { useEffect, useState } from "react";


const UpdateMenu = ({menuOpen, setMenuOpen, messMenuOpen, setMessMenuOpen}) => {

  const [addedItems, setAddedItems] = useState([]);
  const [day, setDay] = useState(0);
  const [meal, setMeal] = useState(0);
  const [curItem, setCurItem] = useState("");
  //updated menu
  const [updatedMenu, setUpdatedMenu] = useState({
    breakfast: [],
    lunch: [],
    eveningSnacks: [],
    dinner: []
  })

  useEffect(()=>{
    setAddedItems([]);
  }, [meal]);

  useEffect(() => {
    setAddedItems([]);
    setUpdatedMenu({
      breakfast: [],
      lunch: [],
      eveningSnacks: [],
      dinner: []
    });
  }, [day]);

  const days = 
    [
      {
        id: 1,
        placeholder: "Monday",
        value: 0
      },
      {
        id: 2,
        placeholder: "Tuesday",
        value: 1
      },
      {
        id: 3,
        placeholder: "Wednesday",
        value: 2
      },
      {
        id: 4,
        placeholder: "Thursday",
        value: 3
      },
      {
        id: 5,
        placeholder: "Friday",
        value: 4
      },
      {
        id: 6,
        placeholder: "Saturday",
        value: 5
      },
      {
        id: 7,
        placeholder: "Sunday",
        value: 6
      }
      
    ]

    const meals = [
      {
          id : 1,
          placeholder: "Breakfast",
          value: 0    
      },
      {
        id : 1,
        placeholder: "Lunch",
        value: 1   
      },
      {
        id : 1,
        placeholder: "Evening Snacks",
        value: 2  
      },
      {
        id : 1,
        placeholder: "Dinner",
        value: 3  
      }
    ]

  const handleClick = () => {
    if(curItem !== ""){
      setAddedItems(addedItems => [...addedItems, curItem]);
    }
    
  }

  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
      <MessMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
    <div className="updatemenu">
    <form>
        <div className="day-select">
            <span>Day</span>
            <Dropdown selected={day} setSelected={setDay} options={days}/>
        </div>
        <div className="meal-select">
            <span>Meal</span>
            <Dropdown selected={meal} setSelected={setMeal} options={meals}/>
        </div>
        <div className="items">
           <div className="selected-items">
              {addedItems.map((item) => (
                <span>{item}</span>
              ))}
           </div>
           <div className="add-items">
              <input type="text" placeholder="Add new item..." value={curItem}
    onChange={(e)=>setCurItem(e.target.value)}/>
              <button onClick={handleClick}>Add Item</button>
           </div>
        </div>
        <button className="update-btn" >Update</button>
        </form>
    </div>
    </div>
  )
}

export default UpdateMenu