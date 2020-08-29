import { User } from "../db-layer/userDB";

export const fillUserDB = () => {
	User.bulkCreate([
		{ login: 'Mikhail', password: 'pass1', age: 14 },
		{ login: 'Vitaliy', password: 'pass2', age: 75 },
		{ login: 'Maria', password: 'pass3', age: 25 },
		{ login: 'Olivia', password: 'pass4', age: 83 },
		{ login: 'Olga', password: 'pass5', age: 36 }
	]);
};
