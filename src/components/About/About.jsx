import React from 'react'
import "./About.css"
import aboutImg from "../../assets/aboutImg.png"

function About() {
  return (
    <div className='about' id='about'>
    <div className='about-title'>
      <h1>About Me</h1>
    </div>
    <div className='about-sec icons shadow'>
    <div className='about-content'>
      <p>I'm a passionate web developer with a strong foundation in computer science and web technologies. With experience in building full-stack applications and creating dynamic, user-friendly websites, I specialize in tools like React, Node.js, and Tailwind CSS. My education has equipped me with both the technical and problem-solving skills to bring ideas to life, and I’m always eager to collaborate on innovative projects. Let’s connect and build something amazing together!</p>
    </div>
    </div>
    </div>
  )
}

export default About