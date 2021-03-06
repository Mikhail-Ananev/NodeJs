import { routerLoader } from "./routerLoader";
import { sequelize } from "../config/db";

export const loaders = (app) => {
  sequelize
  .authenticate()
  .then(() => {
      console.log('Connection to database!');
  })
  .catch(err => {
      console.log('Can\'t connect to database!');
  });

  routerLoader(app);
};
