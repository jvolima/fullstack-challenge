import { inject, injectable } from "tsyringe";
import { IArticlesRepository } from "../../repositories/IArticlesRepository";

@injectable()
export class ListAllUseCase {
  constructor (
    @inject("ArticlesRepository")
    private articlesRepository: IArticlesRepository
  ) {}

  async execute() {
    const articles = await this.articlesRepository.listAll();

    return articles;
  } 
}