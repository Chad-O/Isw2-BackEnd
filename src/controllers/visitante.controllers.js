const pool = require('../db');

//Iniciar Sesión
const iniciarSesion = async (req, res) => {
    const { email, password} = req.body;
    try {
        const result = await pool.query('SELECT * FROM USERS WHERE EMAIL = $1 ', [email]);

        if (result.rows.length === 0) {
            return res.status(401).json("Invalid Credential");
        }
        console.log(result);

        if (password === result.rows[0].contrasena) {
            if (result.rows[0].perfil_user === "doctor"){
                res.json(result.rows[0])

                const result2 = await pool.query('SELECT ID_DOCTOR FROM DOCTORES WHERE ID_USER = $1 ', [result.rows[0].id_user]);
                console.log(req.session)
            }else{
                const result2 = await pool.query('SELECT * FROM PACIENTES P JOIN USERS U ON P.ID_USER = U.ID_USER WHERE U.ID_USER = $1 ', [result.rows[0].id_user]);
                res.json(result2.rows[0]) 
                console.log(req.session)
            }
        }
        return res.status(401).json("Invalid password");
        
    } catch (error) {
        console.error(error.message);
    }
}

//registrar usuario y profesor
const registrarProfesor = async (req, res) => {
    const { email, contraseña, nombres, apellidos, especialidad } = req.body;
    
    try {
        console.log(email, contraseña, nombres, apellidos, especialidad)
        const result = await pool.query('INSERT INTO USERS (EMAIL,CONTRASENA, PERFIL_USER) VALUES ($1,$2,$3) RETURNING *', [email, contraseña,"doctor"]);
        //almacenamos el id del usuario para usarlo en el registro de doctores
        const id_register = result.rows[0].id_user;
        console.log(email, contraseña, nombres, apellidos, especialidad)
        console.log(id_register);
        
        const result2 = await pool.query('INSERT INTO DOCTORES (ID_USER,NOMBRES, APELLIDOS, ID_ESPECIALIDAD) VALUES ($1,$2,$3,$4) RETURNING *', [id_register,nombres,apellidos, especialidad ])
        
        res.json(result2.rows[0]);
    } catch (error) {
        res.json({ error: error.message });

    }
}

//Registrar usuario y alumno
const registrarAlumno = async (req, res) => {
    const { email, contraseña, nombres, apellidos} = req.body;

    try {
        const result = await pool.query('INSERT INTO USERS (EMAIL,CONTRASENA, PERFIL_USER) VALUES ($1,$2,$3) RETURNING *', [email, contraseña,"paciente"]);
        //almacenamos el id del usuario para usarlo en el registro de alumnos
        const id_register = result.rows[0].id_user;
        
        const result2 = await pool.query('INSERT INTO PACIENTES(ID_USER,NOMBRES, APELLIDOS) VALUES ($1,$2,$3) RETURNING *', [id_register,nombres,apellidos])
        
        res.json(result2.rows[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
}


module.exports = {
    iniciarSesion,
    registrarProfesor,
    registrarAlumno
}


