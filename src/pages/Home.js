import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-box">
        <div className="home-icon">
          <i className="fas fa-building"></i>
        </div>
        <h1>Welcome to Dashboard Portal</h1>
        <p>Streamline your workflow with our comprehensive management system</p>
        <div className="home-features">
          <div className="feature-item">
            <i className="fas fa-chart-line"></i>
            <span>Real-time Analytics</span>
          </div>
          <div className="feature-item">
            <i className="fas fa-users"></i>
            <span>Team Management</span>
          </div>
          <div className="feature-item">
            <i className="fas fa-calendar-check"></i>
            <span>Attendance Tracking</span>
          </div>
        </div>
        <button className="home-button" onClick={() => navigate('/login')}>
          Get Started
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Home;
