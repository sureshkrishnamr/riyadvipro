import React from "react";
import Navbar from "../components/Navbar";
import Hero3D from "../components/Hero3D";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const Home = () => {

  const heroRef = useRef(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const timeline = gsap.timeline();

      timeline
        .from(".hero-small-title", {
          opacity: 0,
          y: 30,
          duration: 0.8
        })
        .from(".hero h1", {
          opacity: 0,
          y: 60,
          duration: 1
        }, "-=0.4")
        .from(".hero-description", {
          opacity: 0,
          y: 30,
          duration: 0.8
        }, "-=0.5")
        .from(".hero-buttons", {
          opacity: 0,
          y: 30,
          duration: 0.8
        }, "-=0.5")
        .from(".hero-3d", {
          opacity: 0,
          scale: 0.7,
          duration: 1.2
        }, "-=0.8");

    }, heroRef);

    return () => ctx.revert();

  }, []);

  useLayoutEffect(() => {

  const ctx = gsap.context(() => {

    gsap.from(".flow-item", {
      scrollTrigger: {
        trigger: ".transformation",
        start: "top 75%",
      },

      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8
    });
    gsap.from(".service-card", {

  scrollTrigger: {
    trigger: ".services",
    start: "top 75%",
  },

  opacity: 0,

  y: 70,

  scale: 0.95,

  stagger: 0.12,

  duration: 0.8,

  ease: "power3.out"

});

  }, heroRef);

  return () => ctx.revert();

}, []);

 
  return (
    <div>
      <Navbar />
      <section className="hero" ref={heroRef}>
        <div className="hero-content">
          <p className="hero-small-title">
            DIGITAL TRANSFORMATION
          </p>
          <h1>
            custom software & <span>Digital Solutions</span>
          </h1>
          <p className="hero-description">
            we create powerful digital experiences that help businesses grow,
            innovate and transform.
          </p>
          <div className="hero-buttons">
            <a href="/contact" className="primary-button">
              Book a Free Consultation
            </a>
            <a href="/services" className="secondary-button">
              Explore Services&rarr;{" "}
            </a>
          </div>
        </div>
      </section>
      <Hero3D />
      <section className="transformation">
        <div className="section-title">
          <p>OUR APPROACH</p>

          <h2>Digital Transformation</h2>
        </div>

        <div className="transformation-flow">
          <div className="flow-item">
            <span>01</span>
            <h3>Challenge</h3>
            <p>Understand your business challenges.</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-item">
            <span>02</span>
            <h3>Strategy</h3>
            <p>Create a clear digital strategy.</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-item">
            <span>03</span>
            <h3>Design</h3>
            <p>Build engaging user experiences.</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-item">
            <span>04</span>
            <h3>Technology</h3>
            <p>Develop scalable technology.</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-item">
            <span>05</span>
            <h3>Growth</h3>
            <p>Launch and continuously improve.</p>
          </div>
        </div>

        {/* <h2>Digital Transformation</h2>
            <p>Business Challenge &rarr; Strategy &rarr; Design &rarr; Technology &rarr; Launch &rarr; Growth</p> */}
      </section>
      <section className="section">
        <div className="section-title">
          <p>WHAT WE DO</p>

          <h2>Technology Solutions</h2>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <span>01</span>
            <h3>Web Development</h3>
            <p>Modern responsive websites and web applications.</p>
          </div>

          <div className="service-card">
            <span>02</span>
            <h3>App Development</h3>
            <p>Powerful mobile applications for modern businesses.</p>
          </div>

          <div className="service-card">
            <span>03</span>
            <h3>Digital Marketing</h3>
            <p>Digital strategies that improve online visibility.</p>
          </div>

          <div className="service-card">
            <span>04</span>
            <h3>AR / VR</h3>
            <p>Immersive interactive digital experiences.</p>
          </div>

          <div className="service-card">
            <span>05</span>
            <h3>3D Modeling</h3>
            <p>Interactive 3D models and product visualization.</p>
          </div>

          <div className="service-card">
            <span>06</span>
            <h3>UI / UX Design</h3>
            <p>User-centered interfaces and digital experiences.</p>
          </div>
        </div>

        {/* <h2>Technology Solution</h2>
        <p>
          Web Development, App Development, Digital Marketing, AR/VR, 3D
          Modelling, UI/UX Design.
        </p> */}
      </section>
    </div>
  );
};

export default Home;
