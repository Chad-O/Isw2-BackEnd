const pool = require('../db');
const fs = require('fs');
const { type } = require('os');

//Mostrar Cursos
const mostrarCursos = async (req, res) => {
  const { id_usuario } = req.body;
  try {
    const cursos = await pool.query('SELECT "CURSO".*, "LISTA_CURSO"."PORCENTAJE" FROM "CURSO"' +
                                    'RIGHT JOIN "LISTA_CURSO" ON "LISTA_CURSO"."ID_CURSO" = "CURSO"."ID_CURSO"'+
                                    'WHERE "LISTA_CURSO"."ID_USUARIO" = $1;', [id_usuario]);
    res.json(cursos);
  } catch (error) {
    res.json({ error: error.message });
    }
}

//Mostrar Material del curso
const mostrarMaterial = async (req, res) => {
  const { id_curso } = req.body;

  try {
    const material = await pool.query('SELECT * FROM "MATERIAL" WHERE "ID_CURSO" = $1', [id_curso]);

    //Obtener rows del query
    const material_rows = material.rows[0];
    //Obtener link
    const link = material_rows.LINK;
    //Buscar material en los files
    const data = fs.readFileSync("src/files/"+link, 'base64');
    //Transformarlo a string
    const data_par = JSON.stringify(data);
    //Transformarlo a JSON
    const data_json = JSON.parse(`{"MATERIAL":${data_par}}`);
    //Combinar consulta con archivo
    const todo_material = Object.assign(material_rows, data_json);
    res.json(todo_material);
  } catch (error) {
    res.json({ error: error.message });
    }
}

//Mostrar Material del curso
const mostrarExamen = async (req, res) => {
  
  const { id_curso } = req.body;
  try {
    const examen = await pool.query('SELECT * FROM "EXAMEN" WHERE "ID_CURSO" = $1', [id_curso]);
    console.log(examen)
    //Obtener rows del query
    const examen_rows = examen.rows[0];
    res.json(examen_rows);
  } catch (error) {
    res.json({ error: error.message });
    }
}

module.exports = {
    mostrarCursos,
    mostrarMaterial,
    mostrarExamen
}
