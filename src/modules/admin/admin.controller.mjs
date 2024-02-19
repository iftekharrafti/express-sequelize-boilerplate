import catchError from '../../middlewares/errors/catchError.mjs';
import withTransaction from '../../middlewares/transactions/withTransaction.mjs';
import adminService from './admin.service.mjs';

class AdminController {
	constructor() {
		this.name = 'Admin';
	}

	createAdmin = withTransaction(async (req, res, next, transaction) => {
		const payload = {
			username: req.body?.username,
			password: req.body?.password,
			role_id: req.body?.role_id,
		};

		const admin = await adminService.createAdmin(payload, transaction);
		return res.status(201).json(admin);
	});

	getAdmins = catchError(async (req, res, next) => {
		const admins = await adminService.findAll();
		return res.status(200).json(admins);
	});
}

export default new AdminController();
