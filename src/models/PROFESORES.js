import _sequelize from 'sequelize';
const {Model, Sequelize} = _sequelize;

export default class PROFESORES extends Model {
    static init(sequelize, DataTypes) {
    return super.init({
      ID_PROFESOR: {
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
      }
    }, {
      sequelize,
      tableName: 'PROFESORES',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "PROFESORES_pkey",
          unique: true,
          fields: [
            { name: "ID_PROFESOR" },
          ]
        },
      ]
    });
    }
  }