import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent </h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href='https://github.com' target= 'blank' className='btn'>Github</a>
            <a href='https://github.com' target= 'blank'  className='btn btn-primary'>Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='' />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href='https://github.com' target= 'blank' className='btn'>Github</a>
            {/* <a href='https://github.com' target= 'blank'  className='btn btn-primary'>Demo</a> */}
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='' />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href='https://github.com' target= 'blank' className='btn'>Github</a>
            <a href='https://github.com' target= 'blank'  className='btn btn-primary'>Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt='' />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href='https://github.com' target= 'blank' className='btn'>Github</a>
            <a href='https://github.com' target= 'blank'  className='btn btn-primary'>Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio