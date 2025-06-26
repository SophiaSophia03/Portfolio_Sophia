import React from 'react'
import "./Certificates.css"
import apnaCollegeImg from "../../assets/certificates/CertApnaCollege.png"
import ecmaImg from "../../assets/certificates/certEcmaScript.png"
import businessImg from "../../assets/certificates/certBusiness.png"
import MoscowImg from "../../assets/certificates/certMoscow.png"
import VBCourseImg from "../../assets/certificates/CertVB.NET.png"

function Certificates() {
  return (
    <div className='certificates' id='certificates'>
      <h1>Certificates</h1>
      <div className='cert-container'>

        <div className='cert1 cert-content'>
        <img src={apnaCollegeImg} className='content-img'></img>
        <h3 className='desc'>Apna College</h3>
        <p>Full Stack Development Course Completion Certificate (80 hrs)</p>
        </div>

        <div className='cert5 cert-content'>
        <img src={VBCourseImg} className='content-img'></img>
        <h3 className='desc'>Udemy</h3>
        <p>VB.NET Mastering Beginner to Advance with projects (14.5 hrs)</p>
        </div>

        <div className='cert2 cert-content'>
        <img src={ecmaImg} className='content-img'></img>
        <h3 className='desc'>LinkedIn Learning</h3>
        <p>Learning EcmaScript 6+ (1hr 14 min)</p>
        </div>

        <div className='cert3 cert-content'>
        <img src={businessImg} className='content-img'></img>
        <h3 className='desc'>LinkedIn Learning</h3>
        <p>Business Ethics (1hr)</p>
        </div>

        <div className='cert4 cert-content'>
        <img src={MoscowImg} className='content-img'></img>
        <h3 className='desc'>LinkedIn Learning</h3>
        <p>Applying Agile MoSCoW Prioritization (1hr)</p>
        </div>

      </div>
    </div>
  )
}

export default Certificates