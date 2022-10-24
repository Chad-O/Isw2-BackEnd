const { Router } = require('express');
const { subirArchivo } = require('../controllers/profesor.controllers.js');

const routerProfesor = Router();

routerProfesor.post('/profesor/subirArchivo', subirArchivo);

module.exports = routerProfesor;
