import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: 'employee' },
  password: { type: String, required: true },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
  attendance: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendance' }],
});

export default mongoose.model('Employee', employeeSchema);
