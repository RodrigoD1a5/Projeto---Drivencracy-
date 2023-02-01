import joi from "joi";

export const postChoiceSchema = joi.object({
    title: joi.string().required(),
    pollId: joi.string().required()
});