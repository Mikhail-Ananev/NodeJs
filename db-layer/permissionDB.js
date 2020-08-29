import { Model, DataTypes } from 'sequelize';
import { fillPermissionDB } from '../helpers/fillPermissionDB';
import { sequelize } from '../config/db';

export class Permission extends Model {}

Permission.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
    },
	operation:
	{
		type:  DataTypes.STRING(100),
		allowNull: false
	},
}, {
  sequelize, 
  modelname: 'Permission',
  freezeTableName: true
});
