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
//Recibir Cursos de Usuario
const cursosUsuario = async (req,res) => {
  const{id} = req.body;
  try{
      const result = await pool.query('SELECT * FROM "LISTA_CURSO" LC JOIN "CURSO" C ON LC."ID_CURSO" = C."ID_CURSO" WHERE "ID_USUARIO" = $1',[id]);      
      console.log(result)
      res.json(result.rows);
  }catch(error)
  {
      res.json({error: error.message});
  }
}

module.exports = {
    mostrarCursos,
    cursosUsuario
}
