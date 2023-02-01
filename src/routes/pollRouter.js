import { Router } from "express";
import { getPoll, postPoll } from "../controllers/pollController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { postPollSchema } from "../schemas/postPollSchema.js";

const pollRouter = Router();

pollRouter.post('/poll', validateSchema(postPollSchema), postPoll);
pollRouter.get('/poll', getPoll);

export default pollRouter;