import express from 'express';
import { router as auth} from './router/auth.routes.js';
import morgan from 'morgan';
import { responseErrors } from './lib/response.js';
import { router } from './router/data.routes.js';
import { Validator } from "express-json-validator-middleware";
import { tokenSchema } from './lib/data.js';
import { Validate as validateToken } from './lib/token.js';
const { validate } = new Validator();

const app = express();
import './config/sequelize.js'
import { bd } from './config/sequelize.js';

app.use(morgan("dev"));
app.use((error, req, res, next)=>{
    bd.authenticate().then( s => { console.log('conecc sucees')} ).catch( errot => { console.log('erros') } );
    next();
})
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', auth);
app.use('/api',  validate({ headers : tokenSchema }), validateToken , router);

// middleware errors 
app.use((error, req, res, next) => {
    responseErrors(error, req, res, next)
    next();
});


export {
    app
}
