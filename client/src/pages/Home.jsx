import React from "react"
import Posts from "../Main/Posts/Posts"
import Stories from "../Main/Stories/Stories"
import styles from '../styles/Register.css'
import Navbar from "../components/navbar/Navbar"
import Menu from "../components/menu/Menu"
import MessMenu from "../components/messMenu/MessMenu"
export default function Home({chief, setChief, menuOpen, setMenuOpen, messMenuOpen, setMessMenuOpen}) 
{
    return (
      <div id="outer">  
         <div id="inner">
         <Navbar setChief={setChief} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
         <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
         <MessMenu chief={chief} menuOpen={menuOpen} setMenuOpen={setMenuOpen} messMenuOpen={messMenuOpen} setMessMenuOpen={setMessMenuOpen}/>
         <Stories chief={chief}/>
        
         </div>
</div>
    )
};