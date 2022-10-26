const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const routerVisitante = require('./routes/visitante.routes');
const routerProfesor = require('./routes/profesor.routes');
const routerCurso = require('./routes/curso.routes');
const routerEstudiante = require('./routes/estudiante.routes');
const session = require('express-session')

const app = express();
const bodyParser = require('body-parser');

// puerto
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true }));
app.use(session({
  secret:'12345',
  resave: true,
  saveUninitialized: true
}))
//Routes
app.use(routerVisitante);
app.use(routerProfesor);
app.use(routerCurso);
app.use(routerEstudiante);

app.listen(app.get("port"));
console.log('Server on port', app.get("port"));

