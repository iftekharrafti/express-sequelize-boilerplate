import { Sequelize } from 'sequelize';
import { config } from '../config/config.mjs';

const sequelize = new Sequelize(
	config.db_name,
	config.db_user,
	config.db_password,
	{
		host: config.db_host,
		dialect: 'mysql',
		dialectOptions: {
			multipleStatements: true,
		},
		timezone: '+06:00', // for writing to database
	}
);

sequelize.sync({
	force: false,
	alter: true,
});

export default sequelize;
