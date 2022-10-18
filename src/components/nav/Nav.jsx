import React from 'react'
import './nav.css'
import {BiHomeSmile} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
import {GrContact} from 'react-icons/gr'
import {FaBook} from 'react-icons/fa'
// import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={ activeNav === '#' ? 'active' : ''}> <BiHomeSmile /> </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <BiUserCircle /> </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#about' ? 'active' : ''}> <FaBook /> </a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineFolderOpen /> </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#about' ? 'active' : ''}> <GrContact /> </a>
      
    </nav>
  )
}

export default Nav