import { Sequelize, Model, DataTypes } from 'sequelize';
import { fillGroupDB } from '../helpers/fillGroupDB';

class Group extends Model {}

function initGroup(sequelize) {
	Group.init({
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4,
			field: 'group_id'
		},
		name: {
			type:  DataTypes.STRING(100),
			allowNull: false
		},
		permissions:
		{
			type:  DataTypes.ARRAY(DataTypes.STRING(50)),
			validate: {
				isIn: [['READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES']],
			}
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
}

export { initGroup, Group };
