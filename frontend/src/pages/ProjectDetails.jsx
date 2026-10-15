import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Navbar from '../components/Navbar';
import projects from '../data/projects';

const ProjectDetails = () => {
  const {slug} = useParams();
  console.log(slug);
  

  const project = projects.find((item) => item.slug === slug)
  if(!project){
    return(
      <>
      <Navbar/>
      <main className='not-found'>
        <h1>Project Not Found</h1>
      </main>
      <p>The project you are looking for does not exists</p>
      <Link to='/portfolio'>
        ← Back to Portfolio
      </Link>
      </>
    )
  }
  return (
    <>
      <Navbar/>
      <main className='project-details'>
        <section className='project-details-header'>
          <p className='hero-small-title'>
            {project.category}
          </p>
          <h1>
            {project.title}
          </h1>
          <p>
            {project.description}
          </p>
        </section>
        <section className='case-study-grid'>
          <div className='case-study-box'>
            <span>01</span>
            <h2>challenge</h2>
            <p>{project.challenge}</p>
          </div>
          <div className='case-study-box'>
            <span>02</span>
            <h2>Solution</h2>
            <p>{project.solution}</p>
          </div>
        </section>
        <section className='project-section'>
          <p className='hero-small-title'>TECHNOLOGY</p>
          <h2>Technologies Used</h2>
          <div className='project-tech-large'>
            {project.technologies.map(
              (tech) =>(
                <span key={tech}>{tech}</span>
              )
            )}
          </div>
        </section>
        
        <section className='project-section'>
          <p className='hero-small-title'>FEATURES</p>
          <h2>Project Features</h2>
          <div className='project-features'>
            {project.features.map((feature, index) => (
              <div className='project-feature' key={feature}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='project-cta'>
          <h2>Have a similar project?</h2>
          <p>Let's discuss your idea and create a digital solution together</p>
          <Link to='/contact' className='primary-button'>
          Start a Project</Link>
        </section>
      </main>
      {/* <h1>{project.client}</h1>
      <p>Industry: {project.industry}</p>
      <h2>Challenge</h2>
      <p>{project.challenge}</p>
      <h2>Solution</h2>
      <p>{project.solution}</p>
      <h2>Technologies</h2>
      <ul>
        {project.technologies.map(tech =>(
          <li key={tech}>
            {tech}
          </li>
        ))}
      </ul> */}

    </>
  )
}

export default ProjectDetails;