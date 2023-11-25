import Dropdown from "../../components/dropdown/Dropdown"
import Menu from "../../components/menu/Menu"
import MessMenu from "../../components/messMenu/MessMenu"
import Navbar from "../../components/navbar/Navbar"
import "./updatemenu.scss"
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../authContext"
import axios from "axios"

const UpdateMenu = ({menuOpen, setMenuOpen, messMenuOpen, setMessMenuOpen}) => {
  const id = location.pathname.split("/")[2];
  const {updateM} = useContext(AuthContext);
  const [addedItems, setAddedItems] = useState([]);
  const [day, setDay] = useState(0);
  const [meal, setMeal] = useState("breakfast");
  const [curItem, setCurItem] = useState("");
  //updated menu
  const [updatedMenu, setUpdatedMenu] = useState({
    breakfast: [],
    lunch: [],
    eveningSnacks: [],
    dinner: []
  })

  // useEffect(()=>{
  //   setAddedItems([]);
  // }, [meal]);

  // useEffect(() => {
  //   setAddedItems([]);
    // setUpdatedMenu({
    //   breakfast: [],
    //   lunch: [],
    //   eveningSnacks: [],
    //   dinner: []
    // });
  // }, [day]);

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
          value: "breakfast"   
      },
      {
        id : 1,
        placeholder: "Lunch",
        value: "lunch"
      },
      {
        id : 1,
        placeholder: "Evening Snacks",
        value: "eveningSnacks" 
      },
      {
        id : 1,
        placeholder: "Dinner",
        value: "dinner"
      }
    ]

  const handleClick = (e) => {
    e.preventDefault();
    if(curItem !== ""){
      setAddedItems(addedItems => [...addedItems, curItem]);
    }
    
  }

  const handleMealUpdate = (e) => {
    e.preventDefault();
    console.log(meal);
    console.log(addedItems);
    setUpdatedMenu((prev) => ({...prev, [meal] : addedItems}));
    console.log(updatedMenu);
  }

  const handleMenuUpdate = async (e) => {
    e.preventDefault();
    try{
      
      const res = await axios.put("http://localhost:9000/api/updatemenu/" + id + "?day=" + day, updatedMenu, {
        withCredentials: true
      });

      console.log(res);
    }catch(err){
      console.log(err);
    }

  }

  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
      {/* <MessMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/> */}
    <div className="updatemenu">
    <form>
        <div className="day-select">
            <span>Day</span>
            <Dropdown use={true} setAddedItems={setAddedItems} setUpdatedMenu={setUpdatedMenu} selected={day} setSelected={setDay} options={days}/>
        </div>
        <div className="meal-select">
            <span>Meal</span>
            <Dropdown use={false} setAddedItems={setAddedItems} setUpdatedMenu={setUpdatedMenu} selected={meal} setSelected={setMeal} options={meals}/>
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
        <button onClick={handleMealUpdate} className="update-btn" >Update Meal</button>
        <button onClick={handleMenuUpdate} className="update-btn" >Update Menu</button>
        </form>
    </div>
    </div>
  )
}

export default UpdateMenu