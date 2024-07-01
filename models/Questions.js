const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
  pregunta: {
    type: String,
    required: true,
    trim: true
  },
  opciones: {
    type: [String],
    required: true,
    validate: {
      validator: function(array) {
        return array.length > 0;
      },
      message: 'Debe haber al menos una opción'
    }
  },
  respuesta: {
    type: String,
    required: true
  }
});

module.exports = model("Pregunta", questionSchema, "preguntas");