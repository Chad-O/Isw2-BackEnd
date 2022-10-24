const pool = require('../db');
const fs = require("fs");

//Subir Archivo
const subirArchivo = async (req, res) => {
    const dataPdf = req.body;
    console.log("-------------------------------------------------------------------------------pinga de burra")
    let nombre = dataPdf.formName;
    let pdfDoc = dataPdf.formData;
    let buff = new Buffer.from(pdfDoc, 'base64');
    fs.writeFileSync('./src/files/'+nombre, buff);
}


module.exports = {
    subirArchivo
}
