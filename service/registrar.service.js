import { ComparePassword, generateRandomString } from '../lib/config.js';
import { regiUser, resgisLogin, logear, getdata, correoValid, todoUsers, update, finByIdentificador, deleteUser, deleteLogin } from '../config/connect.js';
import { encryptPassword } from '../lib/config.js';
import { createTokens } from '../lib/token.js';

export const regiUsuario = async (  newUser, newLogin  ) => {
    
    if(newUser.correo != newLogin.correo){
        throw 'Error registrar'
    }

    const valid = await correoValid(newUser.correo);

    if( valid != null){
        return { "Error" : "correo Existente" }
    }
    
    const identificador =  { "identificador": generateRandomString() }
    const { contrasenia } = newLogin
    const crytp = await encryptPassword( contrasenia ).then(resp => resp);

    newUser = Object.assign(newUser , identificador)
    newLogin = Object.assign(newLogin , identificador, { "contrasenia": crytp })

    await regiUser(newUser).then(resp => resp);
    await resgisLogin(newLogin).then(resp => resp);

    return {"success": "Registrado con exito"}

}

export const login  = async ( User ) => {

    const { contrasenia, correo } = User; 

    const data = await logear( correo ).then(resp => resp);
    const valido = await ComparePassword( contrasenia, data.contrasenia)

    if ( !valido ){
        throw { "error":"Error al consultar informacion" }
    }

    User = await getdata( data.identificador ).then(resp => resp.get());
    const token = await createTokens( {"identificador" : data.identificador} );
    console.log(token)
    User =  Object.assign( User , { "token": token })
    console.log(User)
    return User

}

export const correoRepetido = async(newUser) => {

    const valid = await correoValid(newUser.correo);

    if( valid != null){
        return { "Error" : "correo Existente" }
    }
    return { "success" : "valido" }
}

export const todos = async ()=>{

    return todoUsers();
}

export const editar = async ( body, identificadorToken ) => {

    const bodyIdentificador = body.identificador;
    delete body.identificador
    delete body.id

    const { identificador, permisos} = await finOne(identificadorToken)

    if (permisos == '1' && identificador != bodyIdentificador  ){
       return {"Error":'No tienes Permisos para Editar este usuario'}
    }
    
    await update(body, bodyIdentificador)

    return {"Success":'Actualizado con exito'} ;
   
}

export const eliminar = async ( User, identificadorToken ) => {
    const { permisos } = await finOne(identificadorToken)
    const { identificador } = User
    if(permisos != '3'){
        return {'Error' :'No tiene permiso para Eliminar'}
    }

    await deleteUser( identificador );
    await deleteLogin( identificador );
    return {'success': 'eliminado con exito'}
}

export const createUser = async ( User, identificadorToken)=>{

    let { newUser, newLogin } = User
    const { permisos } = await finOne(identificadorToken)
    
    if(permisos == '1'){
        return {'Error' :'No tiene permiso para Eliminar'}
    }

    const valid = await correoValid(newUser.correo);

    if( valid != null){
        return { "Error" : "correo Existente" }
    }

    if(newUser.correo != newLogin.correo){
        throw 'Error registrar'
    }

    const identificador =  { "identificador": generateRandomString() }
    const { contrasenia } = newLogin
    const crytp = await encryptPassword( contrasenia ).then(resp => resp);

    newUser = Object.assign(newUser , identificador)
    newLogin = Object.assign(newLogin , identificador, { "contrasenia": crytp })

    await regiUser(newUser).then(resp => resp);
    await resgisLogin(newLogin).then(resp => resp);

    return {"success": "Registrado con exito"}
}

export const finOne = (identificador) => {

    return finByIdentificador(identificador);

}