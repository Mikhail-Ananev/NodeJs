import { UserGroup } from "../db-layer/userGroupDB";
import { User } from "../db-layer/userDB";

export const fillUserGroupDB = () => {
    Promise.all([User.findAll({ attributes: 'id' }), Group.findAll({ attributes: 'id' })])
        .then((data) => {
            const min = data[0].length < data[1].length ? data[0].length : data[1].length;
            const tableDataObj = [];

            for (let i = 0; i < min; i++) {
                tableDataObj.push({
                    user_id: data[0][i],
                    group_id: data[1][i],
                });              
            }
console.dir(tableDataObj);
            UserGroup.bulkCreate(tableDataObj);
        })
};
