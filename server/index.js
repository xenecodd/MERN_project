import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import database from './config/database.js';

dotenv.config();

const app = express();
app.use(cors())
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
const PORT = process.env.PORT || 5000;

database();


app.listen(PORT, () => {
        console.log("PORT OPEN", PORT);
} )