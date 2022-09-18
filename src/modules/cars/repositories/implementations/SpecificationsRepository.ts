import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationsRepository";
import { Specification } from "../../model/Specifications";

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const newSpecification = new Specification({
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(newSpecification);
  }

  findByName(name: string): Specification | undefined {
    return this.specifications.find((spec) => spec.name === name);
  }
}
