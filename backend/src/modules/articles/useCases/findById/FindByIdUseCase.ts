import { inject, injectable } from "tsyringe";
import { IArticlesRepository } from "../../repositories/IArticlesRepository";

@injectable()
export class FindByIdUseCase {
  constructor (
    @inject("ArticlesRepository")
    private articlesRepository: IArticlesRepository
  ) {}

  async execute(id: number) {
    const article = await this.articlesRepository.findById(id);

    return article;
  }
}