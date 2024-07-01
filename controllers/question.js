const Pregunta = require("../models/Questions")

const Preguntas = (req, res) => {

   try {
         let consulta = Pregunta.find({}).then((data) => {
            if(data ==null){
               return res.status(404).json({
                  status:"Undefined",
                  mensaje: "No se han encontrado Preguntas", 
               })
            }
            return res.status(200).send({
               status: "success",
               data
            })
         })
   }catch (error) {
      return res.status(500).json({
         status:"error",
         mensaje: "Error al compilar la solicitud",
         error
      })
   }

}

const traer = async(req, res) =>{
   try {
      const data = await Pregunta.find({});
      const questions = data
      return res.status(200).send({
         status: "datos preguntas",
         data
      });
   } catch (error) {
          return res.status(400).send({
            status: "error",
            mensaje: "No se encontraron preguntas",
            error
         });      
   }
}

// try {
//    const hospitales = await Hospital.find({}); 
//    return res.status(200).send({
//       status: "success",
//       hospitales
//    });
// } catch (error) {
//        return res.status(400).send({
//          status: "error",
//          mensaje: "",
//          error
//       });      
// }


module.exports = { 
   Preguntas,
   traer
}