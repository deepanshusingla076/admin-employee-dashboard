import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  const [showAddTask, setShowAddTask] = useState(false);
  const [showSubmitReport, setShowSubmitReport] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Submit the report', due: 'Today', status: 'pending', priority: 'high' },
    { id: 2, title: 'Attend the meeting at 3 PM', due: 'Today', status: 'in-progress', priority: 'medium' },
    { id: 3, title: 'Complete the presentation', due: 'Tomorrow', status: 'pending', priority: 'high' },
    { id: 4, title: 'Code review for feature X', due: '2 days', status: 'pending', priority: 'low' },
  ]);
  const [reports, setReports] = useState([
    { id: 1, title: 'Monthly Performance', date: 'Jan 25, 2026', status: 'approved' },
    { id: 2, title: 'Weekly Update', date: 'Jan 22, 2026', status: 'approved' },
    { id: 3, title: 'Expense Submission', date: 'Jan 18, 2026', status: 'pending' },
  ]);
  const [newTask, setNewTask] = useState({ title: '', due: '', priority: 'medium' });
  const [newReport, setNewReport] = useState({ title: '', description: '', type: '' });

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.title && newTask.due) {
      setTasks([...tasks, { 
        id: tasks.length + 1, 
        ...newTask, 
        status: 'pending' 
      }]);
      setNewTask({ title: '', due: '', priority: 'medium' });
      setShowAddTask(false);
      alert('Task added successfully!');
    }
  };

  const handleSubmitReport = (e) => {
    e.preventDefault();
    if (newReport.title && newReport.type) {
      const today = new Date();
      const dateStr = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      setReports([{ 
        id: reports.length + 1, 
        ...newReport, 
        date: dateStr,
        status: 'pending'
      }, ...reports]);
      setNewReport({ title: '', description: '', type: '' });
      setShowSubmitReport(false);
      alert('Report submitted successfully!');
    }
  };

  const handleDeleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  const handleToggleTaskStatus = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const newStatus = task.status === 'completed' ? 'pending' : 'completed';
        return { ...task, status: newStatus };
      }
      return task;
    }));
  };

  const completedTasks = tasks.filter(t => t.status === 'completed').length;
  const pendingTasks = tasks.filter(t => t.status === 'pending').length;

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <div className="logo">
          <i className="fas fa-user-tie"></i>
          <span>Employee Dashboard</span>
        </div>
        <ul className="nav-links">
          <li className="active">
            <a href="#home">
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          <li>
            <a href="#tasks">
              <i className="fas fa-tasks"></i> My Tasks
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
          <h1>Welcome, Employee</h1>
          <i className="fas fa-cog settings-icon"></i>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <img src="https://img.freepik.com/free-vector/project-management-goal-completion-list-questionnaire-survey-answering-business-organization-tool_335657-3289.jpg?size=626&ext=jpg" alt="Tasks" />
            <h3>Tasks Completed</h3>
            <p className="stat-number">{completedTasks}</p>
          </div>
          <div className="stat-card">
            <img src="https://img.freepik.com/free-vector/time-management-concept-landing-page_52683-21297.jpg?ga=GA1.1.1245763255.1726117694&semt=ais_hybrid" alt="Hours" />
            <h3>Pending Tasks</h3>
            <p className="stat-number">{pendingTasks}</p>
          </div>
          <div className="stat-card">
            <img src="https://img.freepik.com/free-vector/hand-drawn-business-planning-concept_23-2149166771.jpg?t=st=1726117791~exp=1726121391~hmac=dd9b3fd74f8ac72a75b5fe77568a68af68154d38c4df71d2e1e55c322b27ab0b&w=740" alt="Projects" />
            <h3>Reports Submitted</h3>
            <p className="stat-number">{reports.length}</p>
          </div>
        </div>

        <div className="action-buttons">
          <button className="action-btn add-employee" onClick={() => setShowAddTask(true)}>
            <i className="fas fa-plus-circle"></i> Add New Task
          </button>
          <button className="action-btn add-project" onClick={() => setShowSubmitReport(true)}>
            <i className="fas fa-file-upload"></i> Submit Report
          </button>
        </div>

        <div className="content-grid">
          <div className="content-section tasks-section">
            <h2>My Tasks ({tasks.length})</h2>
            <div className="task-list-enhanced">
              {tasks.map(task => (
                <div key={task.id} className={`task-item-enhanced ${task.status}`}>
                  <div className="task-checkbox">
                    <input 
                      type="checkbox" 
                      checked={task.status === 'completed'}
                      onChange={() => handleToggleTaskStatus(task.id)}
                    />
                  </div>
                  <div className="task-content">
                    <div className="task-header-row">
                      <strong className={task.status === 'completed' ? 'completed-text' : ''}>
                        {task.title}
                      </strong>
                      <span className={`priority-badge ${task.priority}`}>
                        {task.priority}
                      </span>
                    </div>
                    <div className="task-footer-row">
                      <span className="task-due">
                        <i className="fas fa-calendar"></i> Due: {task.due}
                      </span>
                      <span className={`task-status-badge ${task.status}`}>
                        {task.status === 'completed' ? 'Completed' : 
                         task.status === 'in-progress' ? 'In Progress' : 'Pending'}
                      </span>
                    </div>
                  </div>
                  <button className="delete-btn-mini" onClick={() => handleDeleteTask(task.id)}>
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="content-section reports-section">
            <h2>My Reports ({reports.length})</h2>
            <div className="report-list-enhanced">
              {reports.map(report => (
                <div key={report.id} className="report-item-enhanced">
                  <div className="report-icon">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <div className="report-content">
                    <strong>{report.title}</strong>
                    <span className="report-date">
                      <i className="fas fa-clock"></i> {report.date}
                    </span>
                  </div>
                  <span className={`report-status-badge ${report.status}`}>
                    {report.status === 'approved' ? '✓ Approved' : '⏳ Pending'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="content-section performance-section">
          <h2>Performance Overview</h2>
          <div className="performance-stats">
            <div className="perf-stat">
              <div className="perf-circle">
                <i className="fas fa-tasks"></i>
              </div>
              <div className="perf-info">
                <h4>Task Completion Rate</h4>
                <div className="progress-bar-perf">
                  <div className="progress-fill-perf" style={{width: `${(completedTasks / tasks.length * 100)}%`}}></div>
                </div>
                <span>{Math.round(completedTasks / tasks.length * 100)}%</span>
              </div>
            </div>
            <div className="perf-stat">
              <div className="perf-circle">
                <i className="fas fa-clock"></i>
              </div>
              <div className="perf-info">
                <h4>On-Time Delivery</h4>
                <div className="progress-bar-perf">
                  <div className="progress-fill-perf" style={{width: '87%'}}></div>
                </div>
                <span>87%</span>
              </div>
            </div>
            <div className="perf-stat">
              <div className="perf-circle">
                <i className="fas fa-star"></i>
              </div>
              <div className="perf-info">
                <h4>Quality Score</h4>
                <div className="progress-bar-perf">
                  <div className="progress-fill-perf" style={{width: '92%'}}></div>
                </div>
                <span>92%</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add Task Modal */}
      {showAddTask && (
        <div className="modal-overlay" onClick={() => setShowAddTask(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2><i className="fas fa-plus-circle"></i> Add New Task</h2>
              <button className="close-btn" onClick={() => setShowAddTask(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form onSubmit={handleAddTask} className="modal-form">
              <div className="form-group">
                <label>Task Title</label>
                <input
                  type="text"
                  placeholder="Enter task title"
                  value={newTask.title}
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Due Date</label>
                <input
                  type="text"
                  placeholder="e.g., Today, Tomorrow, 2 days"
                  value={newTask.due}
                  onChange={(e) => setNewTask({...newTask, due: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Priority</label>
                <select
                  value={newTask.priority}
                  onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
                  required
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={() => setShowAddTask(false)}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  <i className="fas fa-check"></i> Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Submit Report Modal */}
      {showSubmitReport && (
        <div className="modal-overlay" onClick={() => setShowSubmitReport(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2><i className="fas fa-file-upload"></i> Submit Report</h2>
              <button className="close-btn" onClick={() => setShowSubmitReport(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form onSubmit={handleSubmitReport} className="modal-form">
              <div className="form-group">
                <label>Report Title</label>
                <input
                  type="text"
                  placeholder="Enter report title"
                  value={newReport.title}
                  onChange={(e) => setNewReport({...newReport, title: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Report Type</label>
                <select
                  value={newReport.type}
                  onChange={(e) => setNewReport({...newReport, type: e.target.value})}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="daily">Daily Update</option>
                  <option value="weekly">Weekly Report</option>
                  <option value="monthly">Monthly Report</option>
                  <option value="expense">Expense Report</option>
                  <option value="performance">Performance Review</option>
                </select>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  placeholder="Describe your report..."
                  value={newReport.description}
                  onChange={(e) => setNewReport({...newReport, description: e.target.value})}
                  rows="5"
                  required
                />
              </div>
              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={() => setShowSubmitReport(false)}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  <i className="fas fa-check"></i> Submit Report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeDashboard;
