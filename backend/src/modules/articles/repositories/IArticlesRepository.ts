import { Article } from "@prisma/client";

export enum OrderBy {
  ASC = "asc",
  DESC = "desc",
}

export interface PaginationQueries {
  _start?: number;
  _limit?: number;
  _orderBy?: OrderBy;
}

export interface IArticlesRepository {
  listAll({ _start, _limit, _orderBy }: PaginationQueries): Promise<Article[]>;
  findById(id: number): Promise<Article>;
  deleteById(id: number): Promise<void>;
}