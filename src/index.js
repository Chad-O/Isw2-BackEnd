import app from './app.js'
import { DataTypes } from 'sequelize';
import {sequelize} from './database/database.js'
import {InicializarModelos} from './models/MODELS.js'



async function main() {
    try {
        //sequelize.drop();
        InicializarModelos();
        await sequelize.sync({force : true});
        const queryInterface = sequelize.getQueryInterface();

        //queryInterface.addColumn('CITAS', 'LINK', { type: DataTypes.STRING });
        // queryInterface.addColumn('CITAS', 'DIRECCION', { type: DataTypes.STRING });
        //queryInterface.addColumn('CITAS', 'MONTO', { type: DataTypes.INTEGER });
        //queryInterface.addColumn('HISTORIA_CLINICA', 'FECHA', { type: DataTypes.DATEONLY });
        //queryInterface.addColumn('MEDICOS', 'FG_PRESENCIAL', { type: DataTypes.BOOLEAN });
        //queryInterface.addColumn('MEDICOS', 'FG_VIRTUAL', { type: DataTypes.BOOLEAN });
        console.log("Conexión realizada con éxito")
        var PORT = process.env.PORT || 4000;
        app.listen(PORT);
        console.log("servidor corriendo en el puerto", PORT);
    } catch (error) {
        console.log("ocurrió un error con la conexión")
    }
}
main();
