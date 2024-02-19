// Package Imports
import express from 'express';

// Internal Imports
import { config } from './config/config.mjs';
import sequelize from './db/db.mjs';
import globalErrorHandler from './middlewares/errors/globalErrorHandler.mjs';
import indexRouter from './routes/api/index.mjs';

const app = express();

app.use(express.json());

app.use('/api', indexRouter);

app.use(globalErrorHandler);

app.listen(config.port, config.host, () => {
	console.log(`Server is running on http://${config.host}:${config.port}`);
	sequelize
		.authenticate()
		.then(async () => {
			console.log('Database connected');
			await sequelize.query(
				`SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''))`
			);
		})
		.catch((err) => {
			console.error('Unable to connect to the database:', err);
		});
});
