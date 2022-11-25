const pool = require('../db');

//Iniciar Sesión
const iniciarSesion = async (req, res) => {
    const { email, password} = req.body;
    try {
        const result = await pool.query('SELECT * FROM "USUARIO" WHERE "E_MAIL" = $1 ', [email]);
        if (result.rows.length === 0) {
            return res.status(401).json("Invalid Credential");
        }

        if (password === result.rows[0].PASSWORD) {
            
            return res.json(result.rows[0])
        }
        return res.status(401).json("Invalid password");
        
    } catch (error) {
        console.error(error.message);
    }
}

//BuscarTodoslosUsuarios
const buscarUsuarios = async (req,res) =>{
    try{
        const result = await pool.query('SELECT * FROM "USUARIO"')
        res.json(result)
    }
    catch(error){
        console.error(error.message);
    }
    
}
//Buscar todos los Alumnos
const buscarAlumnos = async (req,res) =>{
    try{
        const result = await pool.query('SELECT * FROM "USUARIO" WHERE "TIPO_USUARIO" = $1', [1]);
        res.json(result)
    }
    catch(error){
        console.error(error.message);
    }
}

//registrar usuario y profesor
const registrarProfesor = async (req, res) => {
    const { TIPO_USUARIO,PRIMER_NOM, AP_PAT, AP_MAT, NOM_USUARIO, PASSWORD, E_MAIL, NUM_CEL, DOC_ID } = req.body;
    
    try {
        console.log(TIPO_USUARIO,PRIMER_NOM, AP_PAT, AP_MAT, NOM_USUARIO, PASSWORD, E_MAIL, NUM_CEL, DOC_ID)
        const result = await pool.query('INSERT INTO USUARIOS ("PRIMER_NOM","AP_PAT","AP_MAT","NOM_USUARIO","PASSWORD","E_MAIL","NUM_CEL","DOC_ID") VALUES ("$1","$2","$3","$4", "$52, "$6", "$7", "$8") RETURNING *', 
        [PRIMER_NOM, AP_PAT, AP_MAT, NOM_USUARIO, PASSWORD, E_MAIL, NUM_CEL, DOC_ID]);
        //almacenamos el id del usuario para usarlo en el registro de doctores
        const id_doc = result.rows[0].DOC_ID;
        const id_usuario = await pool.query('SELECT "ID_USUARIO" FROM "USUARIO"  WHERE "DOC_ID" = ($1) RETURNING *',[id_doc]);
        console.log(id_register);
        const result2 = await pool.query('INSERT INTO "PROFESORES" (ID_USUARIO) VALUES ($1) RETURNING *', [id_usuario]);
        
        res.json(result2.rows[0]);
    } catch (error) {
        res.json({ error: error.message });

    }
}

//Registrar usuario y alumno
const registrarAlumno = async (req, res) => {
    const { TIPO_USUARIO,PRIMER_NOM, AP_PAT, AP_MAT, NOM_USUARIO, PASSWORD, E_MAIL, NUM_CEL, DOC_ID } = req.body;
    
    try {
        console.log(TIPO_USUARIO,PRIMER_NOM, AP_PAT, AP_MAT, NOM_USUARIO, PASSWORD, E_MAIL, NUM_CEL, DOC_ID)
        const result = await pool.query('INSERT INTO "USUARIOS" ("PRIMER_NOM","AP_PAT","AP_MAT","NOM_USUARIO","PASSWORD","E_MAIL","NUM_CEL","DOC_ID") VALUES ("$1","$2","$3","$4", "$52, "$6", "$7", "$8") RETURNING *', 
        [PRIMER_NOM, AP_PAT, AP_MAT, NOM_USUARIO, PASSWORD, E_MAIL, NUM_CEL, DOC_ID]);
        res.json(result);
        //almacenamos el id del usuario para usarlo en el registro de alumnos
        const id_usuario = await pool.query('SELECT "ID_USUARIO" FROM "USUARIO"  WHERE "DOC_ID" = ($1) RETURNING *',[id_doc]);
        console.log(id_register);
        const result2 = await pool.query('INSERT INTO "ALUMNOS" (ID_USUARIO) VALUES ($1) RETURNING *', [id_usuario]);
        
        res.json(result2.rows[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
}

//Cambiar contraseña de usuario
const cambioContraseña = async (req,res) =>{
    const{PASSWORD, E_MAIL} = req.body;
    try{
        console.log(PASSWORD, E_MAIL);
        const result = await pool.query('UPDATE "USUARIOS" SET "PASSWORD" = $1 WHERE "E_MAIL" = $2',[PASSWORD,E_MAIL]);

    }catch(error)
    {
        res.json({error: error.message});
    }
}

module.exports = {
    iniciarSesion,
    buscarUsuarios,
    buscarAlumnos,
    registrarProfesor,
    registrarAlumno,
    cambioContraseña
}
