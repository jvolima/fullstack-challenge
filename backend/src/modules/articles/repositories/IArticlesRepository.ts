import { Article } from "@prisma/client";

export interface PaginationQueries {
  _start?: number;
  _limit?: number;
}

export interface IArticlesRepository {
  listAll({ _start, _limit }: PaginationQueries): Promise<Article[]>;
}