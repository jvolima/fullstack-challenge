import { Router } from "express";
import { ListAllController } from "../../../../modules/articles/useCases/listAll/ListAllController";

const articlesRoutes = Router();

const listAllController = new ListAllController();

articlesRoutes.get("/", listAllController.handle);

export { articlesRoutes }