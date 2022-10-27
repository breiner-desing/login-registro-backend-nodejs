import { UserRegistro } from '../models/registro.js';
import { login } from '../models/login.js';

export const regiUser = async (req) => {
    UserRegistro.create(req);
}

export const resgisLogin = async (req) => {
    login.create(req)
}

export const logear = async ( correo )  => {
    
    const res = await login.findOne({ 
        where : {
            correo
        }
     }).then(resp => resp).catch(error => { throw  "error login" });

    return res.get()

}

export const getdata = async ( identificador )  => {

    return  await UserRegistro.findOne({ 
        where : {
            identificador 
        }
     }).then(resp => resp.get()).catch(error => { throw  "error login" });

}

export const correoValid = async ( correo )=>{
    
    const correoval = await UserRegistro.findOne({ 
        where : {
            correo
        }
     }).catch(errors => {
        console.log(error)
        throw errors
     });
    return correoval

}

export const todoUsers = async () => {

    return await UserRegistro.findAll().then(res => res).catch(error => {
        throw "No trajo nada"
    })

}

export const update = async ( User , identificador )=>{
    return await UserRegistro.update( User,{ where: { identificador } }).then(res => res).catch( error => {
        throw "Error de actualizacion " 
    } )    
}

export const finByIdentificador = async ( identificador )=>{
    return await UserRegistro.findOne({
        attributes: ['identificador','permisos'],
        where : {
            identificador
        }
    }).then(res => res.get()).catch(error => {
        throw "No existe identificador"
    })
}

export const deleteUser = async (identificador) => {
    return await UserRegistro.destroy({
        where : {
            identificador
        }
    }).then(resp => resp).catch( error => { 
        throw 'Error al eliminar usuario'
    })
}
export const deleteLogin = async (identificador) => {
    return await login.destroy({
        where : {
            identificador
        }
    }).then(resp => resp).catch( error => { 
        throw 'Error al eliminar usuario'
    })
}
