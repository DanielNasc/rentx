import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

const categoriesRepository = CategoriesRepository.getIntance();
const createCategoriesUseCase = new CreateCategoryUseCase(categoriesRepository);
export const createCategoriesController = new CreateCategoryController(
  createCategoriesUseCase
);
