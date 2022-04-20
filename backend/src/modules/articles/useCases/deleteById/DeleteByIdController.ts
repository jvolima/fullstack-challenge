import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteByIdUseCase } from "./DeleteByIdUseCase";

export class DeleteByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteByIdUseCase = container.resolve(DeleteByIdUseCase);

    await deleteByIdUseCase.execute(Number(id));

    return response.status(204).send();
  }
}