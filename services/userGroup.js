import { userGroupModel } from "../models/userGroup"

export const userGroupService = {
    getList: async () => {
        return await userGroupModel.getList()
    },

    create: async (userGroupData) => {
        return await userGroupModel.create(userGroupData)
    },
}
