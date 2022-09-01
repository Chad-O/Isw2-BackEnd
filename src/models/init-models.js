import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _USUARIOS from "./USUARIOS.js";
import _ALUMNOS from "./ALUMNOS";
import _PROFESORES from "./PROFESORES";
import _CERTIFICACIONES from "./CERTIFICACIONES.js"
import _MENSAJES from "./MENSAJES.js";
import _HILOS from "./HILOS.js";
import _MODULOS from "./MODULOS.js";
import _LISTA_MODULOS from "./LISTA_MODULOS.js";

export default function initModels(sequelize){
    const USUARIOS = _USUARIOS.init(sequelize, DataTypes);
    const ALUMNOS = _ALUMNOS.init(sequelize, DataTypes);
    const PROFESORES = _PROFESORES.init(sequelize, DataTypes);
    const CERTIFICACIONES = _CERTIFICACIONES.init(sequelize, DataTypes);
    const MENSAJES = _MENSAJES.init(sequelize, DataTypes);
    const HILOS = _HILOS.init(sequelize, DataTypes);
    const MODULOS = _MODULOS.init(sequelize, DataTypes);
    const LISTA_MODULOS = _LISTA_MODULOS.init(sequelize, DataTypes);

    ALUMNOS.belongsTo(USUARIOS, {as:"ID_USUARIO", foreignKey: "ID_USUARIO"});
    USUARIOS.hasMany(ALUMNOS, {as: "USUARIOS", foreignKey: "ID_USUARIO"});
    PROFESORES.belongsTo(USUARIOS, {as: "ID_USUARIO", foreignKey: "ID_USUARIO"});
    USUARIOS.hasMany(PROFESORES, {as: "USUARIOS", foreignKey: "ID_USUARIO"});
    CERTIFICACIONES.belongsTo(PROFESORES, {as : "ID_PROFESOR", foreignKey:"ID_PROFESOR"});
    PROFESORES.hasMany(CERTIFICACIONES, {as: "PROFESORES", foreignKey: "ID_PROFESOR"});
    MENSAJES.belongsTo(HILOS, {as: "ID_HILO", foreignKey: "ID_HILO"});
    HILOS.hasMany(MENSAJES, {as: "HILOS", foreignKey:"ID_HILOS"});
    HILOS.belongsTo(USUARIOS, {as: "ID_USUARIO", foreignKey:"ID_USUARIO"});
    USUARIOS.hasMany(HILOS, {as : "USUARIOS", foreignKey: "ID_HILO"});
    MENSAJES.belongsTo(USUARIOS, {as: "ID_USUARIO", foreignKey:"ID_USUARIO"});
    USUARIOS.hasMany(MENSAJES, {as: "USUARIOS", foreignKey: "ID_USUARIOS"});
    MODULOS.belongsTo(ALUMNOS, {as: "ID_ALUMNO", foreignKey:"ID_ALUMNO"});
    ALUMNOS.hasMany(MODULOS, {as: "ALUMNOS", foreignKey:"ID_ALUMNO"});        
    LISTA_MODULOS.belongsTo(PROFESORES, {as: "ID_PROFESOR", foreignKey:"ID_PROFESOR"});
    PROFESORES.hasMany(LISTA_MODULOS, {as: "PROFESORES", foreignKey: "ID_PROFESOR"});
    MODULOS.belongsTo(LISTA_MODULOS, {as: "ID_MODULOS", foreignKey:"ID_MODULOS"});
    LISTA_MODULOS.hasMany(MODULOS, {as: "MODULOS", foreignKey:"ID_MODULOS"});

    return{
        USUARIOS,
        ALUMNOS,
        PROFESORES,
        CERTIFICACIONES,
        MENSAJES,
        HILOS,
        MODULOS,
        LISTA_MODULOS
    };
}

