import users from "../helpers/users_from_csv";
import { v4 as uuidv4 } from 'uuid';
import { User } from "../db-layer/userDB";
import { Op } from "sequelize";

export const userModel = {
    getById: (userId) => {
        return User.findByPk(userId).catch((err) => console.error(err));
    },

    getList: (loginSubstr, limit) => {
        const options = {
            where: {
                isDeleted: false,
            },
            order: [['login', 'ASC']],
        };

        if (loginSubstr) {
            options.where.login = {
                [Op.substring]: loginSubstr,
            }
        }

        if (limit) {
            options.limit = limit
        }

        return User.findAll(options);
    },

    create: (userData) => {
        return User.create({
            login: userData.login,
            password: userData.password,
            age: userData.age
            });
    },

    edit: (userData) => {
        return User.update({
            login: userData.login,
            password: userData.password,
            age: userData.age
          }, {
            where: {
              id: userData.id
            }
          });;
    },

    delete: (userId) => {
        return User.destroy({
            where: {
              id: userId
            }
          });;
    }
}
