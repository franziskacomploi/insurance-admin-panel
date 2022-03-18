const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const policySchema = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: 'User' },
  provider: String,
  insurance: {
    type: String,
    enum: ['Liability', 'Household', 'Health'],
    default: 'Liability',
  },
  status: {
    type: String,
    enum: ['ACTIVE', 'PENDING', 'CANCELLED', 'DROPPED_OUT'],
    default: 'PENDING',
  },
  policyNumber: String,
  startDate: Date,
  endDate: Date,
  createdAt: Date,
});

module.exports = Policy = mongoose.model('policy', policySchema);
