import React, { useState } from 'react'
import "./Navbar.css"
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
  const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
    <span className='logo'>Sophia</span>
    <ul className='nav-menu'>
      <li><AnchorLink className= "anchor-link" offset={50} href= "#home"><p>Home</p></AnchorLink></li>
      <li><AnchorLink className= "anchor-link" offset={50} href= "#about"><p>About Me</p></AnchorLink></li>
      <li><AnchorLink className= "anchor-link" offset={50} href= "#skills"><p>Skills</p></AnchorLink></li>
      <li><AnchorLink className= "anchor-link" offset={50} href= "#projects"><p>Projects</p></AnchorLink></li>
      <li><AnchorLink className= "anchor-link" offset={50} href="#certificates"><p>Cerificates</p></AnchorLink></li>
    </ul>
    <AnchorLink className= "anchor-link" offset={50} href="#connect">
    <button className='nav-connect'>Connect With me</button></AnchorLink>
    </div>
  )
}

export default Navbar