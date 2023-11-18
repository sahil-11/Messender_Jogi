import "./navbar.scss"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const Navbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"navbar " + (menuOpen && 'active')}>
        <div className="left">
            <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
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
                <span>Name</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar