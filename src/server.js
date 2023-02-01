import express, { json } from "express";
import cors from "cors";
import pollRouter from "./routes/pollRouter.js";
import { getExpireAt } from "./getExpireAt.js";

const server = express();
server.use(cors());
server.use(json());

const PORT = 5000;

server.use(pollRouter);

server.listen(PORT, () => console.log(`Servidor funcionando na porta ${PORT}`))



