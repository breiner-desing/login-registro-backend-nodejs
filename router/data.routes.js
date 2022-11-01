import { Router } from 'express';
import { Validator } from 'express-json-validator-middleware';
import { add, All, deleteUser, update } from '../controllers/data.js';
import { NewUserSchema, RegistroSchema } from '../lib/data.js';
const { validate } = new Validator();
 const router = Router();

 router.get('/all', All)
 router.post('/update', update)
 router.get('/create', validate({ body : NewUserSchema }) , add)
 router.get('/delete',validate({ body : RegistroSchema }), deleteUser)

 export { router }