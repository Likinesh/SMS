import express from 'express';
import morgan from 'morgan';
import connectDB from '../DB/ConnectDB.js';
import dotenv from 'dotenv';

dotenv.config();
//DB connection
connectDB(process.env.MONGO_URL);

const app = express();

export default app;