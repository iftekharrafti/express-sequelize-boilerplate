import 'dotenv/config';

const {
	MODE,
	DEV_PORT,
	PROD_PORT,
	DEV_HOST,
	PROD_HOST,
	DEV_DB_NAME,
	PROD_DB_NAME,
	DEV_DB_USER,
	PROD_DB_USER,
	DEV_DB_PASSWORD,
	PROD_DB_PASSWORD,
	DEV_DB_HOST,
	PROD_DB_HOST,
} = process.env;

export const config = {
	mode: MODE,
	port: MODE === 'dev' ? DEV_PORT : PROD_PORT,
	host: MODE === 'dev' ? DEV_HOST : PROD_HOST,
	db_name: MODE === 'dev' ? DEV_DB_NAME : PROD_DB_NAME,
	db_user: MODE === 'dev' ? DEV_DB_USER : PROD_DB_USER,
	db_password: MODE === 'dev' ? DEV_DB_PASSWORD : PROD_DB_PASSWORD,
	db_host: MODE === 'dev' ? DEV_DB_HOST : PROD_DB_HOST,
};
