import React from 'react'
import { Link, useParams } from 'react-router-dom'
import portfolio from '../data/portfolio';
import Navbar from '../components/Navbar';

const PortfolioDetails = () => {
  const {slug} = useParams();

  const project = portfolio.find((item) => item.slug === slug.slug)
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
      <h1>{project.client}</h1>
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
      </ul>

    </>
  )
}

export default PortfolioDetails;