import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdUseCase } from "./FindByIdUseCase";

export class FindByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const findByIdUseCase = container.resolve(FindByIdUseCase);

    const article = await findByIdUseCase.execute(Number(id));

    return response.json(article);
  }
}