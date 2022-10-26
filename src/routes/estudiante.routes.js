const { Router } = require('express');
const { mostrarCursos, mostrarMaterial } = require('../controllers/estudiante.controllers.js');

const routerEstudiante = Router();

routerEstudiante.post('/estudiante/mostrarCursos', mostrarCursos);

routerEstudiante.post('/estudiante/mostrarMaterial', mostrarMaterial);

module.exports = routerEstudiante;
