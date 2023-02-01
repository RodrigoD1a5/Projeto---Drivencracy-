import { Router } from "express";
import { postPoll } from "../controllers/pollController.js";

const pollRouter = Router();

pollRouter.post('/poll', postPoll);

export default pollRouter;