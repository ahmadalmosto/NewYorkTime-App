import React from 'react'
// import MadeBy from "./MadeBy"
import {Link, BrowserRouter as Router, } from "react-router-dom"
import './Footer.css'
import Nyt from './image/Nyt3.jpeg'
 function Footer(){
     return(
      
        <div className="footer">
   <div className="footer">
             <img  src={Nyt} className="footerimage"/>
            
         </div>



  {/* <ul className="footerUl">
    <li className="footerLi">
<Router> 
    <Link to="/made">
    Made By
    </Link>
</Router>
    </li>
 
    <li className="footerLi">
      <p>👋</p>
    </li>
  </ul> */}
</div>
        
     )
 }
 export default Footer