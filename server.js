import express from "express";
import { loaders } from "./loaders";
import { PORT } from "./config";

function startApp () {
  const app = express();

  loaders(app);
  
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  });
}

startApp();
