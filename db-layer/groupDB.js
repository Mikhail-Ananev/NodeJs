import { Sequelize, Model, DataTypes } from 'sequelize';
import { fillGroupDB } from '../helpers/fillGroupDB';
import { sequelize } from '../config/db';

export class Group extends Model {}

Group.init({
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
		defaultValue: Sequelize.UUIDV4
	},
	name: {
		type:  DataTypes.STRING(100),
		allowNull: false
	},
	permissions:
	{
		type:  DataTypes.ARRAY(DataTypes.INTEGER),
	},
}, {
  sequelize, 
  modelname: 'Group',
  freezeTableName: true
});

Group.sync().then(() => Group.count().then(res => {
	if (res === 0) {
		fillGroupDB();
	}
}));
