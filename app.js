import express from "express";
import authRouter from "./routes/authRouter.js";
import blogsRouter from "./routes/blogsRouter.js";
import { requestLogger } from "./middleware/loggerMiddleware.js"
import errorHandler from "./errors/errorHandler.js";

const app = express();

app.use(express.json());
app.use(requestLogger);

app.use("/api/auth", authRouter)
app.use("/api", blogsRouter);

app.use(errorHandler);
app.listen(3000);