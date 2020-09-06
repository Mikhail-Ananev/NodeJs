import { UserGroup } from "../db-layer/userGroupDB";

export const userGroupModel = {
    getList: () => {
        return UserGroup.findAll().catch(err => console.dir(err));
    },

    create: (groupData) => {
        return UserGroup.create({
                group_Id: groupData.groupId,
                user_Id: groupData.userIds,
            });
    },

    deleteUser: (userId) => {
        return UserGroup.deleteUser({
                where: {
                    user_Id: userId
                }
            });
    },

    deleteGroup: (groupId) => {
        return UserGroup.deleteGroup({
                where: {
                    group_Id: groupId
                }
            });
    }
};
