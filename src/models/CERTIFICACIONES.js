import _sequelize from 'sequelize';
const {Model, Sequelize} = _sequelize;

export default class CERTIFICACIONES extends Model {
    static init(sequelize, DataTypes) {
    return super.init({
      ID_CERTF: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      ID_PROFESOR: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'PROFESORES',
          key: 'ID_PROFESOR'
        }
      },
      NO_CERTF:{
        type: DataTypes.STRING(255),
        allowNull: false
      },
      FECHA_EXP: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      URL_CERT:{
        type:DataTypes.STRING(255),
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'CERTIFICACIONES',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "CERTIFICACIONES_pkey",
          unique: true,
          fields: [
            { name: "ID_CERTF" },
          ]
        },
      ]
    });
    }
  }