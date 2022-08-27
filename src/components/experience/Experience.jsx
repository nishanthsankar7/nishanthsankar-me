import React from 'react'
import './experience.css';
import { DiDotnet, DiReact, DiJavascript1, DiNodejsSmall, DiPython,  } from "react-icons/di";
import {SiPandas, SiTensorflow, SiSolidity, SiWeb3Dotjs, SiMongodb } from 'react-icons/si'
import {FaEthereum, FaDatabase, FaCertificate} from 'react-icons/fa'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Website Development</h3>
          <div className='experience__content'>
            
            <article className='experience__details'>
            <DiJavascript1 className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
            </div> 
            </article>
            <article className='experience__details'>
            <DiReact className='experience__details-icon'/>
            <div>
            <h4>React.js</h4>
            <small className='text-light'>Intermediate</small>
            </div> 
            </article>
            <article className='experience__details'>
            <DiNodejsSmall className='experience__details-icon'/>
            <div>
            <h4>Node.js</h4>
            <small className='text-light'>Intermediate</small>
            </div> 
            </article>
            <article className='experience__details'>
            <DiDotnet className='experience__details-icon'/>
            <div>
            <h4>ASP .NET Core</h4>
            <small className='text-light'>Experienced</small>
            </div> 
            </article>
            <article className='experience__details'>
            <SiMongodb className='experience__details-icon'/>
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Intermediate</small>
            </div> 
            </article>
            <article className='experience__details'>
            <FaDatabase className='experience__details-icon'/>
            <div>
            <h4>SQL</h4>
            <small className='text-light'>Experienced</small>
            </div> 
            </article>
          </div>
        </div>
        
        <div className='experience__backend'>
        <h3>Blockchain & AI/ML</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <SiSolidity className='experience__details-icon'/>
            <div>
            <h4>Solidity</h4>
            <small className='text-light'>Intermediate</small>
            </div> 
            </article>
            <article className='experience__details'>
            <FaEthereum className='experience__details-icon'/>
            <div>
            <h4>Ethereum</h4>
            <small className='text-light'>Intermediate</small>
            </div> 
            </article>
            <article className='experience__details'>
            <SiWeb3Dotjs className='experience__details-icon'/>
            <div>
            <h4>Web3.js</h4>
            <small className='text-light'>Intermediate</small>
            </div> 
            </article>
            <article className='experience__details'>
            <DiPython className='experience__details-icon'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Intermediate</small>
            </div> 
            </article>
            <article className='experience__details'>
            <SiTensorflow className='experience__details-icon'/>
            <div>
            <h4>TensorFlow</h4>
            <small className='text-light'>Beginer</small>
            </div> 
            </article>
            <article className='experience__details'>
            <SiPandas className='experience__details-icon'/>
            <div>
            <h4>Pandas</h4>
            <small className='text-light'>Beginer</small>
            </div> 
            </article>
          </div>  
        </div>
        <div className='experience__frontend'>
          <h3>Certifications</h3>
          <div className='experience__content'>
            
            <article className='experience__details'>
            <FaCertificate className='experience__details-icon'/>
            <div>
            <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/6SK22JCSJHV2" className='text-light' target="_blank" rel='noreferrer'>Blockchain Specialization</a>
            </div> 
            </article>
            <article className='experience__details'>
            <FaCertificate className='experience__details-icon'/>
            <div>
            <a href="https://www.udemy.com/certificate/UC-0dd707c3-ae99-4f97-9d35-e91f2584b7a6/" className='text-light' target="_blank" rel='noreferrer'>MERN Stack Development</a>
            </div> 
            </article>
            <article className='experience__details'>
            <FaCertificate className='experience__details-icon'/>
            <div>
            <a href="https://www.udemy.com/certificate/UC-044f677e-aebb-439b-b1b0-293a3cfb19f3/" className='text-light' target="_blank" rel='noreferrer'>Machine Learning & Deep Learning</a>
            </div> 
            </article>
            <article className='experience__details'>
            <FaCertificate className='experience__details-icon'/>
            <div>
            <a href="https://www.udemy.com/certificate/UC-fe932550-02f4-4c0b-8c38-9477ed370a81/" className='text-light' target="_blank" rel='noreferrer'>Machine Learning 401</a>
            </div> 
            </article>
            <article className='experience__details'>
            <FaCertificate className='experience__details-icon'/>
            <div>
            <a href="https://university.mongodb.com/course_completion/e53424f0-f78d-4e3e-865d-6c4139541169/printable" className='text-light' target="_blank" rel='noreferrer'>M001: MongoDB Basics</a>
            </div> 
            </article>
            <article className='experience__details'>
            <FaCertificate className='experience__details-icon'/>
            <div>
            <a href="https://www.coursera.org/account/accomplishments/verify/BQPU5AQ34QHF" className='text-light' target="_blank" rel='noreferrer'>Application Modernization with Google Cloud </a>
            </div> 
            </article>
          </div>
        </div>
        <div className='experience__frontend'>
          <h3>Certifications</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <FaCertificate className='experience__details-icon'/>
            <div>
            <a href="https://drive.google.com/file/d/1RBSnJhUyCdEREpZ58w7cToTiPTVIbMc-/view" className='text-light' target="_blank" rel='noreferrer'>Data Structures and Algorithm</a>
            </div> 
            </article>
            <article className='experience__details'>
            <FaCertificate className='experience__details-icon'/>
            <div>
            <a href="https://www.hackerrank.com/certificates/3eb0a714a186" className='text-light' target="_blank" rel='noreferrer'>Java Programming</a>
            </div> 
            </article>
            <article className='experience__details'>
            <FaCertificate className='experience__details-icon'/>
            <div>
            <a href="https://www.coursera.org/account/accomplishments/verify/X5MTVFK66MLN" className='text-light' target="_blank" rel='noreferrer'>Go Programming</a>
            </div> 
            </article>
            <article className='experience__details'>
            <FaCertificate className='experience__details-icon'/>
            <div>
            <a href="https://courses.edx.org/certificates/bb3a9ebf16c14190a300b89258ee7c29" className='text-light' target="_blank" rel='noreferrer'>LBTechX1: Technology Entrepreneurship</a>
            </div> 
            </article>
            <article className='experience__details'>
            <FaCertificate className='experience__details-icon'/>
            <div>
            <a href="https://courses.edx.org/certificates/6f03600c7e6d47ab922fe991a006cef0" className='text-light' target="_blank" rel='noreferrer'>MK210x: CRM</a>
            </div> 
            </article>
            <article className='experience__details'>
            <FaCertificate className='experience__details-icon'/>
            <div>
            <a href="https://www.coursera.org/account/accomplishments/professional-cert/5KJ32529EWFW" className='text-light' target="_blank" rel='noreferrer'>Google IT Support Professional</a>
            </div> 
            </article>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Experience