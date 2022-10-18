import React from 'react'
import './about.css'
import ME from '../../assets/aboutme2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {GrProjects} from 'react-icons/gr'


const About = () => {
  return (
    <section id='about'>
      <h5> Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'> 
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
        </div>
        </div>

        
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Years of Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>1</small>
            </article>

            <article className='about__card'>
              <GrProjects className='about__icon'/>
              <h5>Projects</h5>
              <small>4+ completed</small>
            </article>
          </div>
          
          <p>Howdy!
          My name is D'Arrian McClendon & I am bootcamp grad!
          I have worked as a nanny and adminstrative assitant for years.   
          </p>
          <a href='#conact' className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
 


    </section>
  )
}

export default About


