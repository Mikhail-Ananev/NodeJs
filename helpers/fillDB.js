import { User } from "../config/db";

export const fillDB = () => {
    User.create({
	login: 'Mikhail',
	password: 'pass1',
	age: 14
    });
    User.create({
        login: 'Vitaliy',
        password: 'pass2',
        age: 14
    });
    User.create({
        login: 'Maria',
        password: 'pass3',
        age: 14
    });
    User.create({
        login: 'Olivia',
        password: 'pass4',
        age: 14
    });
};
