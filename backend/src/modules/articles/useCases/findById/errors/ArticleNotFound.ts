import { IAppError } from "../../../../../core/domain/errors/IAppError";

export class ArticleNotFound implements IAppError {
  message: string; 
  statusCode: number;
  name: string;
  stack?: string;

  constructor () {
    this.message = "Article not found.";
    this.statusCode = 404;
    this.name = "ArticleNotFoundError";
  }
}