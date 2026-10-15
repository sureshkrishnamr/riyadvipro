import { Link } from 'react-router-dom'
import services from '../data/services'
import Navbar from '../components/Navbar'

const Service = () => {
  return (
    <div>
      <Navbar/>
      {/* <h1>Our Services</h1>
      <div className='services-grid'>
        {
          services.map((service) => (
            <div className='service-card' key={service.slug}>
              <h2>
                {service.title}
              </h2>
              <p>{service.description}</p>
              <Link to={`/services/${service.slug}`}> Explore Service &rarr; </Link>


            </div>
          ))
        }
      </div> */}
      <main className='services-page'>
        <section className='services-header'>
          <p className='hero-small-title'>WHAT WE DO</p>
          <h1>Technology <span>Solutions</span></h1>
          <p>We combine technology, design and strategy to create digital solutions for modern businesses.</p>
        </section>
        <section className='services-grid'>
          {services.map((service) => (
            <article className='service-card' key={service.id}>
              <span>
                {String(service.id).padStart(2, "0")}
              </span>
              <h2>{service.title}</h2>
              <p>{service.shortDescription}</p>
              <Link to={`/services/${service.slug}`} className='service-link'> Explore Service →</Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

export default Service