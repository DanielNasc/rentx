import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  private epicDatabase: Category[];
  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.epicDatabase = [];
  }

  public static getIntance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }

    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const newCategory = new Category({
      name,
      description,
      created_at: new Date(),
    });

    this.epicDatabase.push(newCategory);
  }

  all(): Category[] {
    return this.epicDatabase;
  }

  findByName(name: string) {
    return this.epicDatabase.find((category) => category.name === name);
  }
}
