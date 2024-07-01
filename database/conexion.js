const mongoose = require("mongoose");

const conexion = async() => {

   try {
      await mongoose.connect("mongodb://127.0.0.1:27017/quizz");

      console.log("Se ha conectado correctamente a BDD Quizz")
   } catch (error) {
      console.log(error);
   }
}

module.exports = {
   conexion
}