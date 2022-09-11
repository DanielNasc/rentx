import express from "express";

import { categoriesRouter } from "./routes/categories.routes";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json()); // para que o express entenda o formato json
app.use("/categories", categoriesRouter); // usando o router de categorias

app.listen(PORT, () => console.log(`Server runnig at port ${PORT}`));
