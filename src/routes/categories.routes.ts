import { Router } from "express";

import { createCategoriesController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRouter = Router();

categoriesRouter.post("/", (req, res) => {
  return createCategoriesController.handle(req, res);
});

categoriesRouter.get("/", (_, res) => {
  return listCategoriesController.handle(_, res);
});

export { categoriesRouter };
