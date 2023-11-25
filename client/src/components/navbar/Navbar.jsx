import "./navbar.scss"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { AuthContext } from "../../pages/authContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({setChief, menuOpen, setMenuOpen}) => {
    const {currentUser}=useContext(AuthContext);
    const id = location.pathname.split("/")[1];
    console.log(id);
    const navigate = useNavigate();
  return (
    <div className={"navbar " + (menuOpen && 'active')}>
        <div className="left">
            <div className='hamburger' onClick={(e)=>{
                e.preventDefault();
                setMenuOpen(!menuOpen)
            }}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
            </div>
        </div>
        <div className="center">
            <span>messenderJogi</span>
        </div>
        <div className="right">
            <div className="user">
                <AccountCircleOutlinedIcon/>
                {currentUser && <span onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/signin");
                    setChief(false);
                }}>Log Out</span>}
                {(id==="signin") && <span onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/signup");
                    
                }}>Register</span>}
                {(id==="signup") && <span onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/signin");
                    
                }}>Login</span>}
                
                

            </div>
        </div>
    </div>
  )
}

export default Navbar