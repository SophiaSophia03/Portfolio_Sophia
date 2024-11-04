import React from 'react'
import "./Certificates.css"
import apnaCollegeImg from "../../assets/certificates/CertApnaCollege.png"
import ciscoImg from "../../assets/certificates/certCisco.png"

function Certificates() {
  return (
    <div className='certificates' id='certificates'>
      <h1>Certificates</h1>
      <div className='cert-container'>

        <div className='cert1 cert-content'>
        <img src={apnaCollegeImg} className='content-img'></img>
        <h3 className='desc'>Full Stack Development Course Completion Certificate (60 hrs)</h3>
        <p></p>
        </div>

        <div className='cert1 cert-content'>
        <img src={ciscoImg} className='content-img'></img>
        <h3 className='desc'>Full Stack Development Course Completion Certificate (60 hrs)</h3>
        <p></p>
        </div>

      </div>
    </div>
  )
}

export default Certificates