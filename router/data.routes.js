import { Router } from 'express';
import { All, update } from '../controllers/data.js';

 const router = Router();

 router.get('/all', All)
 router.post('/update', update)
//  router.get('/update', All)
//  router.get('/delete', All)

 export { router }