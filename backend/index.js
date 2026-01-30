

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import employeeRoutes from './routes/employee.js';
import projectRoutes from './routes/project.js';
import attendanceRoutes from './routes/attendance.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'YOUR_MONGODB_ATLAS_URI';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Admin-Employee Backend Running');
});

// Health check endpoint
app.get('/api/health', async (req, res) => {
  try {
    const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
    const dbName = mongoose.connection.name || 'N/A';
    
    if (dbStatus === 'connected') {
      res.status(200).json({
        status: 'success',
        message: 'Backend and database are healthy',
        database: {
          status: dbStatus,
          name: dbName,
        },
        timestamp: new Date().toISOString(),
      });
    } else {
      res.status(503).json({
        status: 'error',
        message: 'Database not connected',
        database: {
          status: dbStatus,
          name: dbName,
        },
        timestamp: new Date().toISOString(),
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Health check failed',
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});

app.use('/api/employees', employeeRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/attendance', attendanceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
