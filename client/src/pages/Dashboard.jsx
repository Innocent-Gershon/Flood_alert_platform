import React, { useState } from 'react';
import '../Dashboard.css';

const Dashboard = () => {
  const [form, setForm] = useState({
    message: '',
    region: '',
    severity: 'moderate',
    language: 'en',
  });

  const [alerts, setAlerts] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendAlert = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/alerts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      alert(`✅ Alert sent: ${data.message}`);

      // Add to recent alerts
      setAlerts((prev) => [{ ...form, timestamp: new Date().toLocaleString() }, ...prev]);
      setForm({ message: '', region: '', severity: 'moderate', language: 'en' });
    } catch (err) {
      alert('❌ Failed to send alert');
      console.error(err);
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>GhaFlood</h2>
        <nav>
          <ul>
            <li>📡 Send Alert</li>
            <li>📜 Alert History</li>
            <li>🌧️ Sensor Data</li>
            <li>⚙️ Settings</li>
          </ul>
        </nav>
      </aside>

      <main className="main-panel">
        <header className="dashboard-header">
          <h1>Flood Alert Dashboard</h1>
        </header>

        <div className="dashboard-grid">
          {/* Alert Form */}
          <section className="card">
            <h2>📡 Send New Alert</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <label>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} />

              <label>Region</label>
              <select name="region" value={form.region} onChange={handleChange}>
                <option value="">Select Region</option>
                <option value="Accra">Accra</option>
                <option value="Volta">Volta Region</option>
                <option value="Northern">Northern Region</option>
              </select>

              <label>Severity</label>
              <select name="severity" value={form.severity} onChange={handleChange}>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
                <option value="extreme">Extreme</option>
              </select>

              <label>Language</label>
              <select name="language" value={form.language} onChange={handleChange}>
                <option value="en">English</option>
                <option value="tw">Twi</option>
                <option value="ee">Ewe</option>
                <option value="ga">Ga</option>
                <option value="ha">Hausa</option>
                <option value="dg">Dagbani</option>
              </select>

              <button type="button" onClick={sendAlert}>🚨 Send Alert</button>
            </form>
          </section>

          {/* Recent Alerts */}
          <section className="card">
            <h2>📜 Recent Alerts</h2>
            <ul className="alert-list">
              {alerts.length === 0 ? (
                <li>No alerts sent yet.</li>
              ) : (
                alerts.map((alert, index) => (
                  <li key={index}>
                    <strong>{alert.region}</strong> - {alert.message} 
                    <span className={`badge ${alert.severity}`}>{alert.severity}</span>
                    <div className="timestamp">{alert.timestamp}</div>
                  </li>
                ))
              )}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
