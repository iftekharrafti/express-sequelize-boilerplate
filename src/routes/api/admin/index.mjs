import { Router } from 'express';
import adminController from '../../../modules/admin/admin.controller.mjs';

const adminRouter = Router();

adminRouter
	.route('/')
	.post(adminController.createAdmin)
	.get(adminController.getAdmins);

export default adminRouter;
