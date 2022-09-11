import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  private epicDatabase: Category[];

  constructor() {
    this.epicDatabase = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const newCategory = new Category();

    Object.assign(newCategory, { name, description, created_at: new Date() });

    this.epicDatabase.push(newCategory);
  }

  all(): Category[] {
    return this.epicDatabase;
  }

  findByName(name: string) {
    return this.epicDatabase.find((category) => category.name === name);
  }
}
