import { parse } from "csv-parse";
import fs from "fs";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface ICategory {
  name: string;
  description: string;
}

export class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File) {
    return new Promise<ICategory[]>((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const parser = parse({ delimiter: "," });
      stream.pipe(parser);

      const categories: ICategory[] = [];

      parser
        .on("data", async (line) => {
          const [name, description] = line;

          categories.push({ name, description });
        })
        .on("end", () => {
          fs.unlink(file.path, (err) => {
            if (err) throw err;
          });
          resolve(categories);
        })
        .on("error", (err) => reject(err));
    });
  }

  async execute(file: Express.Multer.File) {
    const categories = await this.loadCategories(file);

    categories.forEach((category) => {
      const { name, description } = category;

      if (!this.categoriesRepository.findByName(name))
        this.categoriesRepository.create({ name, description });
    });
  }
}
