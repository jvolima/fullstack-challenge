import { Article } from "@prisma/client";
import { prisma } from "../../../../prisma";
import { IArticlesRepository, PaginationQueries } from "../IArticlesRepository";

export class ArticlesRepository implements IArticlesRepository {
  async listAll({ _start, _limit }: PaginationQueries): Promise<Article[]> {
    if (_start && _limit) {
      const articles = await prisma.article.findMany({
        skip: _start,
        take: _limit,
      });

      return articles;
    } else if (_start) {
      const articles = await prisma.article.findMany({
        skip: _start,
      });

      return articles;
    } else if (_limit) {
      const articles = await prisma.article.findMany({
        take: _limit,
      });

      return articles;
    }

    const articles = await prisma.article.findMany();
    return articles;
  }
}