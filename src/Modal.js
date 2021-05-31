import React from 'react'
import './Style/Modal.css'
export default function Modal({ children, open }) {
  if (!open) return null
  return (
    <div className="overlay">
      <div className="popup">
        {children}
      </div>
    </div>
  )
}
