import { Request, Response } from "express";
import { container } from "tsyringe";
import { PaginationQueries } from "../../repositories/IArticlesRepository";
import { ListAllUseCase } from "./ListAllUseCase";

export class ListAllController {
  async handle(request: Request, response: Response) {
    const { _start, _limit } = request.query;

    const listAllUseCase = container.resolve(ListAllUseCase);

    const articles = await listAllUseCase.execute({
      _start: parseInt(_start as string),
      _limit: parseInt(_limit as string)
    });

    return response.json(articles);
  }
}