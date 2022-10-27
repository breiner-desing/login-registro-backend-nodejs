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

