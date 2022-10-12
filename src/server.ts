import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

const PORT = 3000;
const app = express();

app.use(express.json()); // para que o express entenda o formato json
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.listen(PORT, () => console.log(`Server runnig at port ${PORT}`));
