import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';
import '../styles/Attendance.css';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const Attendance = () => {
  const navigate = useNavigate();
  const [selectedTeam, setSelectedTeam] = useState('Team A');

  const teamMembers = {
    "Team A": [
      { name: "Alice Johnson", attendance: [1, 1, 0, 1, 1, 0, 1], role: "Developer" },
      { name: "Bob Smith", attendance: [1, 0, 1, 1, 0, 1, 1], role: "Designer" },
      { name: "Carol White", attendance: [1, 1, 1, 1, 1, 1, 0], role: "Manager" },
    ],
    "Team B": [
      { name: "Charlie Brown", attendance: [1, 1, 1, 0, 1, 1, 0], role: "Developer" },
      { name: "David Lee", attendance: [0, 0, 1, 1, 1, 1, 1], role: "Analyst" },
      { name: "Emma Davis", attendance: [1, 1, 1, 1, 1, 0, 1], role: "Designer" },
    ],
    "Team C": [
      { name: "Eva Martinez", attendance: [1, 1, 1, 1, 0, 1, 1], role: "Developer" },
      { name: "Frank Wilson", attendance: [1, 0, 1, 1, 1, 0, 1], role: "Manager" },
      { name: "Grace Taylor", attendance: [1, 1, 0, 1, 1, 1, 1], role: "Designer" },
    ],
  };

  const members = teamMembers[selectedTeam];
  const totalPresent = members.reduce((sum, m) => sum + m.attendance.filter(d => d === 1).length, 0);
  const totalAbsent = members.reduce((sum, m) => sum + m.attendance.filter(d => d === 0).length, 0);

  const pieData = {
    labels: ['Present', 'Absent'],
    datasets: [{
      data: [totalPresent, totalAbsent],
      backgroundColor: ['#4CAF50', '#f44336'],
      borderWidth: 2,
    }]
  };

  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Attendance Rate',
      data: members[0] ? members[0].attendance.map((_, idx) => 
        (members.reduce((sum, m) => sum + m.attendance[idx], 0) / members.length * 100).toFixed(0)
      ) : [],
      borderColor: '#2196F3',
      backgroundColor: 'rgba(33, 150, 243, 0.1)',
      tension: 0.4,
    }]
  };

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
          <li className="active">
            <a href="#attendance">
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
        <div className="profile-link">
          <a onClick={() => navigate('/profile')}>
            <i className="fas fa-user-circle"></i> Profile
          </a>
        </div>
      </nav>

      <main className="main-content">
        <div className="main-header">
          <h1>Attendance Management</h1>
          <i className="fas fa-cog settings-icon"></i>
        </div>

        <div className="attendance-container">
          <div className="team-selector-section">
            <h2>Select Team</h2>
            <div className="team-buttons">
              {Object.keys(teamMembers).map(team => (
                <button
                  key={team}
                  className={`team-btn ${selectedTeam === team ? 'active' : ''}`}
                  onClick={() => setSelectedTeam(team)}
                >
                  {team}
                </button>
              ))}
            </div>
          </div>

          <div className="attendance-details">
            <h2>Attendance for: {selectedTeam}</h2>
            
            <div className="members-table">
              <table>
                <thead>
                  <tr>
                    <th>Member</th>
                    <th>Role</th>
                    <th>Present Days</th>
                    <th>Attendance Rate</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member, idx) => {
                    const presentDays = member.attendance.filter(d => d === 1).length;
                    const totalDays = member.attendance.length;
                    const rate = ((presentDays / totalDays) * 100).toFixed(0);
                    return (
                      <tr key={idx}>
                        <td>
                          <i className="fas fa-user-circle"></i> {member.name}
                        </td>
                        <td>{member.role}</td>
                        <td>{presentDays} / {totalDays}</td>
                        <td>
                          <div className="progress-bar">
                            <div className="progress-fill" style={{width: `${rate}%`}}></div>
                          </div>
                          <span>{rate}%</span>
                        </td>
                        <td>
                          <span className={`status-badge ${rate >= 80 ? 'good' : rate >= 60 ? 'average' : 'poor'}`}>
                            {rate >= 80 ? 'Excellent' : rate >= 60 ? 'Good' : 'Needs Improvement'}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="charts-section">
              <div className="chart-card">
                <h3>Attendance Distribution</h3>
                <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: true }} />
              </div>
              <div className="chart-card">
                <h3>Weekly Attendance Trend</h3>
                <Line data={lineData} options={{ responsive: true, maintainAspectRatio: true }} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Attendance;
