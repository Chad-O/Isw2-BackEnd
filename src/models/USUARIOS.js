import _sequelize from 'sequelize';
const {Model, Sequelize} = _sequelize;

export default class USUARIOS extends Model {
    static init(sequelize, DataTypes) {
    return super.init({
      ID_USUARIO: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      PRIMER_NOM: {
        type: DataTypes.STRING,
        allowNull: false
      },
      AP_PAT: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      AP_MAT: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      NOM_USUARIO: {
        unique: true,
        type: DataTypes.STRING,
        allowNull: false
      },
      PASSWORD: {
        type: DataTypes.STRING,
        allowNull: false
      },
      E_MAIL: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      FECHA_NAC: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      FECHA_CREACION: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },

      NUMERO_CELULAR: {
        type: DataTypes.STRING(12),
        allowNull: true
      },
      DOC_ID: {
        type: DataTypes.STRING(8),
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'USUARIOS',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "USUARIOS_pkey",
          unique: true,
          fields: [
            { name: "ID_USUARIO" },
          ]
        },
      ]
    });
    }
  }