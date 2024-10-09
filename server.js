import express from "express";
import dotenv from "dotenv";
import {db} from "./db/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

import morgan from 'morgan';
import helmet from 'helmet';
import userRoutes from "./routes/userRoutes.js"
import { errorHandler, routeNotFound } from "./utils/errorHandler.js";
import cookieParser from "cookie-parser"

// console.log(process.env.MONGO_URI);


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(helmet());
app.use(cookieParser());

db();

app.get('/' , (req,res)=>{
    res.send('elozelo');
})


if(process.env.NODE_ENV !== 'production'){
    app.use(morgan("dev"));
}

app.use('/api/users', userRoutes)

app.use('/*', routeNotFound);
app.use(errorHandler)




app.listen(port, console.log('http://localhost:5000'));

