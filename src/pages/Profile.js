import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <div className="logo">
          <i className="fas fa-user-shield"></i>
          <span>Dashboard</span>
        </div>
        <ul className="nav-links">
          <li>
            <a onClick={() => navigate('/admin')}>
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          <li>
            <a onClick={() => navigate('/attendance')}>
              <i className="fas fa-users"></i> Attendance
            </a>
          </li>
          <li>
            <a onClick={() => navigate('/report')}>
              <i className="fas fa-chart-line"></i> Analytics
            </a>
          </li>
          <li>
            <a onClick={() => navigate('/')}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </a>
          </li>
        </ul>
        <div className="profile-link active">
          <a href="#profile">
            <i className="fas fa-user-circle"></i> Profile
          </a>
        </div>
      </nav>

      <main className="main-content">
        <div className="main-header">
          <h1>My Profile</h1>
          <i className="fas fa-cog settings-icon"></i>
        </div>

        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar">
                <i className="fas fa-user-circle"></i>
              </div>
              <h2>Admin User</h2>
              <p className="profile-role">System Administrator</p>
            </div>

            <div className="profile-info">
              <div className="info-group">
                <h3>Personal Information</h3>
                <div className="info-row">
                  <span className="info-label"><i className="fas fa-envelope"></i> Email</span>
                  <span className="info-value">admin@dashboard.com</span>
                </div>
                <div className="info-row">
                  <span className="info-label"><i className="fas fa-phone"></i> Phone</span>
                  <span className="info-value">+1 (555) 123-4567</span>
                </div>
                <div className="info-row">
                  <span className="info-label"><i className="fas fa-map-marker-alt"></i> Location</span>
                  <span className="info-value">New York, USA</span>
                </div>
                <div className="info-row">
                  <span className="info-label"><i className="fas fa-calendar"></i> Join Date</span>
                  <span className="info-value">January 1, 2024</span>
                </div>
              </div>

              <div className="info-group">
                <h3>Account Details</h3>
                <div className="info-row">
                  <span className="info-label"><i className="fas fa-user"></i> Username</span>
                  <span className="info-value">admin</span>
                </div>
                <div className="info-row">
                  <span className="info-label"><i className="fas fa-shield-alt"></i> Role</span>
                  <span className="info-value">Administrator</span>
                </div>
                <div className="info-row">
                  <span className="info-label"><i className="fas fa-check-circle"></i> Status</span>
                  <span className="info-value status-active">Active</span>
                </div>
              </div>

              <div className="info-group">
                <h3>Security</h3>
                <button className="profile-action-btn">
                  <i className="fas fa-key"></i> Change Password
                </button>
                <button className="profile-action-btn">
                  <i className="fas fa-mobile-alt"></i> Enable 2FA
                </button>
              </div>

              <button className="profile-edit-btn">
                <i className="fas fa-edit"></i> Edit Profile
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
