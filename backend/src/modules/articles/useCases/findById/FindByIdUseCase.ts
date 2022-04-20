import { inject, injectable } from "tsyringe";
import { IArticlesRepository } from "../../repositories/IArticlesRepository";
import { ArticleNotFound } from "./errors/ArticleNotFound";

@injectable()
export class FindByIdUseCase {
  constructor (
    @inject("ArticlesRepository")
    private articlesRepository: IArticlesRepository
  ) {}

  async execute(id: number) {
    const article = await this.articlesRepository.findById(id);

    if(!article) {
      throw new ArticleNotFound();
    }

    return article;
  }
}