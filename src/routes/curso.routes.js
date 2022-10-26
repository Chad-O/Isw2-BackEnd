const { Router } = require('express');
const { mostrarCursos,
        cursosUsuario } = require('../controllers/curso.controllers.js');

const routerCurso = Router();

routerCurso.get('/curso/mostrarCursos', mostrarCursos);

routerCurso.get('visitante/cursosUsuario/:id', cursosUsuario);

module.exports = routerCurso;
