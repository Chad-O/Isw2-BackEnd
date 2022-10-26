const { Router } = require('express');
const { mostrarCursos } = require('../controllers/estudiante.controllers.js');

const routerEstudiante = Router();

routerEstudiante.post('/estudiante/mostrarCursos', mostrarCursos);

module.exports = routerEstudiante;
