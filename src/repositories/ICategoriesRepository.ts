import { Category } from "../model/Category";

// DTO
export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  findByName(name: string): Category | undefined;
  create({ name, description }: ICreateCategoryDTO): void;
  all(): Category[];
}
