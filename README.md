# Admin Employee Dashboard - React

A professional admin and employee management dashboard built with React, featuring attendance tracking, analytics, and user management.

## Features

- **Dual Login System**: Separate login portals for Admin and Employee
- **Admin Dashboard**: Comprehensive overview with team management and analytics
  - **Add Employee**: Add new employees with role, team, and email
  - **Employee Management**: View all employees, assign roles, and remove employees
  - **Add Project**: Create new projects with teams, deadlines, and descriptions
  - **Project Management**: Track all projects, update status, and delete projects
  - **Real-time Updates**: Live employee and project count
- **Employee Dashboard**: Personal task management and performance tracking
  - **Add Tasks**: Create new tasks with priority levels and due dates
  - **Task Management**: Mark tasks as complete/incomplete, delete tasks
  - **Submit Reports**: Submit various types of reports (daily, weekly, monthly, expense)
  - **View Reports**: Track all submitted reports with approval status
  - **Performance Metrics**: View task completion rate, on-time delivery, and quality scores
  - **Real-time Updates**: Live task and report counts
- **Attendance Management**: Track team attendance with visual charts
- **Analytics & Reports**: Detailed project reports and performance metrics
- **Profile Management**: User profile viewing and editing
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive Modals**: Beautiful modal windows for adding employees and projects

## Tech Stack

- React 18
- React Router DOM v6
- Chart.js with React-Chartjs-2
- CSS3 with modern styling
- Font Awesome icons

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Login Credentials

### Admin
- Username: `admin`
- Password: `admin123`

### Employee
- Username: `employee`
- Password: `emp123`

## Project Structure

```
src/
├── pages/
│   ├── Home.js
│   ├── Login.js
│   ├── AdminDashboard.js
│   ├── EmployeeDashboard.js
│   ├── Attendance.js
│   ├── Profile.js
│   └── Report.js
├── styles/
│   ├── Home.css
│   ├── Login.css
│   ├── Dashboard.css
│   ├── Attendance.css
│   ├── Profile.css
│   └── Report.css
├── App.js
└── index.js
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner

## Features Overview

### Admin Dashboard
- View total users, reports, and system settings
- Quick attendance overview for all teams
- Recent analytics summary
- Navigation to detailed attendance and reports

### Employee Dashboard
- View completed tasks and hours worked
- Track assigned projects
- Manage personal tasks
- View recent reports

### Attendance Page
- Select different teams
- View detailed attendance records
- Interactive charts (Pie and Line charts)
- Member-wise attendance percentages

### Analytics Page
- Team performance comparison
- Project status distribution
- Detailed project overview table
- Export functionality

## License

MIT License
