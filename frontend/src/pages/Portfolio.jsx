import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import projects from '../data/projects'

const Portfolio = () => {
  return (
    <>
      <Navbar/>
      <main className='portfolio-page'>
        <section className='portfolio-header'>
          <p className='hero-small-title'>OUR WORK</p>
          <h1>selected <span>Projects</span></h1>
          <p>Explore some of our digital projects technologies and solutions.</p>
        </section>
        <section className='portfolio-grid'>
          {projects.map((project) => (
            <article
              className='project-card'
              key={project.id}
            >
              <div className='project-number'>
                {String(project.id).padStart(2, '0')}
              </div>
              <p className='project-category'>
                {project.category}
              </p>
              <h2>{project.title}</h2>
              <p className='project-description'>
                {project.shortDescription}
              </p>
              <div className='project-tech'>
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <Link to={`/portfolio/${project.slug}`}
                    className='project-link'>
                     View Case Study →
                    </Link>
            </article>
          ))}
        </section>
      </main>
    </>
  )
}

export default Portfolio