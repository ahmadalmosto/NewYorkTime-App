import React from 'react'
// import {Link} from 'react-router-dom'
import Search from './Search'
import Books from './Books'
import ArticlesData from './ArticlesData'
import './Nav.css'
export default function Nav() {
    return (
        <>
         <Search />
         {/* <div className="sectionTitle">
            <h4>Best Books</h4>
            <h4>Most Readed Articles</h4>
            </div> */}
        <div className="bigCon">
        <div className="left">
          
        <ArticlesData />
        </div>
        <div className="right">
         
            
        <Books />
        </div>
       
   
          </div> 
         
            
         </> 
    )
}
