import { DataTypes } from 'sequelize';
import { bd } from '../config/sequelize.js'


export const login = bd.define('login', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }, identificador: {
        type: DataTypes.STRING
    }, correo: {
        type: DataTypes.STRING
    }, contrasenia: {
        type: DataTypes.STRING
    }

}, {
    timestamps: false,
});
