import { Article } from "@prisma/client";

export interface PaginationQueries {
  _start?: number;
  _limit?: number;
}

export interface IArticlesRepository {
  listAll({ _start, _limit }: PaginationQueries): Promise<Article[]>;
  findById(id: number): Promise<Article>;
  deleteById(id: number): Promise<void>;
}