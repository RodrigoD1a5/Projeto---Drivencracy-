import { getExpireAt } from "../getExpireAt.js";

export function postPollValidation(req, res, next) {
    const { title, expireAt } = req.body.value;
    if (expireAt === "") {
        const expireAtUpdated = getExpireAt();

        res.locals.poll = { title, expireAt: expireAtUpdated };

        next();
    }
}