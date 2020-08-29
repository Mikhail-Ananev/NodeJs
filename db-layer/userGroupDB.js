import { fillUserGroupDB } from '../helpers/fillUserGroupDB';
import { User } from './userDB';
import { Group } from './groupDB';

User.belongsToMany(Group, { through: UserGroup });
Group.belongsToMany(User, { through: UserGroup });

UserGroup.count().then(res => {
	if (res === 0) {
		fillUserGroupDB();
	}
});