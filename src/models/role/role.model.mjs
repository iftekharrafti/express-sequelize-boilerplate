import { DataTypes } from 'sequelize';
import sequelize from '../../db/db.mjs';

export const Role = sequelize.define(
	'role',
	{
		name: {
			type: DataTypes.STRING,
		},
		type: {
			type: DataTypes.ENUM,
			defaultValue: 'admin',
			values: ['super-admin', 'admin', 'publisher', 'custom'],
		},
	},
	{
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	}
);
