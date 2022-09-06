import _sequelize from 'sequelize';
const {Model, Sequelize} = _sequelize;

export default class MODULOS extends Model {
    static init(sequelize, DataTypes) {
    return super.init({
      ID_MODULO: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      ID_ALUMNO: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ALUMNOS',
          key: 'ID_ALUMNO'
        }
      },
      FECHA_INICIO:{
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      FECHA_FIN: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      TIPO_MOD:{
        type:DataTypes.STRING(255),
        allowNull: false
      },
      NOMBRE: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      CATEGORIA:{
        type: DataTypes.STRING(255),
        allowNull: false
      }
    }, {
      sequelize,
      tableName: "MODULOS",
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "MODULOS_pkey",
          unique: true,
          fields: [
            { name: "ID_MODULO" },
          ]
        },
      ]
    });
    }
  }