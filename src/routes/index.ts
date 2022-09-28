import { Router } from "express";

import { categoriesRouter } from "./categories.routes";
import { specificationsRouter } from "./specifications.routes";

const router = Router();

router.use("/categories", categoriesRouter); // usando o router de categorias
router.use("/specifications", specificationsRouter);

export { router };
