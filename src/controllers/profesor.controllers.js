const pool = require('../db');
const fs = require("fs");
const { Console } = require('console');

//Subir Archivo
const subirArchivo = async (req, res) => {
    const dataPdf = req.body;
    let nombre = dataPdf.formName;
    let pdfDoc = dataPdf.formData;
    let idCurso = dataPdf.formIdCurso;
    console.log(idCurso);
    let buff = new Buffer.from(pdfDoc, 'base64');
    fs.writeFileSync('./src/files/'+nombre, buff);

    const result = await pool.query('INSERT INTO "MATERIAL" ("ID_CURSO", "LINK") VALUES ($1, $2)',[idCurso, nombre]);
}


module.exports = {
    subirArchivo
}
