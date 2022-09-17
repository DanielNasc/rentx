import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(req: Request, res: Response) {
    const { name, description } = req.body; // pegando os dados do corpo da requisição

    this.createCategoryUseCase.execute({ name, description });

    return res.status(201).json({ message: "created" }); // retornando a nova categoria criada com status 201
  }
}
