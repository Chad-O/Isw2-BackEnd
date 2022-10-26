const pool = require('../db');

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
    res.json(material);
  } catch (error) {
    res.json({ error: error.message });
    }
}


module.exports = {
    mostrarCursos,
    mostrarMaterial
}
