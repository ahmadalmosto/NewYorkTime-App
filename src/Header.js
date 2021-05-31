import React from 'react'
import './Header.css'
import Nyt from './image/Nyt.png'
// import { elastic as Menu } from 'react-burger-menu'
// import {Link} from 'react-router-dom'
function Header() {
    // const showSettings = (event) => {
    //     event.preventDefault();

    // }
    return (
        <div className="head" >
            <img  src={Nyt} className="image" alt="headerImage"/>
            
            {/* <Link to="/book">
            <p>Best Book</p> 
            </Link> */}
{/* 
            <Menu>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item">About</a>
                <a id="contact" className="menu-item">Contact</a>
                <a onClick={() => showSettings} className="menu-item--small" href="">Settings</a>
            </Menu> */}

        </div>
    )
}
export default Header