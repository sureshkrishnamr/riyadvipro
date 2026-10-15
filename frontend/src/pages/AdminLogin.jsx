import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/admin/login",
        formData
      );

      // Save JWT
      localStorage.setItem(
        "adminToken",
        response.data.token
      );

      localStorage.setItem(
        "adminUser",
        JSON.stringify(response.data.admin)
      );

      // Go to dashboard
      navigate("/admin/dashboard");

    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="admin-login-page">

      <div className="admin-login-box">

        <p className="hero-small-title">
          ADMIN PANEL
        </p>

        <h1>
          Admin <span>Login</span>
        </h1>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>
              Username
            </label>

            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
            />

          </div>


          <div className="form-group">

            <label>
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />

          </div>


          {error && (
            <p className="admin-error">
              {error}
            </p>
          )}


          <button
            type="submit"
            className="primary-button"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login →"}
          </button>

        </form>

      </div>

    </main>
  );
}

export default AdminLogin;