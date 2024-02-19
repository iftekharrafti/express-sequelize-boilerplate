import { Router } from 'express';
import adminRouter from './admin/index.mjs';

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
	res.json({ message: 'Hello, World!' });
});

indexRouter.use('/admins', adminRouter);

export default indexRouter;
