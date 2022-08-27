import React from 'react'
import './nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiMessageRoundedDetail} from 'react-icons/bi';
import {MdDesignServices} from 'react-icons/md';
import {useState} from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><BiBook /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#experience' ? 'active' : ''}><MdDesignServices /></a>
      
      <a href='#footer' onClick={() => setActiveNav('#footer')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageRoundedDetail /></a>
    </nav>
  )
}

export default Nav