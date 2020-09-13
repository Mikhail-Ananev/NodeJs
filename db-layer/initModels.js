import { initUser } from "./userDB";
import { initGroup } from "./groupDB";
import { initUserGroup } from "./userGroupDB";

export const initModels = (sequelize) => {
    initUser(sequelize);
    initGroup(sequelize);
    initUserGroup(sequelize);
};
