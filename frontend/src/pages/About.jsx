
import { Link } from "react-router-dom";

function About() {
  const values = [
    {
      title: "Our Mission",
      description:
        "To help businesses grow through creative design, modern technology, and reliable digital solutions.",
    },
    {
      title: "Our Vision",
      description:
        "To become a trusted digital partner for businesses looking to build a strong online presence.",
    },
    {
      title: "Our Approach",
      description:
        "We combine creativity, technical expertise, and collaboration to deliver meaningful results.",
    },
  ];

  const services = [
    "Web Development",
    "UI/UX Design",
    "E-Commerce Solutions",
    "Digital Transformation",
  ];

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <p className="about-eyebrow">ABOUT RIYADVI</p>

        <h1>
          We Build Digital
          <br />
          Experiences That Matter.
        </h1>

        <p className="about-hero-description">
          We help businesses turn ideas into powerful digital
          experiences through thoughtful design and modern technology.
        </p>

        <Link to="/contact" className="about-button">
          Let's Work Together
        </Link>
      </section>

      {/* Company Introduction */}
      <section className="about-intro">
        <div className="about-intro-heading">
          <p className="about-eyebrow">WHO WE ARE</p>
          <h2>Your Partner in Digital Growth</h2>
        </div>

        <div className="about-intro-content">
          <p>
            Riyadvi is a digital agency focused on helping businesses
            establish and improve their digital presence.
          </p>

          <p>
            From responsive websites to intuitive user interfaces and
            e-commerce applications, we focus on building solutions
            that are useful, accessible, and designed around business
            goals.
          </p>
        </div>
      </section>

      {/* Mission, Vision and Approach */}
      <section className="about-values">
        <div className="about-section-heading">
          <p className="about-eyebrow">WHAT DRIVES US</p>
          <h2>Ideas Backed by Purpose</h2>
        </div>

        <div className="about-values-grid">
          {values.map((value, index) => (
            <article className="about-value-card" key={value.title}>
              <span className="about-card-number">
                0{index + 1}
              </span>

              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="about-services">
        <div>
          <p className="about-eyebrow">WHAT WE DO</p>
          <h2>Digital Solutions for Modern Businesses</h2>
          <p>
            We work to transform business requirements into practical
            and engaging digital products.
          </p>
        </div>

        <ul className="about-services-list">
          {services.map((service) => (
            <li key={service}>
              <span>{service}</span>
              <span aria-hidden="true">↗</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <p className="about-eyebrow">HAVE A PROJECT IN MIND?</p>

        <h2>Let's Create Something Great Together.</h2>

        <p>
          Tell us about your idea, and let's explore how we can bring
          it to life.
        </p>

        <Link to="/contact" className="about-button">
          Contact Us
        </Link>
      </section>
    </main>
  );
}

export default About;
