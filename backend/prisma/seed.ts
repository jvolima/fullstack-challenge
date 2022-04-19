import { prisma } from "../src/prisma";
import { api } from "../src/services/api";

export interface Article {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  featured: boolean;
}

async function main() {
  const response = await api.get("articles?_limit=100");

  const articles = response.data as Article[];

  await Promise.all(articles.map(async (article) => {
    const articleAlreadyExists = await prisma.article.findUnique({
      where: {
        id: article.id
      }
    });

    if(articleAlreadyExists) {
      return;
    }

    await prisma.article.create({
      data: {
        id: article.id,
        title: article.title,
        url: article.url,
        imageUrl: article.imageUrl,
        newsSite: article.newsSite,
        summary: article.summary,
        publishedAt: article.publishedAt,
        featured: article.featured,
      }
    });
  }));

  console.log("Seed finished.");
}

main().catch(error => {
  console.log("Something went wrong.");
})