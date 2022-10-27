import { editar, todos } from "../service/registrar.service.js";

export const All = async ( req, res ) => {

    const todosRegistros = await todos();
    res.send(todosRegistros)

}

export const add = async () => {



}

export const update  = async (req , res)=>{

    const { body, validadoToken } = req

    const respuesta = await editar(  body, validadoToken.identificador );

    res.send(respuesta)

}