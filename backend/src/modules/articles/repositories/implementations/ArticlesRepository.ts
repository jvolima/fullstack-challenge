import { Article } from "@prisma/client";
import { prisma } from "../../../../prisma";
import { IArticlesRepository, PaginationQueries } from "../IArticlesRepository";

export class ArticlesRepository implements IArticlesRepository {
  async listAll({ _start, _limit, _orderBy }: PaginationQueries): Promise<Article[]> {
    if (_start && _limit && _orderBy) {
      const articles = await prisma.article.findMany({
        orderBy: {
          publishedAt: _orderBy,
        },
        skip: _start,
        take: _limit,
      });

      return articles;
    } else if (_start && _limit) {
      const articles = await prisma.article.findMany({
        orderBy: {
          publishedAt: "desc",
        },
        skip: _start,
        take: _limit,
      });

      return articles;
    } else if (_start && _orderBy) {
      const articles = await prisma.article.findMany({
        orderBy: {
          publishedAt: _orderBy,
        },
        skip: _start,
      });

      return articles;
    } else if (_start) {
      const articles = await prisma.article.findMany({
        orderBy: {
          publishedAt: "desc",
        },
        skip: _start,
      });

      return articles;
    } else if (_limit && _orderBy) {
      const articles = await prisma.article.findMany({
        orderBy: {
          publishedAt: _orderBy,
        },
        take: _limit,
      });

      return articles;
    } else if (_limit) {
      const articles = await prisma.article.findMany({
        orderBy: {
          publishedAt: "desc",
        },
        take: _limit,
      });

      return articles;
    }

    const articles = await prisma.article.findMany({
      orderBy: {
        publishedAt: "desc",
      }
    });

    return articles;
  }

  async findById(id: number): Promise<Article> {
    const article = await prisma.article.findUnique({
      where: {
        id
      }
    });

    return article;
  }

  async deleteById(id: number): Promise<void> {
    await prisma.article.delete({
      where: {
        id
      }
    });
  }
}