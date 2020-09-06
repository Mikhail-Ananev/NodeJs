import { fillUserGroupDB } from '../helpers/fillUserGroupDB';
import { User } from './userDB';
import { Group } from './groupDB';
import { DataTypes, Model } from 'sequelize';

class UserGroup extends Model {}

function initUserGroup(sequelize) {
	UserGroup.init({
		UserId: {
			type: DataTypes.UUID,
			allowNull: false
		},
		GroupId: {
			type:  DataTypes.UUID,
			allowNull: false
		},
	}, {
		sequelize, 
		modelname: 'UserGroup',
		freezeTableName: true
	});

	User.belongsToMany(Group, { through: UserGroup });
	Group.belongsToMany(User, { through: UserGroup });

	UserGroup.count().then(res => {
		if (res === 0) {
			fillUserGroupDB();
		}
	});
}

export { initUserGroup, UserGroup };
