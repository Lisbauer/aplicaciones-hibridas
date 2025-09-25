const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  category: { type: String }, // Ej: templo, parque, museo
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Place', placeSchema);
