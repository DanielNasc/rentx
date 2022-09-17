import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";

import { createCategoriesController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post("/", (req, res) => {
  return createCategoriesController.handle(req, res);
});

categoriesRouter.get("/", (_, res) => {
  return listCategoriesController.handle(_, res);
});

export { categoriesRouter };
