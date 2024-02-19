const globalErrorHandler = (err, req, res, next) => {
	console.error(err);

	if (err.name === 'SequelizeUniqueConstraintError') {
		res.status(409).json({
			status: 'error',
			code: 409,
			message: err.errors[0].message,
		});
	}

	res.status(500).json({
		status: 'error',
		code: 500,
		message: err.errors?.[0]?.message || err.message || 'Server Error',
	});
};

export default globalErrorHandler;
