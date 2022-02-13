const mongoose = require('mongoose');
const { Schema } = mongoose;

const L1Schema = new mongoose.Schema({
  l1id: {
    type: Number,
    required: true,
  },
  l1name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('L1', L1Schema);