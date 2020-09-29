import jwt from "jsonwebtoken";
import { SECRET } from "../config";
import { User } from "../db-layer/userDB";
import BadRequestError from "../helpers/errors/badRequestError";
import DatabaseError from "../helpers/errors/databaseError";

export const loginModel = {
    login: ({ login, password }) => {
        const options = {
            where: {
                login: login,
                password: password,
            },
        };

        return User.findAll(options).then(userInfo => {
            if (userInfo.length === 0) {
                throw new BadRequestError('Bad login/password combination');
            }

            if (userInfo.length > 1) {
                throw new DatabaseError('More than one login/password combination');
            }

            const payload = { id: userInfo[0].getDataValue('id') };
            const token = jwt.sign(payload, SECRET, { expiresIn: 60 });

            return token;
        });
    },
};
