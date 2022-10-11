import { Router } from "express";
import multer from "multer";

import { createCategoriesController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRouter = Router();
const upload = multer({ dest: "./tmp" });

categoriesRouter.post("/", (req, res) => {
  return createCategoriesController.handle(req, res);
});

categoriesRouter.get("/", (_, res) => {
  return listCategoriesController.handle(_, res);
});

categoriesRouter.post("/import", upload.single("file"), (req, res) => {
  return importCategoryController.handle(req, res);
});

export { categoriesRouter };
