import { UserGroup } from "../db-layer/userGroupDB";
import { User } from "../db-layer/userDB";
import { Group } from "../db-layer/groupDB";

export const fillUserGroupDB = () => {
    Promise.all([User.findAll({ attributes: ['id'] }), Group.findAll({ attributes: ['id'] })])
        .then((data) => {
            const min = data[0].length < data[1].length ? data[0].length : data[1].length;
            const tableDataObj = [];

            for (let i = 0; i < min; i++) {
                tableDataObj.push({
                    UserId: data[0][i].getDataValue('id'),
                    GroupId: data[1][i].getDataValue('id'),
                });              
            }

            UserGroup.bulkCreate(tableDataObj);
        })
};
