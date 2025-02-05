import express from 'express'
import { deleteAdmin, getAdminById, getAllAdmin, publishExam, register, suspendProf, unpublishExam, unsuspendProf, unwithdrawProf, updateAdmin, withdrawProf } from '../../controller/Academics/adminController.js';

const AdminRouter = express.Router();

AdminRouter.post('/register',register)

AdminRouter.post('/login',)

AdminRouter.get('/',getAllAdmin)

AdminRouter.get('/:id',getAdminById)

AdminRouter.put('/:id',updateAdmin)

AdminRouter.delete('/:id',deleteAdmin)

AdminRouter.put('/suspend/teacher/:id',suspendProf);

AdminRouter.put('/unsuspend/teacher/:id',unsuspendProf);

AdminRouter.put('/withdraw/teacher/:id',withdrawProf);

AdminRouter.put('/unwithdraw/teacher/:id',unwithdrawProf);

AdminRouter.put('/publish/exam/:id',publishExam);

AdminRouter.put('/unpublish/exam/:id',unpublishExam);

export default AdminRouter