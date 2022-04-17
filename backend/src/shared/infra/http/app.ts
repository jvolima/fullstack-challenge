import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { routes } from "./routes";
import { IAppError } from "core/domain/errors/IAppError";

const app = express();

app.use(express.json());

app.use(cors());
app.use(routes);

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