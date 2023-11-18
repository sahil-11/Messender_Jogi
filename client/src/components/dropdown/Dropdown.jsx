import { useState } from "react"
import "./dropdown.scss"

const Dropdown = ({selected, setSelected}) => {

    const [active, setActive] = useState(false);

    const options = ["a", "b", "c"];

  return (
    <div className="dropdown">
        <div className="dropdown-btn" onClick={()=>setActive(!active)}>Select</div>
        {active && (<div className="dropdown-content">
                        {options.map((option) => (
                            <div className="dropdown-item" onClick={(e) => 
                                {
                                    setSelected(option);
                                    setActive(false);
                                }
                            }>
                                {option}
                            </div>
                        ))}
                        
                        
                    </div>)}
    </div>
  )
}

export default Dropdown