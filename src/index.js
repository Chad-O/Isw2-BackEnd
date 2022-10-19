const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const routerVisitante = require('./routes/visitante.routes');
const routerProfesor = require('./routes/profesor.routes');
const session = require('express-session')

const app = express();

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


//handling error
app.use((err, req, res, next) => {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  });


app.listen(app.get("port"));
console.log('Server on port', app.get("port"));

