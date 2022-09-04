import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _USUARIOS from "./USUARIOS.js";
import _ALUMNOS from "./ALUMNOS.js";
import _PROFESORES from "./PROFESORES.js";
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

    ALUMNOS.belongsTo(USUARIOS, {as:"ID_USUARIO_USR", foreignKey: "ID_USUARIO"});
    USUARIOS.hasMany(ALUMNOS, {as: "ALUMNOs", foreignKey: "ID_USUARIO"});
    PROFESORES.belongsTo(USUARIOS, {as: "ID_USUARIO_USR", foreignKey: "ID_USUARIO"});
    USUARIOS.hasMany(PROFESORES, {as: "PROFESOREs", foreignKey: "ID_USUARIO"});
    CERTIFICACIONES.belongsTo(PROFESORES, {as : "ID_PROFESOR_PR", foreignKey:"ID_PROFESOR"});
    PROFESORES.hasMany(CERTIFICACIONES, {as: "CERTIFICADOs", foreignKey: "ID_PROFESOR"});
    MENSAJES.belongsTo(HILOS, {as: "ID_HILO_HI", foreignKey: "ID_HILO"});
    HILOS.hasMany(MENSAJES, {as: "MENSAJEs", foreignKey:"ID_HILO"});
    HILOS.belongsTo(USUARIOS, {as: "ID_USUARIO_USR", foreignKey:"ID_USUARIO"});
    USUARIOS.hasMany(HILOS, {as : "HILOs", foreignKey: "ID_USUARIO"});
    MENSAJES.belongsTo(USUARIOS, {as: "ID_USUARIO_USR", foreignKey:"ID_USUARIO"});
    USUARIOS.hasMany(MENSAJES, {as: "MENSAJEs", foreignKey: "ID_USUARIOS"});
    MODULOS.belongsTo(ALUMNOS, {as: "ID_ALUMNO_AL", foreignKey:"ID_ALUMNO"});
    ALUMNOS.hasMany(MODULOS, {as: "ALUMNOs", foreignKey:"ID_ALUMNO"});        
    LISTA_MODULOS.belongsTo(PROFESORES, {as: "ID_PROFESOR_PR", foreignKey:"ID_PROFESOR"});
    PROFESORES.hasMany(LISTA_MODULOS, {as: "PROFESOREs", foreignKey: "ID_PROFESOR"});
    MODULOS.belongsTo(LISTA_MODULOS, {as: "ID_MODULOS_MO", foreignKey:"ID_MODULOS"});
    LISTA_MODULOS.hasMany(MODULOS, {as: "MODULOs", foreignKey:"ID_MODULOS"});

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

