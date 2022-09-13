import { v4 as uuidV4 } from "uuid";

interface ISpecificationProps {
  name: string;
  description: string;
  created_at: Date;
}

export class Specification {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor({ name, description, created_at }: ISpecificationProps) {
    if (!this.id) this.id = uuidV4();

    this.name = name;
    this.description = description;
    this.created_at = created_at;
  }
}
