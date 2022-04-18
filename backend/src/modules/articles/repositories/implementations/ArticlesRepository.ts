import { Article } from "@prisma/client";
import { prisma } from "../../../../prisma";
import { IArticlesRepository } from "../IArticlesRepository";

export class ArticlesRepository implements IArticlesRepository {
  async listAll(): Promise<Article[]> {
    const articles = await prisma.article.findMany();
    return articles;
  }
}