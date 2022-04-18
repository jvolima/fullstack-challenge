import { api } from "../../../../services/api";

export class ListAllUseCase {
  async execute() {
    const response = await api.get("articles?_limit=5");

    console.log(response.data);
  } 
}