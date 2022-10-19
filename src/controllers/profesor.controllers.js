const pool = require('../db');

//Subir Archivo
const subirArchivo = async (req, res) => {
    const formData = req.body;
    console.log(formData);
}


module.exports = {
    subirArchivo
}
