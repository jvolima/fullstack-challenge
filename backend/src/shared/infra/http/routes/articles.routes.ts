import { Router } from "express";
import { DeleteByIdController } from "../../../../modules/articles/useCases/deleteById/DeleteByIdController";
import { FindByIdController } from "../../../../modules/articles/useCases/findById/FindByIdController";
import { ListAllController } from "../../../../modules/articles/useCases/listAll/ListAllController";

const articlesRoutes = Router();

const listAllController = new ListAllController();
const findByIdController = new FindByIdController();
const deleteByIdController = new DeleteByIdController();

articlesRoutes.get("/", listAllController.handle);
articlesRoutes.get("/:id", findByIdController.handle);
articlesRoutes.delete("/:id", deleteByIdController.handle);

export { articlesRoutes }