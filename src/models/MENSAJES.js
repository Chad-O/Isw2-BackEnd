import _sequelize from 'sequelize';
const {Model, Sequelize} = _sequelize;

export default class MENSAJES extends Model {
    static init(sequelize, DataTypes) {
    return super.init({
      ID_MENSAJE: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      ID_USUARIO: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'USUARIOS',
          key: 'ID_USUARIO'
        }
      },
      ID_HILO: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'HILO',
          key: 'ID_HILO'
        }
      },
      MENSAJE:{
        type: DataTypes.STRING(255),
        allowNull: false
      },
      FECHAHORA: {
        type: DataTypes.DATETIME,
        allowNull: false
      },
      NUMVOTOS:{
        type:DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'MENSAJES',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "MENSAJES_pkey",
          unique: true,
          fields: [
            { name: "ID_MENSAJE" },
          ]
        },
      ]
    });
    }
  }