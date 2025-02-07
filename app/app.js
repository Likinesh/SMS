import express from 'express';
import morgan from 'morgan';
import connectDB from '../DB/ConnectDB.js';
import dotenv from 'dotenv';
import AdminRouter from '../routes/Academics/AdminRoutes.js';
import { errorHandler, NotFoundPage } from '../middleware/globalErrorHandler.js';
import academicRouter from '../routes/Staff/academicYearRoutes.js';

dotenv.config();
const app = express();

//DB connection
connectDB(process.env.MONGO_URL);

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
// Admin
app.use('/api/v1/admin',AdminRouter);
// Academic
app.use('/api/v1/academic-year',academicRouter)

// Error MiddleWare
app.use(NotFoundPage);
app.use(errorHandler)

export default app;