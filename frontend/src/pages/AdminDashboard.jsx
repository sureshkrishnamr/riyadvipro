
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminDashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalContacts: 0,
    totalHealthCheckups: 0,
  });

  const [contacts, setContacts] = useState([]);
  const [healthCheckups, setHealthCheckups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin/login");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        setLoading(true);
        setError("");

        // 1. Fetch dashboard statistics
        const statsResponse = await axios.get(
          "http://localhost:3000/api/admin/stats",
          config
        );

        setStats(statsResponse.data.data);

        // 2. Fetch contact messages
        const contactsResponse = await axios.get(
          "http://localhost:3000/api/admin/contacts",
          config
        );

        setContacts(contactsResponse.data.data);

        // 3. Fetch health checkup requests
        const healthResponse = await axios.get(
          "http://localhost:3000/api/admin/health-checkups",
          config
        );

        setHealthCheckups(healthResponse.data.data);
      } catch (err) {
        console.error("Dashboard Error:", err);

        if (err.response?.status === 401) {
          localStorage.removeItem("adminToken");
          localStorage.removeItem("adminUser");
          navigate("/admin/login");
          return;
        }

        setError(
          err.response?.data?.message ||
            "Unable to load dashboard data. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    navigate("/admin/login");
  };

  return (
    <div className="admin-dashboard">
      {/* Dashboard Header */}
      <header className="admin-dashboard-header">
        <div>
          <p className="hero-small-title">RIYADVI ADMIN PANEL</p>
          <h1>Admin Dashboard</h1>
          <p>Manage your contact messages and business health checkups.</p>
        </div>

        <button
          type="button"
          className="admin-logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      {error && <div className="admin-error">{error}</div>}

      {loading ? (
        <div className="admin-loading">Loading dashboard...</div>
      ) : (
        <>
          {/* Dashboard Statistics */}
          <section className="admin-stats">
            <div className="admin-stat-card">
              <p>Total Contact Messages</p>
              <h2>{stats.totalContacts}</h2>
            </div>

            <div className="admin-stat-card">
              <p>Total Health Checkups</p>
              <h2>{stats.totalHealthCheckups}</h2>
            </div>
          </section>

          {/* Contact Messages Table */}
          <section className="admin-section">
            <div className="admin-section-header">
              <div>
                <p className="hero-small-title">CUSTOMER ENQUIRIES</p>
                <h2>Contact Messages</h2>
              </div>

              <span className="count-badge">{contacts.length}</span>
            </div>

            {contacts.length === 0 ? (
              <div className="empty-state">
                No contact messages found.
              </div>
            ) : (
              <div className="table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Company</th>
                      <th>Subject</th>
                      <th>Message</th>
                      <th>Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {contacts.map((item) => (
                      <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.company || "-"}</td>
                        <td>{item.subject}</td>
                        <td className="message-cell">{item.message}</td>
                        <td>
                          {item.createdAt
                            ? new Date(item.createdAt).toLocaleDateString()
                            : "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          {/* Health Checkup Requests Table */}
          <section className="admin-section">
            <div className="admin-section-header">
              <div>
                <p className="hero-small-title">BUSINESS ANALYSIS</p>
                <h2>Health Checkup Requests</h2>
              </div>

              <span className="count-badge">
                {healthCheckups.length}
              </span>
            </div>

            {healthCheckups.length === 0 ? (
              <div className="empty-state">
                No health checkup requests found.
              </div>
            ) : (
              <div className="table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Company</th>
                      <th>Website</th>
                      <th>Business Type</th>
                      <th>Challenges</th>
                      <th>Services</th>
                      <th>Budget</th>
                      <th>Timeline</th>
                      <th>Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {healthCheckups.map((item) => (
                      <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.company}</td>
                        <td>{item.website || "-"}</td>
                        <td>{item.businessType}</td>
                        <td className="message-cell">{item.challenges}</td>
                        <td>
                          {Array.isArray(item.services)
                            ? item.services.join(", ")
                            : "-"}
                        </td>
                        <td>{item.budget}</td>
                        <td>{item.timeline}</td>
                        <td>
                          {item.createdAt
                            ? new Date(item.createdAt).toLocaleDateString()
                            : "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}

export default AdminDashboard;
