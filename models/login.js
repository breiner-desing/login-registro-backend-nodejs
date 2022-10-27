import { DataTypes } from 'sequelize';
import { bd } from '../config/sequelize.js'


export const login = bd.define('login', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }, identificador: {
        type: DataTypes.NUMBER
    }, correo: {
        type: DataTypes.STRING
    }, contrasenia: {
        type: DataTypes.NUMBER
    }, permisos: {
        type: DataTypes.STRING
    }

}, {
    timestamps: false,
});
