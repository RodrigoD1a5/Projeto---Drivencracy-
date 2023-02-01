import express, { json } from "express";
import cors from "cors";
import pollRouter from "./routes/pollRouter.js";
import choiceRouter from "./routes/choiceRouter.js";
import { parseExpireAt } from "./parseExpireAt.js";
import { getExpireAt } from "./getExpireAt.js";

const server = express();
server.use(cors());
server.use(json());

const PORT = 5000;

server.use(pollRouter);
server.use(choiceRouter);

console.log(getExpireAt(30));

server.listen(PORT, () => console.log(`Servidor funcionando na porta ${PORT}`))



