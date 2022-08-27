import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpeg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.png';


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Vaccine Supply System Using Blockchain',
    github: 'https://github.com/nishanthsankar7/Vaccine_Supply_System',
    
  },
  {
    id: 2,
    image: IMG2,
    title: 'NFT Marketplace built using Web3',
    github: 'https://github.com/nishanthsankar7/nft-bird',
    
  },
  {
    id: 3,
    image: IMG3,
    title: 'Skin Cancer Detector API Using Machine Learning',
    github: 'https://github.com/nishanthsankar7/skin_cancer',
    
  },
  {
    id: 4,
    image: IMG4,
    title: 'Diabetic Retinopathy Classifier Using Machine Learning',
    github: 'https://github.com/nishanthsankar7/Diabetic_Retinopathy/tree/master',
    
  },
  {
    id: 5,
    image: IMG5,
    title: 'Cardiovascular Problem Prediction Using Machine Learning',
    github: 'https://github.com/nishanthsankar7/Cardiovascular-Problem-Prediction-',
    
  },
  {
    id: 6,
    image: IMG6,
    title: 'Google Keep Clone Web Application',
    github: 'https://github.com/nishanthsankar7/google-keep-clone',
    
  },

]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Works</h5>
      <h2>Projects</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
             <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
            <a href={github} className='btn btn-primary' target="_blank" rel='noreferrer'>Github</a>
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