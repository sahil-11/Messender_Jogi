import React from "react";
import { ReactDOM } from "react";
import styles from './styles/Landingpage.css'
import { Button } from "bootstrap";
export default function LandingPage()
{
    return (
        <header>
            <img className="logo" src="./images/brandlog.jpeg" alt="logo" href="/Home"></img>
            <nav>
                <ul className="nav_links">
                    <li><a href="/Aboutus">About Us</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Register">Student</a></li>
                </ul>
            </nav>
        </header>
       
    );
}