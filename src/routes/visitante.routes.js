const { Router } = require('express');
const { iniciarSesion, 
        registrarProfesor, 
        registrarAlumno } = require('../controllers/visitante.controllers.js');


const router = Router();

router.post('/visitante/registrarProfesor', registrarProfesor);

router.post('/visitante/registarAlumno',registrarAlumno);

router.post('/visitante/iniciarSesion',validInfo, iniciarSesion);

module.exports = router;
