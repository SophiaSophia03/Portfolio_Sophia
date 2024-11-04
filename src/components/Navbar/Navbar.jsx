import React, { useRef, useState } from 'react'
import "./Navbar.css"
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
    <span className='logo'><a href='#home'>Sophia</a></span>
    <i class="fa-solid fa-bars menu-open" onClick={openMenu}></i>
    <ul ref={menuRef} className='nav-menu'>
    <i class="fa-solid fa-xmark menu-close" onClick={closeMenu}></i>
      <li><AnchorLink className= "anchor-link" offset={50} href= "#home"><p>Home</p></AnchorLink></li>
      <li><AnchorLink className= "anchor-link" offset={50} href= "#about"><p>About Me</p></AnchorLink></li>
      <li><AnchorLink className= "anchor-link" offset={50} href= "#skills"><p>Skills</p></AnchorLink></li>
      <li><AnchorLink className= "anchor-link" offset={50} href= "#projects"><p>Projects</p></AnchorLink></li>
      <li><AnchorLink className= "anchor-link" offset={50} href="#certificates"><p>Cerificates</p></AnchorLink></li>
      <li><AnchorLink className= "anchor-link" offset={50} href="#connect"><p>Contact</p></AnchorLink></li>
    </ul>
    <AnchorLink className= "anchor-link" offset={50} href="#connect">
    <button className='nav-connect'>Connect With me</button></AnchorLink>
    </div>
  )
}

export default Navbar