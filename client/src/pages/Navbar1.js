import React from "react";
import { ReactDOM } from "react";
import styles from '../styles/Landingpage.css'
import { Button } from "bootstrap";
export default function LandingPage()
{
    return (
        <header>
            <img className="logo" src="./images/brandlog.jpeg" alt="logo" href="/"></img>
            <nav>
                <ul className="nav_links">
                    <li><a href="/signup">Signin</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/signin">Signup</a></li>
                </ul>
            </nav>
        </header>
       
    );
}