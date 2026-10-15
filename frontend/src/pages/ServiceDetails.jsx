import React from "react";
import { Link, useParams } from "react-router-dom";
import services from "../data/services";
import Navbar from "../components/Navbar";

const ServiceDetails = () => {
  const slug = useParams();
  console.log(slug.slug);
 
  const service = services.find(item => item.slug == slug.slug);
  console.log(service);
  

  if (!service) {
    return(
      <>
        <Navbar/>
        <main className="not-found">
          <h1>Service Not Found</h1>
          <p>The service you are looking for does not exist</p>
          <Link to='/services'>← Back to Services</Link>
        </main>
      </>
    )
  } 
  return (
    // <div>
    //   <h1>{service.title}</h1>
    //   <p>{service.description}</p>
    //   <h2>Technologies</h2>
    //   <ul>
    //     {service.technologies.map((tech) => (
    //       <li key={tech}>{tech}</li>
    //     ))}
    //   </ul>
    //   <h2>Features</h2>
    //   <ul>
    //     {service.features.map((fe) => (
    //       <li key={fe}>{fe}</li>
    //     ))}
    //   </ul>
    //   <button>Get a Quote</button>
    // </div>
    <>
      <Navbar/>
      <main className="service-details">
        <section className="service-details-header">
          <p className="hero-small-title">OUR SERVICE</p>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </section>
        <section className="service-details-content">
          <div className="details-box">
            <h2>Technologies</h2>
            <div className="technology-list">
              {service.technologies.map((tech)=>
              (<div className="technology-item" key={tech}>
                {tech}
                </div>
              ))}
            </div>
          </div>
          <div className="details-box">
            <h2>Key Features</h2>
            <div className="features-list">
              {service.features.map((feature, index)=>(
                <div className="feature-item" key={feature}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="service-cta">
          <h2>Have a project in mind?</h2>
          <p>Let's discuss how we can help transform your business digitally.</p>
          <Link
            to = "/contact" className="primary-button">
            Get a Quote
          </Link>
        </section>
      </main>
    </>
  );
};

export default ServiceDetails;
