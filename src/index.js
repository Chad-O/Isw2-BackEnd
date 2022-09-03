import app from './app.js'
import { DataTypes } from 'sequelize';
import {sequelize} from './database/database.js'
import {InicializarModelos} from './models/MODELS.js'



async function main() {
    try {
        sequelize.drop();
        InicializarModelos();
        await sequelize.sync({force : true});
        const queryInterface = sequelize.getQueryInterface();

        console.log("Conexión realizada con éxito")
        var PORT = 4000;
        app.listen(PORT);
        console.log("servidor corriendo en el puerto", PORT);
    } catch (error) {
        console.log("ocurrió un error con la conexión")
    }
}
main();
