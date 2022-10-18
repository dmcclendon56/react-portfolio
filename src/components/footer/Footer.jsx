import React from 'react'
import './footer.css'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>D'Arrian</a>
      
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://twitter.com/ddjnaye'><AiFillTwitterCircle/></a>
        <a href='https://www.linkedin.com/in/darrian-mcclendon/'><AiFillLinkedin/></a>
      </div>

      <div className='footer__copyright' >
        <small>&copy; EGATOR tutorials. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer