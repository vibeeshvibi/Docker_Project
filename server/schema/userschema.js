const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const user = mongoose.model('user', userSchema);

module.exports = user;
