const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const routerVisitante = require('./routes/visitante.routes');
const routerProfesor = require('./routes/profesor.routes');
const session = require('express-session')

const app = express();
const bodyParser = require('body-parser');

// puerto
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret:'12345',
  resave: true,
  saveUninitialized: true
}))
//Routes
app.use(routerVisitante);
app.use(routerProfesor);

// Aumentar límite al req
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.listen(app.get("port"));
console.log('Server on port', app.get("port"));

