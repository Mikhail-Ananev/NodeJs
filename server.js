import express from "express";
import { loaders } from "./loaders";
import { PORT } from "./config";
import db from "./config/db";

function startApp () {
	const app = express();

	loaders(app);

	db.sequelize.sync().then(() => {
		app.listen(PORT, () => {
			console.log(`Example app listening at http://localhost:${PORT}`)
		});
	});
}

startApp();
