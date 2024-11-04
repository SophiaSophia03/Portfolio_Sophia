import React from 'react'
import "./Project.css"
import staynestImg from "../../assets/projects/staynest.png"
import nodeImg from '../../assets/icons/Node.png';
import expressImg from '../../assets/icons/Express.png';
import bootstrapImg from '../../assets/icons/Bootstrap.png';
import htmlImg from '../../assets/icons/HTML5.png';
import jsImg from '../../assets/icons/JavaScript.png';
import mongoImg from '../../assets/icons/MongoDB.png';
import npmImg from '../../assets/icons/NPM.png';



function Project() {
  return (
    <div className='projects' id='projects'>

      <div className='project-title'>
        <h1>My Projects</h1>
      </div>
      <div className='project-content'>

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
            <button className='btn'><i class="fa-solid fa-up-right-from-square"></i><span>Live</span></button>
            <button className='btn'><i class="fa-brands fa-github"></i><span>Source Code</span></button>
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
          <p className='project-para'>User Authentication: Secure login and sign-up <br />
          Listing Management: Full CRUD operations for property listings
          Map Integration: Interactive Mapbox maps for location display
          User Access Control: Only listing owners can edit/delete their properties
          Reviews and Ratings: Add, view, and delete reviews on listings
          Input Validations: Ensures data integrity and smooth experience</p>
          <div className='project-btn'>
            <button className='btn'><i class="fa-solid fa-up-right-from-square"></i><span>Live</span></button>
            <button className='btn'><i class="fa-brands fa-github"></i><span>Source Code</span></button>
          </div>
        </div>
      </div>

      </div>

    </div>





    // <div className='projects' id='projects'>
    // <h1>Projects</h1>
    // <div className='projects-container'>

    //   <div className='first-project box'>
    //     <img src={staynestImg} className='shadow img'></img>
    //     <div className='project-content'>
    //     <div className='desc'>
    //     <h2>StayNest</h2>
    //     <h3>
    //     Using:<img src={htmlImg}></img>
    //       <img src={jsImg}></img>
    //       <img src={bootstrapImg}></img>
    //       <img src={nodeImg}></img>
    //       <img src={expressImg} style={{backgroundColor: "white"}}></img>
    //       <img src={npmImg}></img>
    //       <img src={mongoImg}></img>
    //     </h3>
    //     <h3>Key Features:</h3>
    //     <ul>
    //       <li>User Authentication: Secure login and sign-up</li>
    //       <li>Listing Management: Full CRUD operations for property listings</li>
    //       <li>Map Integration: Interactive Mapbox maps for location display</li>
    //       <li>User Access Control: Only listing owners can edit/delete their properties</li>
    //       <li>Reviews and Ratings: Add, view, and delete reviews on listings</li>
    //       <li>Input Validations: Ensures data integrity and smooth experience</li>
    //     </ul>
    //     </div>
    //     <div className='project-btn'>
    //       <button className='btn'><i class="fa-solid fa-up-right-from-square"></i><span>Live</span></button>
    //       <button className='btn'><i class="fa-brands fa-github"></i><span>Source Code</span></button>
    //     </div>
    //     </div>
    //   </div>

    //   <div className='second-project box'>
    //     <img src={staynestImg} className='shadow img'></img>
    //     <div className='project-content'>
    //     <div className='desc'>
    //     <h2>StayNest</h2>
    //     <h3>
    //     Using:<img src={htmlImg}></img>
    //       <img src={jsImg}></img>
    //       <img src={bootstrapImg}></img>
    //       <img src={nodeImg}></img>
    //       <img src={expressImg} style={{backgroundColor: "white"}}></img>
    //       <img src={npmImg}></img>
    //       <img src={mongoImg}></img>
    //     </h3>
    //     <h3>Key Features:</h3>
    //     <ul>
    //       <li>User Authentication: Secure login and sign-up</li>
    //       <li>Listing Management: Full CRUD operations for property listings</li>
    //       <li>Map Integration: Interactive Mapbox maps for location display</li>
    //       <li>User Access Control: Only listing owners can edit/delete their properties</li>
    //       <li>Reviews and Ratings: Add, view, and delete reviews on listings</li>
    //       <li>Input Validations: Ensures data integrity and smooth experience</li>
    //     </ul>
    //     </div>
    //     <div className='project-btn'>
    //       <button className='btn'><i class="fa-solid fa-up-right-from-square"></i><span>Live</span></button>
    //       <button className='btn'><i class="fa-brands fa-github"></i><span>Source Code</span></button>
    //     </div>
    //     </div>
    //   </div>

    //   <div className='second-project box'>
    //     <img src={staynestImg} className='shadow img'></img>
    //     <div className='project-content'>
    //     <div className='desc'>
    //     <h2>StayNest</h2>
    //     <h3>
    //     Using:<img src={htmlImg}></img>
    //       <img src={jsImg}></img>
    //       <img src={bootstrapImg}></img>
    //       <img src={nodeImg}></img>
    //       <img src={expressImg} style={{backgroundColor: "white"}}></img>
    //       <img src={npmImg}></img>
    //       <img src={mongoImg}></img>
    //     </h3>
    //     <h3>Key Features:</h3>
    //     <ul>
    //       <li>User Authentication: Secure login and sign-up</li>
    //       <li>Listing Management: Full CRUD operations for property listings</li>
    //       <li>Map Integration: Interactive Mapbox maps for location display</li>
    //       <li>User Access Control: Only listing owners can edit/delete their properties</li>
    //       <li>Reviews and Ratings: Add, view, and delete reviews on listings</li>
    //       <li>Input Validations: Ensures data integrity and smooth experience</li>
    //     </ul>
    //     </div>
    //     <div className='project-btn'>
    //       <button className='btn'><i class="fa-solid fa-up-right-from-square"></i><span>Live</span></button>
    //       <button className='btn'><i class="fa-brands fa-github"></i><span>Source Code</span></button>
    //     </div>
    //     </div>
    //   </div>

    //   <div className='second-project box'>
    //     <img src={staynestImg} className='shadow img'></img>
    //     <div className='project-content'>
    //     <div className='desc'>
    //     <h2>StayNest</h2>
    //     <h3>
    //     Using:<img src={htmlImg}></img>
    //       <img src={jsImg}></img>
    //       <img src={bootstrapImg}></img>
    //       <img src={nodeImg}></img>
    //       <img src={expressImg} style={{backgroundColor: "white"}}></img>
    //       <img src={npmImg}></img>
    //       <img src={mongoImg}></img>
    //     </h3>
    //     <h3>Key Features:</h3>
    //     <ul>
    //       <li>User Authentication: Secure login and sign-up</li>
    //       <li>Listing Management: Full CRUD operations for property listings</li>
    //       <li>Map Integration: Interactive Mapbox maps for location display</li>
    //       <li>User Access Control: Only listing owners can edit/delete their properties</li>
    //       <li>Reviews and Ratings: Add, view, and delete reviews on listings</li>
    //       <li>Input Validations: Ensures data integrity and smooth experience</li>
    //     </ul>
    //     </div>
    //     <div className='project-btn'>
    //       <button className='btn'><i class="fa-solid fa-up-right-from-square"></i><span>Live</span></button>
    //       <button className='btn'><i class="fa-brands fa-github"></i><span>Source Code</span></button>
    //     </div>
    //     </div>
    //   </div>

    // </div>
    // </div>
  )
}

export default Project