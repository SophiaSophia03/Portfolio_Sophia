import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
    <span className='logo'>Sophia</span>
    <ul className='nav-menu'>
      <li><a href='#home'>Home</a></li>
      <li><a href='#about'>About Me</a></li>
      <li><a href='#skills'>Skills</a></li>
      <li><a href='#home'>Projects</a></li>
      <li><a href='#home'>Cerificates</a></li>
    </ul>
    <button className='nav-connect'>Connect With me</button>
    </div>
  )
}

export default Navbar