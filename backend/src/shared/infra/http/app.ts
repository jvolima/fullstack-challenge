import "reflect-metadata";
import "../container";
import cron from "node-cron";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { routes } from "./routes";
import { IAppError } from "../../../core/domain/errors/IAppError";
import { api } from "../../../services/api";
import { Article } from "../../../../prisma/seed";
import { prisma } from "../../../prisma";

const app = express();

app.use(express.json());

app.use(cors());
app.use(routes);
//0 0 9 * * * 
cron.schedule("0 0 9 * * *", async () => {  
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

  console.log("Cron finished.");
});

app.use(
  (
    error: IAppError,
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    return response.status(error.statusCode || 500).json({
      message: error.message
    });
  }
);

export { app }