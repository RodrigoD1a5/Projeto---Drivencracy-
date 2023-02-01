import express, { json } from "express";
import cors from "cors";
import pollRouter from "./routes/pollRouter.js";
import choiceRouter from "./routes/choiceRouter.js";
import voteRouter from "./routes/voteRouter.js";

const server = express();
server.use(cors());
server.use(json());

const PORT = 5000;

server.use(pollRouter);
server.use(choiceRouter);
server.use(voteRouter);

server.listen(PORT, () => console.log(`Servidor funcionando na porta ${PORT}`))



