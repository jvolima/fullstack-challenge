import { Router } from "express";
import { articlesRoutes } from "./articles.routes";

const routes = Router();

routes.get("/", (request, response) => {
  return response.status(200).send("Fullstack Challenge 2021 🏅 - Space Flight News");
});

routes.use("/articles", articlesRoutes);

export { routes }