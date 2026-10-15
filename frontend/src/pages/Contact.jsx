import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    subject: ""
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handlechange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      console.log(form);

      const response = await axios.post(
        "http://localhost:3000/api/contact/",
        form,
      );
      setStatus({
        type: "success",
        message: response.data.message,
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        subject: ""
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.response?.data?.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar/>
      <main className="contact-page">
        <section className="contact-header">
          <p className="hero-small-title">GET IN TOUCH</p>
          <h1>
            Let's Start a <span>Conversation</span>
          </h1>
          <p>Tell us about your project and we will get back to you</p>
        </section>
        <section className="contact-container">
          <form className="contact-form" onSubmit={handlesubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name *</label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handlechange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email *</label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handlechange}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone *</label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handlechange}
                  placeholder="Phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label>Company</label>

                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handlechange}
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject *</label>

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handlechange}
                placeholder="How can we help?"
                required
              />
            </div>

            <div className="form-group">
              <label>Message *</label>

              <textarea
                name="message"
                value={form.message}
                onChange={handlechange}
                placeholder="Tell us about your project..."
                rows="7"
                required
              />
            </div>

            <button type="submit" className="primary-button" disabled={loading}>
              {loading ? "Sending..." : "Send Message →"}
            </button>

            {status.message && (
              <p className={`form-status ${status.type}`}>{status.message}</p>
            )}
          </form>
        </section>
      </main>
      {/* <h1>Contact Us</h1>
      <form onSubmit={handlesubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handlechange}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handlechange}
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handlechange}
        />
        <input
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handlechange}
        />
        <input
          name="requirement"
          placeholder="Requirement"
          value={form.requirement}
          onChange={handlechange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handlechange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p> */}
    </>
  );
};

export default Contact;
