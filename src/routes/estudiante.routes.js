const { Router } = require('express');
const { mostrarCursos, mostrarMaterial, mostrarExamen } = require('../controllers/estudiante.controllers.js');

const routerEstudiante = Router();

routerEstudiante.post('/estudiante/mostrarCursos', mostrarCursos);

routerEstudiante.post('/estudiante/mostrarMaterial', mostrarMaterial);

routerEstudiante.post('/estudiante/mostrarExamen', mostrarExamen);

module.exports = routerEstudiante;
