import { Group } from "../db-layer/groupDB";

export const groupModel = {
    getById: (groupId) => {
        return Group.findByPk(groupId).catch((err) => console.error(err));
    },

    getList: () => {
        return Group.findAll();
    },

    create: (groupData) => {
        return Group.create({
            name: groupData.name,
            permissions: groupData.permissions,
            });
    },

    edit: (groupData) => {
        return Group.update({
            name: groupData.name,
            permissions: groupData.permissions,
          }, {
            where: {
              id: groupData.id
            }
          });
    },

    delete: (groupId) => {
        return Group.delete({
            where: {
              id: groupId
            }
          });
    }
}
