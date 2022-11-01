import { generateRandomString } from '../lib/config.js';
import { regiUsuario, login, todos, correoRepetido } from '../service/registrar.service.js'

export const registrar = async ({ body }, res) => {
    const { newUser, newLogin } = body

    const respuesta = await regiUsuario( newUser, newLogin).then(resp => resp);

    res.json(respuesta) ;

}

export const iniciarsesion = async ( {body}, res ) => {
    
    const respuesta = await login( body ).then(resp => resp);

    res.json(respuesta)

}

export const correoValidacion = async ({ body }, res) => {
    const { correo } = body;
    const correoValid = await correoRepetido(correo);
    res.json(correoValid)
}

export const init = async () => {

    const user = {
        "nombre": "admin",
        "apellido": "admin",
        "cedula": 1000000,
        "correo": "admin@admin.com",
        "fecha_expedicion": "2022-10-16T05:00:00.000Z",
        "telefono": 32466666,
        "ciudad": "Cali",
        "identificador": "IyWL8ct23OLwxfcMcg",
        "permisos": 3
    }
    
    const login ={
        "correo": "admin@admin.com",
        "contrasenia": "sol123"
    }

    await regiUsuario( user, login).then(resp => resp);

    console.log("suscess admin")

}



