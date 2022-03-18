const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const customerSchema = new Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
});

module.exports = Customer = mongoose.model('customer', customerSchema);
