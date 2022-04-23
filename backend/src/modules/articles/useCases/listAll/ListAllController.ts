import { Request, Response } from "express";
import { container } from "tsyringe";
import { OrderBy, PaginationQueries } from "../../repositories/IArticlesRepository";
import { ListAllUseCase } from "./ListAllUseCase";

export class ListAllController {
  async handle(request: Request, response: Response) {
    const { _start, _limit, _orderBy } = request.query;

    const listAllUseCase = container.resolve(ListAllUseCase);

    const articles = await listAllUseCase.execute({
      _start: parseInt(_start as string),
      _limit: parseInt(_limit as string),
      _orderBy: _orderBy as OrderBy,
    });

    return response.json(articles);
  }
}