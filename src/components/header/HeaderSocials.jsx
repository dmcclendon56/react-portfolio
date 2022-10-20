import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/darrian-mcclendon/' target="_blank"> <AiFillLinkedin /> </a>
        <a href='https://github.com/dmcclendon56' target="_blank"> <AiFillGithub/></a> 
    </div>
  )
}

export default HeaderSocials