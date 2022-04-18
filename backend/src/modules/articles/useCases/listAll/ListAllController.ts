import { Request, Response } from "express";
import { ListAllUseCase } from "./ListAllUseCase";

export class ListAllController {
  async handle(request: Request, response: Response) {
    const listAllUseCase = new ListAllUseCase();

    await listAllUseCase.execute();

    return response.send("Ok");
  }
}