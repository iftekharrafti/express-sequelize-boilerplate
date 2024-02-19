import { DataTypes } from 'sequelize';
import sequelize from '../../db/db.mjs';
import { Role } from '../role/role.model.mjs';

export const Admin = sequelize.define(
	'admin',
	{
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: {
				msg: 'Username already exists',
			},
			validate: {
				notNull: {
					msg: 'Username is required',
				},
				notEmpty: {
					msg: 'Username is required',
				},
			},
		},
		password: {
			type: DataTypes.STRING,
		},
		role_id: {
			type: DataTypes.INTEGER,
			references: {
				model: Role,
			},
		},
	},
	{
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	}
);

// Associate the role model with the admin model
Role.hasMany(Admin, {
	foreignKey: 'role_id',
});

Admin.belongsTo(Role, {
	foreignKey: 'role_id',
});
