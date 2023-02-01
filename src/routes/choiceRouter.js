import { Router } from "express";
import { postChoice } from "../controllers/choiceController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { postChoiceSchema } from "../schemas/postChoiceSchema.js";

const choiceRouter = Router();

choiceRouter.post('/choice', validateSchema(postChoiceSchema), postChoice);

export default choiceRouter;