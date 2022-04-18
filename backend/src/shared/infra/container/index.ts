import { container } from "tsyringe";
import { IArticlesRepository } from "../../../modules/articles/repositories/IArticlesRepository";
import { ArticlesRepository } from "../../../modules/articles/repositories/implementations/ArticlesRepository";

container.registerSingleton<IArticlesRepository>(
  "ArticlesRepository",
  ArticlesRepository
);