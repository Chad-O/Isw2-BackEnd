import app from './app.js'
import { DataTypes } from 'sequelize';
import {sequelize} from './database/database.js'
import {InicializarModelos} from './models/MODELS.js'



async function main() {
    try {
        
        InicializarModelos();
        console.log("Salió Modelos");
        await sequelize.sync({force : false});
        console.log("Force True");
        console.log("Conexión realizada con éxito")
        var PORT = process.env.PORT ||4000;
        app.listen(PORT);
        console.log("servidor corriendo en el puerto", PORT);
    } catch (error) {
        console.log(error)
    }
}
main();
