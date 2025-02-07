import express from 'express'
import { allacademicYears, createAcademicYear, deleteAcademicYear, singleacademicYears, updateacademicYear } from '../../controller/Academics/academicYearcntl.js';
import { isAdmin, isLogin } from '../../middleware/Validate.js';
const academicRouter = express.Router();

academicRouter.post('/',isLogin,isAdmin,createAcademicYear);
academicRouter.get('/',isLogin,isAdmin,allacademicYears);

academicRouter.get('/:id',isLogin,isAdmin,singleacademicYears);
academicRouter.put('/:id',isLogin,isAdmin,updateacademicYear);
academicRouter.delete('/:id',isLogin,isAdmin,deleteAcademicYear)

export default academicRouter