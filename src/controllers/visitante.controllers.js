const pool = require('../db');

//Iniciar Sesión
const iniciarSesion = async (req, res) => {
    const { email, password} = req.body;
    try {
        const result = await pool.query('SELECT * FROM "USUARIOS" WHERE "EMAIL" = "$1" ', [email]);

        if (result.rows.length === 0) {
            return res.status(401).json("Invalid Credential");
        }
        console.log(result);

        if (password === result.rows[0].contrasena) {
            if (result.rows[0].perfil_user === "usuario"){
                res.json(result.rows[0])

                const result2 = await pool.query('SELECT "ID_PROFESOR" FROM "PROFESOR" WHERE "ID_USUARIO" = "$1" ', [result.rows[0].ID_USUARIO]);
                console.log(req.session)
            }else{
                const result2 = await pool.query('SELECT * FROM "ALUMNOS" JOIN "USUARIOS" ON "ALUMNOS.ID_USER" = "USUARIOS.ID_USER" WHERE "USUARIOS.ID_USER" = $1 ',
                 [result.rows[0].ID_USUARIO]);
                res.json(result2.rows[0]) 
                console.log(req.session)
            }
        }
        return res.status(401).json("Invalid password");
        
    } catch (error) {
        console.error(error.message);
    }
}

//BuscarTodoslosUsuarios
const buscarUsuarios = async (req,res) =>{
    try{
        const result = await pool.query('SELECT * FROM "USUARIOS"')
    }
    catch(error){
        console.error(error.message);
    }
    
}
//registrar usuario y profesor
const registrarProfesor = async (req, res) => {
    const { PRIMER_NOM, AP_PAT, AP_MAT, NOM_USUARIO, PASSWORD, E_MAIL, NUM_CEL, DOC_ID } = req.body;
    
    try {
        console.log(PRIMER_NOM, AP_PAT, AP_MAT, NOM_USUARIO, PASSWORD, E_MAIL, NUM_CEL, DOC_ID)
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
    const { PRIMER_NOM, AP_PAT, AP_MAT, NOM_USUARIO, PASSWORD, E_MAIL, NUM_CEL, DOC_ID } = req.body;
    
    try {
        console.log(PRIMER_NOM, AP_PAT, AP_MAT, NOM_USUARIO, PASSWORD, E_MAIL, NUM_CEL, DOC_ID)
        const result = await pool.query('INSERT INTO USUARIOS ("PRIMER_NOM","AP_PAT","AP_MAT","NOM_USUARIO","PASSWORD","E_MAIL","NUM_CEL","DOC_ID") VALUES ("$1","$2","$3","$4", "$52, "$6", "$7", "$8") RETURNING *', 
        [PRIMER_NOM, AP_PAT, AP_MAT, NOM_USUARIO, PASSWORD, E_MAIL, NUM_CEL, DOC_ID]);
        //almacenamos el id del usuario para usarlo en el registro de alumnos
        const id_usuario = await pool.query('SELECT "ID_USUARIO" FROM "USUARIO"  WHERE "DOC_ID" = ($1) RETURNING *',[id_doc]);
        console.log(id_register);
        const result2 = await pool.query('INSERT INTO "ALUMNOS" (ID_USUARIO) VALUES ($1) RETURNING *', [id_usuario]);
        
        res.json(result2.rows[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
}


module.exports = {
    iniciarSesion,
    buscarUsuarios,
    registrarProfesor,
    registrarAlumno
}


