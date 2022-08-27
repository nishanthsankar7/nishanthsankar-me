import React from 'react'
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import Typewriter from "typewriter-effect";


function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Nishanth Sankar</h1>
        <br />
        <CTA />

        <HeaderSocials />

        <div className='me'>
          <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Website Developer")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Tech Enthusiast")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Software Developer")
       .start();
       }}
       />
        </div>
      <a href='#experience' className='scroll__down'>Experience</a>
      </div>
    </header>
  )
}

export default Header