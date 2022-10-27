import express from 'express';
import { app as run } from './app.js'
import dotenv from 'dotenv';

// initializion
dotenv.config()

const app =  express();

app.use(run);

app.listen( process.env.PORT || 3000,()=>{
    console.log("listener port 3000");
})