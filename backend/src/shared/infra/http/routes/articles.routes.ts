import { Router } from "express";
import { FindByIdController } from "../../../../modules/articles/useCases/findById/FindByIdController";
import { ListAllController } from "../../../../modules/articles/useCases/listAll/ListAllController";

const articlesRoutes = Router();

const listAllController = new ListAllController();
const findByIdController = new FindByIdController();

articlesRoutes.get("/", listAllController.handle);
articlesRoutes.get("/:id", findByIdController.handle);

export { articlesRoutes }