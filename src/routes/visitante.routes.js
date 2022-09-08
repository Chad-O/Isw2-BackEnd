const { Router } = require('express');
const { iniciarSesion, 
        buscarUsuarios,
        registrarProfesor, 
        registrarAlumno } = require('../controllers/visitante.controllers.js');
const validInfo = require("../middleware/validInfo");

const router = Router();
router.get('/usuarios', buscarUsuarios);

router.post('/visitante/registrarProfesor', registrarProfesor);

router.post('/visitante/registarAlumno',registrarAlumno);

router.post('/visitante/iniciarSesion',validInfo, iniciarSesion);

module.exports = router;
