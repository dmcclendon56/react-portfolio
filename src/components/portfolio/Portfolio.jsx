import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const data =[
  {
    id: 1,
    image: IMG1,
    title: 'Margarita Mile', 
    github: 'https://github.com/dmcclendon56/margarita_mile_atx',
    demo:''
  },
  {
    id: 2,
    image: IMG2,
    title: 'Penny Slots', 
    github: 'https://github.com/dmcclendon56/Project-1-Slot-Machine',
    demo:''
  },
  {
    id: 3,
    image: IMG3,
    title: 'ChowTown', 
    github: 'https://github.com/pepermz/Project2-Earth-FoodWebsite',
    demo:'https://secret-escarpment-10244.herokuapp.com/home'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Bob"s Burger API', 
    github: 'https://github.com/dmcclendon56/bob-s_burgers',
    demo:'https://6286e5c1d7193f59cd2947f4--vermillion-eclair-47c7f6.netlify.app/'
  }
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent </h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>
                  </div>
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                  </div>
                  </article>
            )
          })
        }
        </div>
    </section>
  )
  
}

export default Portfolio