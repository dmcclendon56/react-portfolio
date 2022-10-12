import React from 'react'
import './contact.css'
import {TfiEmail} from 'react-icons/tf'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <TfiEmail/>
            <h4>Email</h4>
            <h5>mcclendon.darrian@gmail.com</h5>
            <a href='mailto:mcclendon.darrian@gmail.com'>Send a message</a>
          </article>
        </div>
        {/* ?end of contact options */}
        <form action=''></form>
      </div>
    </section>
  )
}

export default Contact