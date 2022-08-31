import React from 'react'
import './about.css'
import ME from '../../assets/aboutme2.jpeg'
import {FaAward} from 'react-icons/fa'

function About() {
  return (
    <section id='about'>
      <h5> Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'> 
        <div className='about_me-image'>
          <img src={ME} alt='About Image' />
        </div>
        
        </div>
        <div className='about_content'>
          <div className="about_cards">
            <article className='about_card'>
              <h5>Experience</h5>
              <small>1+ Years of Experience</small>
            </article>
          </div>
          
        </div>
      </div>



    </section>
  )
}

export default About