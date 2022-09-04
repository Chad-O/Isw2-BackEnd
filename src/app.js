import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuario.routes.js";
import profesorRoutes from "./routes/profesores.routes.js";
import alumnosRoutes from "./routes/alumnos.routes.js";
import mensajesRoutes from "./routes/mensaje.routes.js";
import hiloRoutes from "./routes/hilos.routes.js";
import certificadosRoutes from "./routes/certificaciones.routes.js";
import lista_modRoutes from "./routes/lista_modulos.routes.js";



const app = express();

app.use(cors());
app.use(express.json());
app.use(usuarioRoutes);
app.use(profesorRoutes);
app.use(alumnosRoutes);
app.use(mensajesRoutes);
app.use(hiloRoutes);
app.use(certificadosRoutes);
app.use(lista_modRoutes);

export default app;
