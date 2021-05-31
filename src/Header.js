import React from 'react'
import './Style/Header.css'
import Nyt from './image/Nyt.png'
function Header() {
    return (
        <div className="head" >
            <img src={Nyt} className="image" alt="headerImage" />

        </div>
    )
}
export default Header