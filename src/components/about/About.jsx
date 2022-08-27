import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {GiTeamIdea} from 'react-icons/gi';
import {VscFolderLibrary} from 'react-icons/vsc'
function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="about"/>
            </div>
        </div>    

          <div className='about__content'>
            <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
            <article className='about__card'>
              <GiTeamIdea className='about__icon'/>
              <h5>Team Leader</h5>
              <small>Managed 10+ people</small>
            </article>
            </div>
    
          <p>
          I like to explore new technologies and solve problems related to tech. I am a software developer, proficient in creating full-stack applications.
            I have done some projects on the blockchain(web3) and also working on Machine Learning and Artificial Intelligence. I like to work as a team and have been a key 
            part of various tech organizations and also managed a small team while in college.
          </p>
          
          </div>
        </div>
    </section>
  )
}

export default About