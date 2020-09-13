import { Sequelize } from 'sequelize';
import { initModels } from "../db-layer/initModels";

const db = {};

export const sequelize = new Sequelize({
    dialect: 'postgres',
    username: 'gqvsfbwgbosdax',
    password: 'a96b7c444be6b087c55351140856b382b842c24aa98e601894402727f6d0e0f1',
    host: 'ec2-184-72-162-198.compute-1.amazonaws.com',
    port: 5432,
    database: 'df15qd1la28m82',
    dialectOptions: { ssl: { rejectUnauthorized: false } }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

initModels(db.sequelize);

export default db;
