import joi from "joi";

export const postPollSchema = joi.object({
    title: joi.string().required(),
    expireAt: joi.required()
});