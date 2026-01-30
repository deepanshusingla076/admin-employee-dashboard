import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import '../styles/Report.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Report = () => {
  const navigate = useNavigate();

  const barData = {
    labels: ['Team A', 'Team B', 'Team C'],
    datasets: [
      {
        label: 'Assignment Completion (%)',
        data: [85, 78, 92],
        backgroundColor: '#4CAF50',
      },
      {
        label: 'On-time Delivery (%)',
        data: [80, 75, 88],
        backgroundColor: '#2196F3',
      }
    ]
  };

  const doughnutData = {
    labels: ['Completed', 'In Progress', 'Pending', 'Overdue'],
    datasets: [{
      data: [45, 25, 20, 10],
      backgroundColor: ['#4CAF50', '#2196F3', '#FFC107', '#f44336'],
      borderWidth: 2,
    }]
  };

  const projectData = [
    { name: 'Project Alpha', status: 'Completed', progress: 100, deadline: 'Jan 15, 2026' },
    { name: 'Project Beta', status: 'In Progress', progress: 65, deadline: 'Feb 5, 2026' },
    { name: 'Project Gamma', status: 'In Progress', progress: 40, deadline: 'Feb 20, 2026' },
    { name: 'Project Delta', status: 'Pending', progress: 10, deadline: 'Mar 1, 2026' },
  ];

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <div className="logo">
          <i className="fas fa-user-shield"></i>
          <span>Admin Dashboard</span>
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
          <li className="active">
            <a href="#analytics">
              <i className="fas fa-chart-line"></i> Analytics
            </a>
          </li>
          <li>
            <a onClick={() => navigate('/')}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </a>
          </li>
        </ul>
        <div className="profile-link">
          <a onClick={() => navigate('/profile')}>
            <i className="fas fa-user-circle"></i> Profile
          </a>
        </div>
      </nav>

      <main className="main-content">
        <div className="main-header">
          <h1>Analytics & Reports</h1>
          <button className="export-btn">
            <i className="fas fa-download"></i> Export Report
          </button>
        </div>

        <div className="report-stats">
          <div className="report-stat-card">
            <i className="fas fa-tasks"></i>
            <div>
              <h3>Total Projects</h3>
              <p>24</p>
            </div>
          </div>
          <div className="report-stat-card">
            <i className="fas fa-check-circle"></i>
            <div>
              <h3>Completed</h3>
              <p>18</p>
            </div>
          </div>
          <div className="report-stat-card">
            <i className="fas fa-spinner"></i>
            <div>
              <h3>In Progress</h3>
              <p>4</p>
            </div>
          </div>
          <div className="report-stat-card">
            <i className="fas fa-exclamation-circle"></i>
            <div>
              <h3>Pending</h3>
              <p>2</p>
            </div>
          </div>
        </div>

        <div className="charts-grid">
          <div className="chart-container">
            <h3>Team Performance Comparison</h3>
            <Bar 
              data={barData} 
              options={{
                responsive: true,
                plugins: {
                  legend: { position: 'top' },
                  title: { display: false }
                }
              }} 
            />
          </div>
          <div className="chart-container">
            <h3>Project Status Distribution</h3>
            <Doughnut 
              data={doughnutData} 
              options={{
                responsive: true,
                plugins: {
                  legend: { position: 'bottom' }
                }
              }} 
            />
          </div>
        </div>

        <div className="projects-table">
          <h3>Project Overview</h3>
          <table>
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Status</th>
                <th>Progress</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projectData.map((project, idx) => (
                <tr key={idx}>
                  <td><i className="fas fa-folder"></i> {project.name}</td>
                  <td>
                    <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </td>
                  <td>
                    <div className="project-progress">
                      <div className="progress-bar-report">
                        <div 
                          className="progress-fill-report" 
                          style={{width: `${project.progress}%`}}
                        ></div>
                      </div>
                      <span>{project.progress}%</span>
                    </div>
                  </td>
                  <td>{project.deadline}</td>
                  <td>
                    <button className="view-details-btn">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Report;
