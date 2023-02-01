import { Router } from "express";
import { getChoices, postChoice } from "../controllers/choiceController.js";
import { getChoicesValidation } from "../middlewares/getChoicesValidation.js";
import { postChoiceValidation } from "../middlewares/postChoiceValidation.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { postChoiceSchema } from "../schemas/postChoiceSchema.js";

const choiceRouter = Router();

choiceRouter.post('/choice', validateSchema(postChoiceSchema), postChoiceValidation, postChoice);
choiceRouter.get('/poll/:id/choice', getChoicesValidation, getChoices);

export default choiceRouter;