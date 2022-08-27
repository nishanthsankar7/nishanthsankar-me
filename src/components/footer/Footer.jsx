import React from 'react'
import './footer.css';
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {SiGooglescholar, SiLeetcode} from 'react-icons/si'
import {FiMail} from 'react-icons/fi'
function Footer() {
  return (
    <section id='footer'>
      <footer>
        <a href='#' className='footer__logo'>Nishanth Sankar</a>
        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#portfolio'>Projects</a></li>
          <li><a href='#services'>Publications</a></li>
        </ul>
        <div className='footer__socials'>
         <a href='mailto:nishanthsankar207@gmail.com' target="_blank" rel='noreferrer'><FiMail /></a>
          <a href='https://www.linkedin.com/in/nishanth-sankar-530053175/' target="_blank" rel='noreferrer'><BsLinkedin /></a>
          <a href='https://github.com/nishanthsankar7' target="_blank" rel='noreferrer'><BsGithub /></a>
          <a href='https://scholar.google.com/citations?user=K3I6LZMAAAAJ&hl=en' target="_blank" rel='noreferrer'><SiGooglescholar /></a>
          <a href='https://leetcode.com/nishanthsankar/' target="_blank" rel='noreferrer'><SiLeetcode /></a>
          
        </div>
        <div className='footer__copyright'>
          <small>&copy; Nishanth Sankar</small>
        </div>
      </footer>
    </section>
  )
}

export default Footer