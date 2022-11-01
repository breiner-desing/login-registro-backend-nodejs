import { createUser, editar, eliminar, todos } from "../service/registrar.service.js";

export const All = async ( req, res ) => {

    const todosRegistros = await todos();
    res.send(todosRegistros)

}

export const add = async (req , res) => {
    const { body, validadoToken } = req
    const respuesta = await createUser(body, validadoToken)
    res.send(respuesta)
}

export const update  = async (req , res)=>{

    const { body, validadoToken } = req

    const respuesta = await editar(  body, validadoToken.identificador );

    res.send(respuesta)

}
export const deleteUser  = async (req , res)=>{

    const { body, validadoToken } = req

    const respuesta = await eliminar(  body, validadoToken.identificador );

    res.send(respuesta)

}