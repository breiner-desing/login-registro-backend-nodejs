import express from 'express';
import { router as auth} from './router/auth.routes.js';
import morgan from 'morgan';
import { responseErrors } from './lib/response.js';
import { router } from './router/data.routes.js';
import { Validator } from "express-json-validator-middleware";
import { tokenSchema } from './lib/data.js';
import { Validate as validateToken } from './lib/token.js';
import './config/sequelize.js'
import { UserRegistro } from './models/registro.js';
import { login } from './models/login.js';
import { init } from './controllers/registrar.js';
const { validate } = new Validator();

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(async (req, res, next)=>{
    console.log("pase por aca a crear la base de datos")
    await UserRegistro.sync()
    await login.sync()
    await init()
    next()
});

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
