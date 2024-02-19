import sequelize from '../../db/db.mjs';
import catchError from '../errors/catchError.mjs';

const withTransaction = (handler) => {
	return catchError(async (req, res, next) => {
		const transaction = await sequelize.transaction();
		try {
			await handler(req, res, next, transaction);
			await transaction.commit();
		} catch (err) {
			await transaction.rollback();
			next(err);
		}
	});
};

export default withTransaction;
