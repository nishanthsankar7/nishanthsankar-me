import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/nishanth-sankar-530053175/' target="_blank" rel='noreferrer'><BsLinkedin /></a>
        <a href='https://github.com/nishanthsankar7' target="_blank" rel='noreferrer'><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials