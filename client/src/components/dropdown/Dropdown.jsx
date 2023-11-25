import { useState } from "react"
import "./dropdown.scss"

const Dropdown = ({use, selected, setSelected, options, setAddedItems, setUpdatedMenu}) => {

    const [active, setActive] = useState(false);
    const [display, setDisplay] = useState("Select");
    

  return (
    <div className="dropdown">
        <div className="dropdown-btn" onClick={()=>setActive(!active)}>{display}</div>
        {active && (<div className="dropdown-content">
                        {options.map((option) => (
                            <div className="dropdown-item" onClick={(e) => 
                                {
                                    setSelected(option.value);
                                    setActive(false);
                                    setDisplay(option.placeholder);
                                    setAddedItems([]);
                                    if(use){
                                        setUpdatedMenu({
                                        breakfast: [],
                                        lunch: [],
                                        eveningSnacks: [],
                                        dinner: []
                                    });
                                    }
                                    
                                }
                            }>
                                {option.placeholder}
                            </div>
                        ))}
                        
                        
                    </div>)}
    </div>
  )
}

export default Dropdown