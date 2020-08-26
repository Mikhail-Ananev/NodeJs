import { userModel } from "../models/user"

export const userService = {
    getById: async (userId) => {
        return await userModel.getById(userId)
    },

    getList: async (loginSubstr, limit) => {
        return await userModel.getList(loginSubstr, limit)
    },

    create: async (userData) => {
        return await userModel.create(userData)
    },

    edit: async (userData) => {
        return await userModel.edit(userData)
    },

    delete: async (userId) => {
        return await userModel.delete(userId)
    },
}
