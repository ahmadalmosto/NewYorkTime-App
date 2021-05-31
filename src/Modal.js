import React from 'react'
import './Modal.css'
export default function Modal({children , open,}) {
  
  console.log(open)
    if(!open) return null
    return (
        <div className="overlay">
        <div className="popup">
        {children}
        </div>
        </div>
    )
} 
 