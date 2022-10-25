const pool = require('../db');

//Mostrar Cursos
const mostrarCursos = async (req, res) => {
  try {
    const cursos = await pool.query('SELECT * FROM "CURSO"');
    console.log(cursos);
    res.json(cursos.rows);
  } catch (error) {
    console.error(error.message);
    }
}


module.exports = {
    mostrarCursos
}
