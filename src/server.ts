import express from "express";

import { router } from "./routes";

const PORT = 3000;
const app = express();

app.use(express.json()); // para que o express entenda o formato json

app.use(router);

app.listen(PORT, () => console.log(`Server runnig at port ${PORT}`));
