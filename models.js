const mongoose = require('mongoose');

// Define el esquema para la información de agendamiento
const agendamientoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  // Otros campos que puedas necesitar...
});

// Crea el modelo 'Agendamiento' utilizando el esquema
const Agendamiento = mongoose.model('Agendamiento', agendamientoSchema);

module.exports = {
  Agendamiento,
};
