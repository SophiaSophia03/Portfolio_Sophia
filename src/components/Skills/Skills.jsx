import React from 'react'
import "./Skills.css"
import nodeImg from '../../assets/icons/Node.png';
import expressImg from '../../assets/icons/Express.png';
import bootstrapImg from '../../assets/icons/Bootstrap.png';
import cssImg from '../../assets/icons/CSS3.png';
import figmaImg from '../../assets/icons/Figma.png';
import gitImg from '../../assets/icons/Git.png';
import githubImg from '../../assets/icons/GitHub.png';
import htmlImg from '../../assets/icons/HTML5.png';
import jsImg from '../../assets/icons/JavaScript.png';
import mongoImg from '../../assets/icons/MongoDB.png';
import mysqlImg from '../../assets/icons/MySQL.png';
import nextjsImg from '../../assets/icons/Nextjs.png';
import npmImg from '../../assets/icons/NPM.png';
import reactImg from '../../assets/icons/React.png';
import reduxImg from '../../assets/icons/Redux.png';
import tailwindImg from '../../assets/icons/Tailwind.png';
import vitejsImg from '../../assets/icons/Vitejs.png';
import vscodeImg from '../../assets/icons/VSCode.png';


function Skills() {
  return (
    <div className='skills' id='skills'>
    <h1>Skills</h1>
    <div className='icons shadow'>
      <div className='frontend block'>
        {/* <h2>Front End</h2> */}
        <div className="icons-frontend icon">
          <img src={htmlImg}></img>
          <img src={jsImg}></img>
          <img src={reactImg}></img>
          <img src={reduxImg}></img>
          <img src={vitejsImg}></img>
        </div>
      </div>
      <div className='styling block'>
        {/* <h2>Styling & Design</h2> */}
        <div className="icons-styling icon">
          <img src={cssImg}></img>
          <img src={bootstrapImg}></img>
          <img src={tailwindImg}></img>
          <img src={figmaImg}></img>
        </div>
      </div>
      <div className='backend block'>
        {/* <h2>Back End</h2> */}
        <div className="icons-backend icon">
          <img src={nodeImg}></img>
          <img src={expressImg} style={{backgroundColor: "white"}}></img>
          <img src={npmImg}></img>
          <img src={nextjsImg} style={{backgroundColor: "white"}}></img>
          <img src={mongoImg}></img>
          <img src={mysqlImg}></img>
        </div>
      </div>
      <div className='Miscellaneous block'>
          {/* <h2>Miscellaneous</h2> */}
          <div className="icons-backend icon">
          <img src={vscodeImg}></img>
          <img src={gitImg}></img>
          <img src={githubImg} style={{backgroundColor: "white"}}></img>
          </div>
      </div>
      </div>
      </div>
  )
}

export default Skills