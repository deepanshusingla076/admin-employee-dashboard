import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState({ username: '', password: '' });
  const [employeeCredentials, setEmployeeCredentials] = useState({ username: '', password: '' });

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminCredentials.username === 'admin' && adminCredentials.password === 'admin123') {
      navigate('/admin');
    } else {
      alert('Invalid admin credentials. Use username: admin, password: admin123');
    }
  };

  const handleEmployeeLogin = (e) => {
    e.preventDefault();
    if (employeeCredentials.username === 'employee' && employeeCredentials.password === 'emp123') {
      navigate('/employee');
    } else {
      alert('Invalid employee credentials. Use username: employee, password: emp123');
    }
  };

  return (
    <div className="login-page">
      <div className={`login-container ${isActive ? 'active' : ''}`}>
        {/* Admin Login Form */}
        <div className="form-container admin-form">
          <form onSubmit={handleAdminLogin}>
            <h1>Admin Login</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fab fa-github"></i></a>
              <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your username and password</span>
            <input
              type="text"
              placeholder="Username"
              value={adminCredentials.username}
              onChange={(e) => setAdminCredentials({ ...adminCredentials, username: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={adminCredentials.password}
              onChange={(e) => setAdminCredentials({ ...adminCredentials, password: e.target.value })}
              required
            />
            <a href="#">Forgot Your Password?</a>
            <button type="submit">Admin Login</button>
          </form>
        </div>

        {/* Employee Login Form */}
        <div className="form-container employee-form">
          <form onSubmit={handleEmployeeLogin}>
            <h1>Employee Login</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fab fa-github"></i></a>
              <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your username and password</span>
            <input
              type="text"
              placeholder="Username"
              value={employeeCredentials.username}
              onChange={(e) => setEmployeeCredentials({ ...employeeCredentials, username: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={employeeCredentials.password}
              onChange={(e) => setEmployeeCredentials({ ...employeeCredentials, password: e.target.value })}
              required
            />
            <a href="#">Forgot Your Password?</a>
            <button type="submit">Employee Login</button>
          </form>
        </div>

        {/* Toggle Panel */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Admin!</h1>
              <p>Manage your team and track performance</p>
              <button className="hidden" onClick={() => setIsActive(false)}>
                Admin Login
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Employee!</h1>
              <p>Access your tasks and track your progress</p>
              <button className="hidden" onClick={() => setIsActive(true)}>
                Employee Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
