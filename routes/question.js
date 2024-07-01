const express = require("express");

const router =  express.Router();


const QuestionController = require("../controllers/question");

router.get("/preguntas", QuestionController.Preguntas);
router.get("/traer", QuestionController.traer);



module.exports = router;