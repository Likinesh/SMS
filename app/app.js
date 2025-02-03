import express from 'express';
import morgan from 'morgan';
import connectDB from '../DB/ConnectDB.js';
import dotenv from 'dotenv';

dotenv.config();

//DB connection
connectDB(process.env.MONGO_URL);

// Middleware
app.use(morgan('dev'));

// Routes
// Admin
app.post('api/v1/admin/register',(req,res)=>{
    try {
        res.status(200).json({status:"Success",data:'Admin Has Been Registered'});
    } catch (error) {
        console.log(error);
        res.json({status:"Fail",error:error.message});
    }
})

const app = express();
export default app;