import { Sequelize, Model, DataTypes } from 'sequelize';
import { fillGroupDB } from '../helpers/fillGroupDB';
import { sequelize } from '../config/db';

export class Group extends Model {}

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
