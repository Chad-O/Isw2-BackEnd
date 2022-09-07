const { Router } = require('express');
const { iniciarSesion, 
        buscarUsuarios,
        registrarProfesor, 
        registrarAlumno } = require('../controllers/visitante.controllers.js');
const validInfo = require("../middleware/validInfo");

const router = Router();
router.get('/usuarios', buscarUsuarios);

router.post('/registrarProfesor', registrarProfesor);

router.post('/registarAlumno',registrarAlumno);

router.post('/iniciarSesion',validInfo, iniciarSesion);

module.exports = router;
