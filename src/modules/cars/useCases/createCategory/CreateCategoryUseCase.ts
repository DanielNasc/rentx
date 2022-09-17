import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

/*
  [x] definir o tipo de retorno
  [x] alterar retorno de erro
  [x] acessar o repositorio
*/

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) throw new Error("category already exists lol");

    this.categoriesRepository.create({ name, description });
  }
}
