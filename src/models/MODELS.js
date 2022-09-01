import initModels from "./init-models.js";
import { sequelize } from "../database/database.js";

export var Alumnos;
export var Usuarios;
export var Profesores;
export var Hilos;
export var Mensajes;
export var Certificaciones;
export var Lista_Modulos;
export var Modulos;

export const InicializarModelos = _ =>{
    const modelos   = initModels(sequelize);
    
    Alumnos         = modelos.ALUMNOS;
    Usuarios        = modelos.USUARIOS;
    Profesores      = modelos.PROFESORES;
    Hilos           = modelos.HILOS;
    Mensajes        = modelos.MENSAJES;
    Certificaciones = modelos.CERTIFICACIONES;
    Lista_Modulos   = modelos.LISTA_MODULOS;
    Modulos         = modelos.MODULOS;
}

