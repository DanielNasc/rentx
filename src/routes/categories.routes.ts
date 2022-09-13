import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post("/", (req, res) => {
  const { name, description } = req.body; // pegando os dados do corpo da requisição

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return res.status(201).json({ message: "created" }); // retornando a nova categoria criada com status 201
});

categoriesRouter.get("/", (_, res) => {
  const allCategories = categoriesRepository.all();

  return res.json(allCategories);
});

export { categoriesRouter };
