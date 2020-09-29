import { loginModel } from "../models/login"

export const loginService = {
    login: async (loginData) => {
        return await loginModel.login(loginData)
    },
};
