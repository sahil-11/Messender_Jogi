import { useState } from 'react';
import './menu.scss';

export default function Menu({menuOpen, setMenuOpen, messMenuOpen, setMessMenuOpen}){
    const handleClick = () => {
        setMenuOpen(false);
        setMessMenuOpen(true);
    }

    const [hostels, setHostels] = useState(false);

  return (
    <div className={'menu ' + (menuOpen && 'active')}>
        <ul className="menu-items">
            <li onClick={()=>setHostels(!hostels)}>
                <a href="#intro">Hostels</a>
                {hostels && <ul>
                    <li onClick={()=>setMenuOpen(false)}>
                        <a href="/Tandon">Tandon</a>
                    </li>
                    <li onClick={()=>setMenuOpen(false)}>
                        <a href="/Malviya">Malviya</a>
                    </li>
                    <li onClick={()=>setMenuOpen(false)}>
                        <a href="/Tilak">Tilak</a>
                    </li>
                
                </ul>}
            </li>
            <li onClick={() => handleClick()}>
                <a href="#portfolio">Menu</a>
            </li>
           
        </ul>
    </div>
  )
}
