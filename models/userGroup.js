import { UserGroup } from "../db-layer/userGroupDB";
import { sequelize } from "../config/db";

export const userGroupModel = {
    getList: () => {
        return UserGroup.findAll().catch(err => console.dir(err));
    },

    create: (userGroupData) => {
        return sequelize.transaction(function(t){
            const tableDataObj = [];
            const userIds = userGroupData.userIds;
    
            for (let i = 0; i < userIds.length; i++) {
                tableDataObj.push({
                    UserId: userIds[i],
                    GroupId: userGroupData.groupId,
                });              
            }
    
            console.dir(tableDataObj);
    
            return UserGroup.bulkCreate(tableDataObj, { transaction: t });
          }, (err) => {
            console.dir(err);
          });
    },
};
