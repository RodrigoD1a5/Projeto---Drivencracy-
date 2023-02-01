import joi from "joi";

export const postChoiceSchema = joi.object({
    title: joi.string().required(),
    pollId: joi.string().required().min(24).max(24)
});