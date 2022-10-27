import { Router } from 'express';
import { Validator } from "express-json-validator-middleware";
import { correoValidSchema, LoginSchema, NewUserSchema, tokenSchema } from '../lib/data.js'
import { iniciarsesion, registrar,  correoValidacion } from '../controllers/registrar.js';

const { validate } = new Validator();
const router = Router();

router
    .post('/registrar', validate({ body : NewUserSchema }), registrar)
    .post('/log', validate({ body : LoginSchema }), iniciarsesion)
    .post('/correo', validate({ body : correoValidSchema }), correoValidacion)

export { router }
  