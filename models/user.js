import users from "../helpers/users_from_csv";
import { v4 as uuidv4 } from 'uuid';

export const userModel = {
    getById: (userId) => {
        return new Promise(resolve =>{
            return resolve(
                users.find(user => user.id === userId && !user.isDeleted)
            );
        });
    },

    getList: (loginSubstr, limit) => {
        const constraint = !!loginSubstr;
        const filteredUsers = users.filter(user => {
            return !user.isDeleted && (!constraint || user.login.includes(loginSubstr));
        });

        filteredUsers.sort((u1, u2) => u1.login.localeCompare(u2.login));
        return new Promise(resolve => resolve(filteredUsers.slice(0, constraint ? limit : Infinity)));
    },

    create: (userData) => {
        const newUser = {
            ...userData,
            id: uuidv4(),
            isDeleted: false
        };

        users.push(newUser);
        return new Promise(resolve => resolve(newUser));
    },

    edit: (userData) => {
        const editableUserIndex = users.findIndex(u => u.id === userData.id);

        if (~editableUserIndex) {
            userData.isDeleted = users[editableUserIndex].isDeleted;
            users.splice(editableUserIndex, 1, userData);
        }

        return new Promise(resolve => resolve(userData));
    },

    delete: (userId) => {
        const existedUser = users.find(u => u.id === userId);

        if (existedUser) {
            existedUser.isDeleted = true;
        }

        return Promise.resolve();
    }
}
