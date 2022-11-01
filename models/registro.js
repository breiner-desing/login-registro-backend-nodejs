import { DataTypes } from 'sequelize';
import { bd } from '../config/sequelize.js'


export const UserRegistro = bd.define('registro', {
    
    id :{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre :{
        type: DataTypes.STRING
    }, apellido:{
        type: DataTypes.STRING
    }, cedula:{
        type: DataTypes.INTEGER
    }, correo:{
        type: DataTypes.STRING
    }, fecha_expedicion:{
        type: DataTypes.DATE
    }, telefono:{
        type: DataTypes.INTEGER
    }, ciudad:{
        type: DataTypes.STRING
    }, identificador:{
        type: DataTypes.STRING
    }, permisos:{
        type: DataTypes.INTEGER,
        defaultValue : 1
    }

  }, {
    timestamps: false,
});
