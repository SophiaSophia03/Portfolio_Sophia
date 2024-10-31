import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
    <h1 className='logo'>Sophia</h1>
    <ul className='nav-menu'>
      <li>Home</li>
      <li>About Me</li>
      <li>Skills</li>
      <li>Projects</li>
      <li>Cerificates</li>
    </ul>
    <button className='nav-connect'>Connect With me</button>
    </div>
  )
}

export default Navbar