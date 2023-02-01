import { Router } from "express";
import { postVote } from "../controllers/voteController.js";
import { postVoteValidation } from "../middlewares/postVoteValidation.js";

const voteRouter = Router();

voteRouter.post('/choice/:id/vote', postVoteValidation, postVote);

export default voteRouter;