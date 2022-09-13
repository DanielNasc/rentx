import { SpecificationsRepository } from "../repositories/SpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationService {
  constructor(private specificationsRepository: SpecificationsRepository) {}

  execute({ name, description }: IRequest) {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists)
      throw new Error("specification already exists lol");

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}
