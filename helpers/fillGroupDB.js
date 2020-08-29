import { Group } from "../db-layer/groupDB";
import { Permission } from "../db-layer/permissionDB";

export const fillGroupDB = () => {
    Permission.sync().then(() => Permission.count().then(res => { //Before filling 'Group' we should check 'Permission'
        if (res === 0) {
            fillPermissionDB()
                .then(() => Group.bulkCreate([
                    { name: 'AllAccess', permissions: 'pass1' },
                    { name: 'AllAccess', permissions: 'pass1' },
                    { name: 'AllAccess', permissions: 'pass1' },
                    { name: 'AllAccess', permissions: 'pass1' },
                ])
            );
        }
    }));
};
