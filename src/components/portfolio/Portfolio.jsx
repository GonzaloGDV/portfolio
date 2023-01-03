import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio-dogs.png';
import IMG2 from '../../assets/portfolio-codebug.png';
import IMG3 from '../../assets/portfolio-circus.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Dogs App',
    github: 'https://github.com/GonzaloGDV/PI-Dogs',
    demo: 'https://dogs-ggdv.up.railway.app/home',
  },
  {
    id: 2,
    image: IMG2,
    title: 'CodeBug',
    github: 'https://github.com/Codebug-Henry/Co-debug',
    demo: 'https://codebug-ten.vercel.app',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Circus Cotillón - "Work in Progress"',
    github: 'https://github.com/CotillonCircus/WebApp',
    demo: 'https://circuscotillon.com',
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio item_image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>
                  Github
                </a>
                <a href={demo} className='btn btn-primary' target='_blank'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
