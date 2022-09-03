import _sequelize from 'sequelize';
const {Model, Sequelize} = _sequelize;

export default class LISTA_MODULO extends Model {
    static init(sequelize, DataTypes) {
    return super.init({
      ID_LISTA_MOD: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      ID_MODULOS: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:'MODULO',
          key: 'ID_MODULO'
        }
      },
      ID_PROFESOR: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'PROFESORES',
          key: 'ID_PROFESOR'
        }
      }
    }, {
      sequelize,
      tableName: 'LISTA_MODULOS',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "LISTA_MODULOS_pkey",
          unique: true,
          fields: [
            { name: "ID_LISTA_MOD" },
          ]
        },
      ]
    });
    }
  }