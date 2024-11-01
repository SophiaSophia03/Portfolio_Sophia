import React from 'react'
import "./Home.css"
import HomeImg from "../../assets/HomeImg.jpeg"

function Home() {
  return (
    <div className='home'>
    <div className='content'>
      <h1>Hello.. I'm Sophia, <br /><span>A full Stack Web developer</span> </h1>
      <p className='content-para'>I’m a passionate web developer with a strong foundation in full-stack development, and I’m always excited about creating web applications that deliver meaningful user experiences. </p>
      <div className='links'>
        <div className='linkedIn btn'>
          <i class="fa-brands fa-linkedin"></i>
          <span>LinkedIn</span>
        </div>
        <div className='GitHub btn'>
          <i class="fa-brands fa-github"></i>
          <span>GitHub</span>
        </div>
        <div className='Resume btn'>
          <i class="fa-solid fa-file"></i>
          <span>Resume</span>
        </div>
      </div>
      </div>
      <div className='image'>
        <img src={HomeImg} alt="Sophia's Picture" className='home-img'></img>
      </div>
      <div className='up'><b><a href='#home'>^</a></b></div>
    </div>
  )
}

export default Home