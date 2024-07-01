
const {conexion} = require("./database/conexion")
const express = require("express");
const cors = require("cors");

console.log("App Quizz iniciada");
conexion();

const app = express();
const puerto = 3900
app.use(cors());
app.use(express.json());

const questionRoute =  require("./routes/question")
app.use("/api", questionRoute);


app.listen(puerto, () => {

   console.log("Servidor iniciado en puerto: " + puerto)
})