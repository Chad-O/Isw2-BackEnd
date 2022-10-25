const { Router } = require('express');
const { mostrarCursos } = require('../controllers/curso.controllers.js');

const routerCurso = Router();

routerCurso.get('/curso/mostrarCursos', mostrarCursos);

module.exports = routerCurso;
