import { Article } from "@prisma/client";

export interface IArticlesRepository {
  listAll(): Promise<Article[]>;
}