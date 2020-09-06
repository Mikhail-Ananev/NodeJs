import { userGroupModel } from "../models/userGroup"

export const userGroupService = {
    getList: async () => {
        return await userGroupModel.getList(loginSubstr, limit)
    },

    create: async (userData) => {
        return await userGroupModel.create(userData)
    },
}
