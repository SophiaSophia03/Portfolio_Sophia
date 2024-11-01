import React from 'react'
import "./About.css"
import aboutImg from "../../assets/aboutImg.png"

function About() {
  return (
    <div className='about' id='about'>
    <div className='about-title'>
      <h1>About Me</h1>
    </div>
    <div className='about-sec'>
    <img src={aboutImg} className='about-img'></img>
    <div className='about-content'>
      <p>Hi, I’m Sophia! I’m a passionate web developer with a strong foundation in full-stack development, and I’m always excited about creating web applications that deliver meaningful user experiences. My journey began with a deep curiosity for technology, leading me to work on projects that combine creativity and functionality. I enjoy building things from the ground up, optimizing code, and diving into new tech stacks.</p>

<p>Currently, I’m working on a project called StayNest, inspired by Airbnb, which showcases my skills in crafting user-friendly, dynamic web apps. I’m experienced with both front-end and back-end technologies, including React, Node.js, Express, and MongoDB. My recent projects include a MERN stack application built during my internship, a WeatherApp, and StayNest, which integrates Mapbox and features full CRUD capabilities, validations, and a secure user authentication system.</p>

<p>When I’m not coding, you might find me exploring new UI/UX trends, experimenting with design in Tailwind CSS, or collaborating on exciting ideas with fellow developers. Let’s connect and make something great together!</p>
    </div>
    </div>
    </div>
  )
}

export default About