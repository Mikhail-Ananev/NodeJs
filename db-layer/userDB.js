import { Sequelize, Model, DataTypes } from 'sequelize';
import { fillUserDB } from '../helpers/fillUserDB';
import { sequelize } from '../config/db';

export class User extends Model {}

User.init({
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
		defaultValue: Sequelize.UUIDV4,
		field: 'user_id'
	},
	login: {
		type:  DataTypes.STRING(100),
		allowNull: false
	},
	password: {
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

User.sync().then(() => User.count().then(res => {
	if (res === 0) {
		fillUserDB();
	}
}));
