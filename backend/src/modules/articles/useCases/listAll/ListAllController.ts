import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllUseCase } from "./ListAllUseCase";

export class ListAllController {
  async handle(request: Request, response: Response) {
    const listAllUseCase = container.resolve(ListAllUseCase);

    const articles = await listAllUseCase.execute();

    return response.json(articles);
  }
}