import './menu.scss';

export default function Menu({menuOpen, setMenuOpen, messMenuOpen, setMessMenuOpen}){
    const handleClick = () => {
        setMenuOpen(false);
        setMessMenuOpen(true);
    }
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Hostels</a>
                <ul>
                    <li onClick={()=>setMenuOpen(false)}>
                        <a href="#intro">Tandon</a>
                    </li>
                    <li onClick={()=>setMenuOpen(false)}>
                        <a href="#portfolio">Malviya</a>
                    </li>
                    <li onClick={()=>setMenuOpen(false)}>
                        <a href="#portfolio">Tilak</a>
                    </li>
                
                </ul>
            </li>
            <li onClick={() => handleClick()}>
                <a href="#portfolio">Menu</a>
            </li>
           
        </ul>
    </div>
  )
}
