import { inject, injectable } from "tsyringe";
import { IArticlesRepository } from "../../repositories/IArticlesRepository";

@injectable()
export class ListAllUseCase {
  constructor (
    @inject("ArticlesRepository")
    private articlesRepository: IArticlesRepository
  ) {}

  async execute() {
    console.log("Passei aqui");
  } 
}