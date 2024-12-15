import React from 'react'
import "./Project.css"
import bookifyVideo from "../../assets/projects/Bookify.mp4"
import staynestImg from "../../assets/projects/staynest.png"
import weatherAppImg from "../../assets/projects/WeatherApp.png"
import nodeImg from '../../assets/icons/Node.png';
import expressImg from '../../assets/icons/Express.png';
import bootstrapImg from '../../assets/icons/Bootstrap.png';
import htmlImg from '../../assets/icons/HTML5.png';
import jsImg from '../../assets/icons/JavaScript.png';
import mongoImg from '../../assets/icons/MongoDB.png';
import npmImg from '../../assets/icons/NPM.png';
import vitejsImg from '../../assets/icons/Vitejs.png';
import materialUIImg from '../../assets/icons/MaterialUI.png';
import reactImg from '../../assets/icons/React.png';
import cssImg from '../../assets/icons/CSS3.png';
import reduxImg from '../../assets/icons/Redux.png';
import tailwindImg from '../../assets/icons/Tailwind.png';



function Project() {
  return (
    <div className='projects' id='projects'>

      <div className='project-title'>
        <h1>My Projects</h1>
      </div>
      <div className='project-content'>

      <div className='projects-container'>
      <video width="100%" controls>
      <source src={bookifyVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      <div className='desc'>
        <h2>Bookify</h2>
        <br></br>
        <h3>Using: <img src={htmlImg}></img>
          <img src={jsImg}></img>
          <img src={tailwindImg}></img>
          <img src={mongoImg}></img>
          <img src={expressImg} style={{backgroundColor: "white"}}></img>
          <img src={reactImg}></img>
          <img src={nodeImg}></img>
          <img src={reduxImg}></img>
          </h3>
          <p className='project-para'>Bookify is a feature-rich online bookstore offering a seamless user experience. It includes essential functionalities like secure user authentication, an intuitive admin dashboard for managing inventory, and dynamic book listings. The platform features responsive design, smooth input validations, and clear success/error messages, making it a reliable and user-friendly application for book enthusiasts.

</p>
          <div className='project-btn'>
          <a href='https://bookstore-frontend-phy4.onrender.com/'>
            <button className='btn'><i class="fa-solid fa-up-right-from-square"></i><span>Live</span></button>
          </a>
          <a href='https://github.com/SophiaSophia03/BookStore.git'>
            <button className='btn'><i class="fa-brands fa-github"></i><span>Source Code</span></button>
          </a>
          </div>
        </div>
      </div>

      <div className='projects-container'>
      <img src={staynestImg} className='project-img'></img>
      <div className='desc'>
        <h2>StayNest</h2>
        <br></br>
        <h3>Using: <img src={htmlImg}></img>
          <img src={jsImg}></img>
          <img src={bootstrapImg}></img>
          <img src={nodeImg}></img>
          <img src={expressImg} style={{backgroundColor: "white"}}></img>
          <img src={npmImg}></img>
          <img src={mongoImg}></img></h3>
          <p className='project-para'>StayNest offers essential features like secure login, full CRUD operations for property listings, interactive Mapbox integration, and user-only access for editing/deleting their own listings. Users can add reviews, view success/error messages, and enjoy smooth input validations, creating a reliable and engaging rental platform.</p>
          <div className='project-btn'>
          <a href='https://staynest-uvyb.onrender.com/'>
            <button className='btn'><i class="fa-solid fa-up-right-from-square"></i><span>Live</span></button>
          </a>
          <a href='https://github.com/SophiaSophia03/StayNest.git'>
            <button className='btn'><i class="fa-brands fa-github"></i><span>Source Code</span></button>
          </a>
          </div>
        </div>
      </div>

      <div className='projects-container'>
      <img src={weatherAppImg} className='project-img'></img>
      <div className='desc'>
        <h2>Weather App</h2>
        <br></br>
        <h3>Using: <img src={reactImg}></img>
        <img src={cssImg}></img>
          <img src={vitejsImg}></img>
          <img src={materialUIImg}></img>
          </h3>
          <p className='project-para'>WeatherApp utilizes the OpenWeather API to provide real-time weather updates for any location. Users can simply search by city to view detailed weather information, including temperature, humidity, wind speed, and weather conditions, displayed through intuitive icons. The app features a responsive design for a smooth experience across all devices. Additionally, it includes error handling for invalid entries or data retrieval issues, ensuring reliability and ease of use.</p>
          <div className='project-btn'>
          <a href='https://weatherapp-h30o.onrender.com/'>
            <button className='btn'><i class="fa-solid fa-up-right-from-square"></i><span>Live</span></button>
          </a>
          <a href='https://github.com/SophiaSophia03/WeatherApp.git'>
            <button className='btn'><i class="fa-brands fa-github"></i><span>Source Code</span></button>
          </a>
          </div>
        </div>
      </div>

      </div>

    </div>
  )
}

export default Project