const { Router } = require('express');
const { iniciarSesion, 
        buscarUsuarios,
        buscarAlumnos,
        registrarProfesor, 
        registrarAlumno,
        cambioContraseña,
        cursosUsuario } = require('../controllers/visitante.controllers.js');
const validInfo = require("../middleware/validInfo");

const routerVisitante = Router();
routerVisitante.get('/usuarios', buscarUsuarios);

routerVisitante.get('/visitante/buscaAlumnos',buscarAlumnos);

routerVisitante.post('/visitante/registrarProfesor', registrarProfesor);

routerVisitante.post('/visitante/registarAlumno',registrarAlumno);

routerVisitante.post('/visitante/iniciarSesion',validInfo, iniciarSesion);


routerVisitante.put('/visitante/cambioContraseña', cambioContraseña);


module.exports = routerVisitante;
