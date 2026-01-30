import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
  status: { type: String, default: 'active' },
});

export default mongoose.model('Project', projectSchema);
