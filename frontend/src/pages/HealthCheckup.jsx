// import { useState } from "react"

// const HealthCheckup = () => {
//   const [step, setStep] = useState(1);
//   const nextstep = () => {
//     setStep(step + 1)
//   }
//   const prevstep = () => {
//     setStep(step - 1)
//   }
//   return (
//     <div>
//       <h1>Business Health Checkup</h1>
//       {
//         step === 1 && (
//           <div>
//             <h2>Business Information</h2>
//             <input
//               placeholder="Business Name"
//             />
//             <button onClick={nextstep}>
//               next
//             </button>
//           </div>
//         )
//       }
//       {
//         step === 2 && (
//           <div>
//             <h2>Website & Digital Presence</h2>
//             <input
//               placeholder="Website URL"
//             />
//             <button onClick={prevstep}>
//               Back
//             </button>
//             <button onClick={nextstep}>
//               next
//             </button>

//           </div>
//         )
//       }
//       {
//         step === 3 && (
//           <div>
//             <h2>Marketing</h2>
//             <textarea/>
//              <button onClick={prevstep}>
//               Back
//             </button>
//             <button onClick={nextstep}>
//               next
//             </button>
//           </div>
//         )
//       }
//       {
//         step === 4 && (
//           <div>
//             <h2>Technology</h2>
//             <textarea/>
//              <button onClick={prevstep}>
//               Back
//             </button>
//             <button onClick={nextstep}>
//               next
//             </button>
//           </div>
//         )
//       }
//       {
//         step === 5 && (
//           <div>
//             <h2>Business Challenges</h2>
//             <textarea />
//              <button onClick={prevstep}>
//               Back
//             </button>
//             <button onClick={nextstep}>
//               next
//             </button>
//           </div>
//         )
//       }
//       {
//         step === 6 && (
//           <div>
//             <h2>Thanking you</h2>
//             <button onClick={prevstep}>
//               Back
//             </button>
//           </div>
//         )
//       }
//     </div>
//   )
// }

// export default HealthCheckup
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function HealthCheckup() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    businessType: "",
    challenges: "",
    services: [],
    budget: "",
    timeline: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });


  const serviceOptions = [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "Digital Marketing",
    "AR / VR",
    "3D Modeling",
  ];


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };


  const handleServiceChange = (service) => {

    setFormData((previous) => {

      const alreadySelected =
        previous.services.includes(service);

      return {
        ...previous,

        services: alreadySelected
          ? previous.services.filter(
              (item) => item !== service
            )
          : [...previous.services, service],
      };
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    if (formData.services.length === 0) {

      setStatus({
        type: "error",
        message:
          "Please select at least one service.",
      });

      return;
    }

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      console.log(formData);
      
      const response = await axios.post(
        "http://localhost:3000/api/health-checkup/",
        formData
      );

      setStatus({
        type: "success",
        message: response.data.message,
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
        businessType: "",
        challenges: "",
        services: [],
        budget: "",
        timeline: "",
      });

    } catch (error) {

      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Something went wrong",
      });

    } finally {

      setLoading(false);
    }
  };


  return (
    <>
      <Navbar />

      <main className="health-page">

        <section className="health-header">

          <p className="hero-small-title">
            BUSINESS HEALTH CHECKUP
          </p>

          <h1>
            Let's Understand Your{" "}
            <span>Business</span>
          </h1>

          <p>
            Tell us about your business, challenges
            and goals. We'll identify areas where
            digital solutions can help.
          </p>

        </section>


        <section className="health-container">

          <form
            className="health-form"
            onSubmit={handleSubmit}
          >

            {/* Personal Information */}

            <div className="form-section">

              <h2>
                Basic Information
              </h2>

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              <div className="form-row">

                <div className="form-group">

                  <label>
                    Company *
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Website
                  </label>

                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://"
                  />

                </div>

              </div>


              <div className="form-group">

                <label>
                  Business Type *
                </label>

                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select business type
                  </option>

                  <option value="E-Commerce">
                    E-Commerce
                  </option>

                  <option value="Manufacturing">
                    Manufacturing
                  </option>

                  <option value="Healthcare">
                    Healthcare
                  </option>

                  <option value="Education">
                    Education
                  </option>

                  <option value="Finance">
                    Finance
                  </option>

                  <option value="Technology">
                    Technology
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

            </div>


            {/* Challenges */}

            <div className="form-section">

              <h2>
                Business Challenges
              </h2>

              <div className="form-group">

                <label>
                  What challenges are you facing? *
                </label>

                <textarea
                  name="challenges"
                  value={formData.challenges}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell us about your current business or digital challenges..."
                  required
                />

              </div>

            </div>


            {/* Services */}

            <div className="form-section">

              <h2>
                Services You Need
              </h2>

              <p className="form-help">
                Select one or more services.
              </p>

              <div className="checkbox-grid">

                {serviceOptions.map(
                  (service) => (

                    <label
                      className="checkbox-item"
                      key={service}
                    >

                      <input
                        type="checkbox"
                        checked={formData.services.includes(
                          service
                        )}
                        onChange={() =>
                          handleServiceChange(
                            service
                          )
                        }
                      />

                      <span>
                        {service}
                      </span>

                    </label>

                  )
                )}

              </div>

            </div>


            {/* Budget and Timeline */}

            <div className="form-section">

              <h2>
                Project Planning
              </h2>

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Estimated Budget *
                  </label>

                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select budget
                    </option>

                    <option value="Below ₹1 Lakh">
                      Below ₹1 Lakh
                    </option>

                    <option value="₹1 Lakh - ₹3 Lakh">
                      ₹1 Lakh - ₹3 Lakh
                    </option>

                    <option value="₹3 Lakh - ₹5 Lakh">
                      ₹3 Lakh - ₹5 Lakh
                    </option>

                    <option value="Above ₹5 Lakh">
                      Above ₹5 Lakh
                    </option>

                  </select>

                </div>


                <div className="form-group">

                  <label>
                    Timeline *
                  </label>

                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select timeline
                    </option>

                    <option value="Less than 1 Month">
                      Less than 1 Month
                    </option>

                    <option value="1 - 3 Months">
                      1 - 3 Months
                    </option>

                    <option value="3 - 6 Months">
                      3 - 6 Months
                    </option>

                    <option value="More than 6 Months">
                      More than 6 Months
                    </option>

                  </select>

                </div>

              </div>

            </div>


            <button
              type="submit"
              className="primary-button"
              disabled={loading}
            >

              {loading
                ? "Submitting..."
                : "Submit Health Checkup →"}

            </button>


            {status.message && (
              <p
                className={`form-status ${status.type}`}
              >
                {status.message}
              </p>
            )}

          </form>

        </section>

      </main>
    </>
  );
}

export default HealthCheckup;