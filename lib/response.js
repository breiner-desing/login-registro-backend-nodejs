import { ValidationError } from "express-json-validator-middleware";
import  jwt  from "jsonwebtoken";

export const responseErrors = ( error, req , resp, next ) => {

    console.log("error token")

    if (error instanceof ValidationError) {
        resp.status(200).send({"error" : "formulario invalido " }) ;
    }
    if (error instanceof jwt.JsonWebTokenError) {
        
        resp.status(200).send({"error" : " token invalido " + error.message }) ;
    }
    
    if (error){
        resp.status(200).send({"error" : "error consultar con proveedor"});
    }

    next();
}

export const responseSuccess = (error, req , resp, next ) => {



}