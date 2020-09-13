import { Sequelize, Model, DataTypes } from 'sequelize';
import { fillDB } from '../helpers/fillDB';
import { sequelize } from '../config/db';

export class User extends Model {}

User.init({
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
		defaultValue: Sequelize.UUIDV4
	},
	login:
	{
		type:  DataTypes.STRING(100),
		allowNull: false
	},
  password:	{
		type:  DataTypes.STRING(100),
		allowNull: false,
		validate: {
			isAlphanumeric: true
		}
	},
	age: {
		type: DataTypes.INTEGER,
		validate: {
			min: 4,
			max: 130
		}
	},
	isDeleted: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	}
}, {
  sequelize, 
  modelname: 'User',
  freezeTableName: true
});

User.count().then(res => {
	if (res === 0) {
		fillDB();
	}
});
