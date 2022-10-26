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


module.exports = {
    mostrarCursos
}
