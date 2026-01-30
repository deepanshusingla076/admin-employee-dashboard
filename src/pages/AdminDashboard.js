import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Alice Johnson', role: 'Developer', team: 'Team A', status: 'Active' },
    { id: 2, name: 'Bob Smith', role: 'Designer', team: 'Team A', status: 'Active' },
    { id: 3, name: 'Charlie Brown', role: 'Developer', team: 'Team B', status: 'Active' },
  ]);
  const [projects, setProjects] = useState([
    { id: 1, name: 'Website Redesign', status: 'In Progress', deadline: '2026-02-15', team: 'Team A' },
    { id: 2, name: 'Mobile App Development', status: 'Planning', deadline: '2026-03-20', team: 'Team B' },
    { id: 3, name: 'Database Migration', status: 'Completed', deadline: '2026-01-28', team: 'Team C' },
  ]);
  const [newEmployee, setNewEmployee] = useState({ name: '', role: '', team: '', email: '' });
  const [newProject, setNewProject] = useState({ name: '', team: '', deadline: '', description: '' });

  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (newEmployee.name && newEmployee.role && newEmployee.team) {
      setEmployees([...employees, { id: employees.length + 1, ...newEmployee, status: 'Active' }]);
      setNewEmployee({ name: '', role: '', team: '', email: '' });
      setShowAddEmployee(false);
      alert('Employee added successfully!');
    }
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    if (newProject.name && newProject.team && newProject.deadline) {
      setProjects([...projects, { id: projects.length + 1, ...newProject, status: 'Planning' }]);
      setNewProject({ name: '', team: '', deadline: '', description: '' });
      setShowAddProject(false);
      alert('Project added successfully!');
    }
  };

  const handleDeleteEmployee = (id) => {
    if (window.confirm('Are you sure you want to remove this employee?')) {
      setEmployees(employees.filter(emp => emp.id !== id));
    }
  };

  const handleDeleteProject = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(proj => proj.id !== id));
    }
  };

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <div className="logo">
          <i className="fas fa-user-shield"></i>
          <span>Admin Dashboard</span>
        </div>
        <ul className="nav-links">
          <li className="active">
            <a href="#home">
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
        <div className="profile-link">
          <a onClick={() => navigate('/profile')}>
            <i className="fas fa-user-circle"></i> Profile
          </a>
        </div>
      </nav>

      <main className="main-content">
        <div className="main-header">
          <h1>Welcome, Admin</h1>
          <i className="fas fa-cog settings-icon"></i>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <img src="https://img.freepik.com/free-vector/user-group-with-shadow_78370-7019.jpg?ga=GA1.1.1245763255.1726117694&semt=ais_hybrid" alt="Users" />
            <h3>Total Users</h3>
            <p className="stat-number">200</p>
          </div>
          <div className="stat-card">
            <img src="https://img.freepik.com/free-photo/business-report-graphs-charts-business-reports-pile-documents-business-concept_1150-2254.jpg?ga=GA1.1.1245763255.1726117694&semt=ais_hybrid" alt="Reports" />
            <h3>Reports Generated</h3>
            <p className="stat-number">20</p>
          </div>
          <div className="stat-card">
            <img src="https://img.freepik.com/free-vector/flat-design-content-management-system-illustrated_23-2148816269.jpg?ga=GA1.1.1245763255.1726117694&semt=ais_hybrid" alt="System Settings" />
            <h3>System Settings</h3>
            <p className="stat-number">15</p>
          </div>
        </div>

        <div className="action-buttons">
          <button className="action-btn add-employee" onClick={() => setShowAddEmployee(true)}>
            <i className="fas fa-user-plus"></i> Add Employee
          </button>
          <button className="action-btn add-project" onClick={() => setShowAddProject(true)}>
            <i className="fas fa-folder-plus"></i> Add Project
          </button>
        </div>

        <div className="content-grid">
          <div className="content-section employees-section">
            <h2>Employee Management</h2>
            <div className="employees-table-container">
              <table className="mini-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Team</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.slice(0, 3).map(emp => (
                    <tr key={emp.id}>
                      <td><i className="fas fa-user-circle"></i> {emp.name}</td>
                      <td>{emp.role}</td>
                      <td>{emp.team}</td>
                      <td><span className="status-active">{emp.status}</span></td>
                      <td>
                        <button className="delete-btn-mini" onClick={() => handleDeleteEmployee(emp.id)}>
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="view-all-btn" onClick={() => setShowAddEmployee(true)}>
              View All Employees
            </button>
          </div>

          <div className="content-section projects-section">
            <h2>Project Management</h2>
            <div className="project-list">
              {projects.slice(0, 3).map(proj => (
                <div key={proj.id} className="project-item">
                  <div className="project-info">
                    <strong><i className="fas fa-folder"></i> {proj.name}</strong>
                    <span className="project-meta">
                      {proj.team} • Deadline: {proj.deadline}
                    </span>
                  </div>
                  <div className="project-actions">
                    <span className={`project-status-badge ${proj.status.toLowerCase().replace(' ', '-')}`}>
                      {proj.status}
                    </span>
                    <button className="delete-btn-mini" onClick={() => handleDeleteProject(proj.id)}>
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="view-all-btn" onClick={() => setShowAddProject(true)}>
              View All Projects
            </button>
          </div>
        </div>

        <div className="content-grid">
          <div className="content-section attendance-section">
            <h2>Quick Attendance Overview</h2>
            <div className="team-list">
              <div className="team-item">
                <span>Team A</span>
                <span className="attendance-rate">92%</span>
              </div>
              <div className="team-item">
                <span>Team B</span>
                <span className="attendance-rate">88%</span>
              </div>
              <div className="team-item">
                <span>Team C</span>
                <span className="attendance-rate">95%</span>
              </div>
            </div>
            <button className="view-all-btn" onClick={() => navigate('/attendance')}>
              View Full Attendance
            </button>
          </div>

          <div className="content-section analytics-section">
            <h2>Recent Analytics</h2>
            <ul className="analytics-list">
              <li>
                <i className="fas fa-chart-pie"></i>
                Assignment Completion (85%)
              </li>
              <li>
                <i className="fas fa-calendar-check"></i>
                On-time Completion Rate (78%)
              </li>
              <li>
                <i className="fas fa-clock"></i>
                Average Time Taken (4.5 hours)
              </li>
            </ul>
            <button className="view-all-btn" onClick={() => navigate('/report')}>
              View Analytics
            </button>
          </div>
        </div>
      </main>

      {/* Add Employee Modal */}
      {showAddEmployee && (
        <div className="modal-overlay" onClick={() => setShowAddEmployee(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2><i className="fas fa-user-plus"></i> Add New Employee</h2>
              <button className="close-btn" onClick={() => setShowAddEmployee(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form onSubmit={handleAddEmployee} className="modal-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter employee name"
                  value={newEmployee.name}
                  onChange={(e) => setNewEmployee({...newEmployee, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="employee@company.com"
                  value={newEmployee.email}
                  onChange={(e) => setNewEmployee({...newEmployee, email: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Role/Position</label>
                <select
                  value={newEmployee.role}
                  onChange={(e) => setNewEmployee({...newEmployee, role: e.target.value})}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Manager">Manager</option>
                  <option value="Analyst">Analyst</option>
                  <option value="Tester">Tester</option>
                </select>
              </div>
              <div className="form-group">
                <label>Team</label>
                <select
                  value={newEmployee.team}
                  onChange={(e) => setNewEmployee({...newEmployee, team: e.target.value})}
                  required
                >
                  <option value="">Select Team</option>
                  <option value="Team A">Team A</option>
                  <option value="Team B">Team B</option>
                  <option value="Team C">Team C</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={() => setShowAddEmployee(false)}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  <i className="fas fa-check"></i> Add Employee
                </button>
              </div>
            </form>
            <div className="employee-list-section">
              <h3>All Employees ({employees.length})</h3>
              <div className="employee-cards">
                {employees.map(emp => (
                  <div key={emp.id} className="employee-card">
                    <div className="employee-card-info">
                      <i className="fas fa-user-circle"></i>
                      <div>
                        <strong>{emp.name}</strong>
                        <span>{emp.role} • {emp.team}</span>
                      </div>
                    </div>
                    <button className="delete-btn-card" onClick={() => handleDeleteEmployee(emp.id)}>
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Project Modal */}
      {showAddProject && (
        <div className="modal-overlay" onClick={() => setShowAddProject(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2><i className="fas fa-folder-plus"></i> Add New Project</h2>
              <button className="close-btn" onClick={() => setShowAddProject(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form onSubmit={handleAddProject} className="modal-form">
              <div className="form-group">
                <label>Project Name</label>
                <input
                  type="text"
                  placeholder="Enter project name"
                  value={newProject.name}
                  onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Assigned Team</label>
                <select
                  value={newProject.team}
                  onChange={(e) => setNewProject({...newProject, team: e.target.value})}
                  required
                >
                  <option value="">Select Team</option>
                  <option value="Team A">Team A</option>
                  <option value="Team B">Team B</option>
                  <option value="Team C">Team C</option>
                </select>
              </div>
              <div className="form-group">
                <label>Deadline</label>
                <input
                  type="date"
                  value={newProject.deadline}
                  onChange={(e) => setNewProject({...newProject, deadline: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  placeholder="Project description..."
                  value={newProject.description}
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                  rows="4"
                />
              </div>
              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={() => setShowAddProject(false)}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  <i className="fas fa-check"></i> Add Project
                </button>
              </div>
            </form>
            <div className="employee-list-section">
              <h3>All Projects ({projects.length})</h3>
              <div className="project-cards">
                {projects.map(proj => (
                  <div key={proj.id} className="project-card">
                    <div className="project-card-header">
                      <strong><i className="fas fa-folder"></i> {proj.name}</strong>
                      <span className={`project-status-badge ${proj.status.toLowerCase().replace(' ', '-')}`}>
                        {proj.status}
                      </span>
                    </div>
                    <div className="project-card-body">
                      <span><i className="fas fa-users"></i> {proj.team}</span>
                      <span><i className="fas fa-calendar"></i> {proj.deadline}</span>
                    </div>
                    <button className="delete-btn-card" onClick={() => handleDeleteProject(proj.id)}>
                      <i className="fas fa-trash"></i> Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
