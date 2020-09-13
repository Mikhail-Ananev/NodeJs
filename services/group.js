import { groupModel } from "../models/group"

export const groupService = {
    getById: async (groupId) => {
        return await groupModel.getById(groupId)
    },

    getList: async () => {
        return await groupModel.getList()
    },

    create: async (groupData) => {
        return await groupModel.create(groupData)
    },

    edit: async (groupData) => {
        return await groupModel.edit(groupData)
    },

    delete: async (groupId) => {
        return await groupModel.delete(groupId)
    },
}
