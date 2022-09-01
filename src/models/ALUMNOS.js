import _sequelize from 'sequelize';
const {Model, Sequelize} = _sequelize;

export default class ALUMNOS extends Model {
    static init(sequelize, DataTypes) {
    return super.init({
      ID_ALUMNO: {
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
      tableName: 'ALUMNOS',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "ALUMNOS_pkey",
          unique: true,
          fields: [
            { name: "ID_ALUMNO" },
          ]
        },
      ]
    });
    }
  }