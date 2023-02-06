const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  inStock: { type: Boolean, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Thing', thingSchema);