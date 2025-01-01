import React from 'react'
import "./Home.css"
import HomeImg from "../../assets/HomeImg.jpeg"


function Home() {
  return (
    <div className='home'>

    <img src={HomeImg} className='home-img'></img>
    <h1 className='home-h1'>Hello.. I'm Sophia, <br /><span className='h1-span'>A full Stack Web developer</span></h1>
    <p className='home-p'>I’m a passionate web developer with a strong foundation in full-stack development, and I’m always excited about creating web applications that deliver meaningful user experiences.</p>
    <div className='hero-action'>
    <a href='https://www.linkedin.com/in/sophiasophia/'>
      <div className='hero-linkedIn btn'>
      <i class="fa-brands fa-linkedin"></i>
      <span>LinkedIn</span></div>
      </a>
      <a href='https://drive.google.com/file/d/1dSXP3t6ypkuIlvZaomUy_sXnbEn-8G8V/view?usp=sharing'>
      <div className='hero-resume btn'>
      <i class="fa-solid fa-file"></i>
      <span>Resume</span></div>
      </a>
      <a href='https://github.com/SophiaSophia03'>
      <div className='hero-Github btn'>
      <i class="fa-brands fa-github"></i>
      <span>Github</span></div>
      </a>
    </div>

    </div>
  )
}

export default Home