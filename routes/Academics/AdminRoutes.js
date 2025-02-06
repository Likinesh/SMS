import express from 'express'
import { deleteAdmin, getAdminById, getAllAdmin, login, publishExam, register, suspendProf, unpublishExam, unsuspendProf, unwithdrawProf, updateAdmin, withdrawProf } from '../../controller/Academics/adminController.js';
import { isLogin } from '../../middleware/IsLogin.js';

const AdminRouter = express.Router();

AdminRouter.post('/register',register)

AdminRouter.post('/login',login)

AdminRouter.get('/All',isLogin,getAllAdmin)

AdminRouter.get('/:id',isLogin,getAdminById)

AdminRouter.put('/:id',isLogin,updateAdmin)

AdminRouter.delete('/:id',isLogin,deleteAdmin)

AdminRouter.put('/suspend/teacher/:id',isLogin,suspendProf);

AdminRouter.put('/unsuspend/teacher/:id',isLogin,unsuspendProf);

AdminRouter.put('/withdraw/teacher/:id',withdrawProf);

AdminRouter.put('/unwithdraw/teacher/:id',unwithdrawProf);

AdminRouter.put('/publish/exam/:id',publishExam);

AdminRouter.put('/unpublish/exam/:id',unpublishExam);

export default AdminRouter