import { inject, injectable } from "tsyringe";
import { IArticlesRepository, PaginationQueries } from "../../repositories/IArticlesRepository";

@injectable()
export class ListAllUseCase {
  constructor (
    @inject("ArticlesRepository")
    private articlesRepository: IArticlesRepository
  ) {}

  async execute({ _start, _limit }: PaginationQueries) {
    const articles = await this.articlesRepository.listAll({ _start, _limit });

    return articles;
  } 
}