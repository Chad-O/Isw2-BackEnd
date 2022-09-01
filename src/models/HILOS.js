import _sequelize from 'sequelize';
const {Model, Sequelize} = _sequelize;

export default class HILOS extends Model {
    static init(sequelize, DataTypes) {
    return super.init({
      ID_HILO: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      TITULO:{
        type: DataTypes.STRING(255),
        allowNull:false
      },
      ID_USUARIO: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'USUARIOS',
          key: 'ID_USUARIO'
        }
      },
      IMPORTANCIA :{
        type: DataTypes.INTEGER,
        allowNull: false        
      }
    }, {
      sequelize,
      tableName: 'HILOS',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "HILOS_pkey",
          unique: true,
          fields: [
            { name: "ID_HILO" },
          ]
        },
      ]
    });
    }
  }