import { ObjectId } from "mongodb";
import { db } from "../database/db.js";
import { COLLECTION } from "../enums/collections.js";
import { STATUS_CODE } from "../enums/statusCode.js";
import { parseExpireAt } from "../parseExpireAt.js";

export async function postChoiceValidation(req, res, next) {

    const { title, pollId } = req.body;

    const checkPoll = await db.collection(COLLECTION.POLL).findOne({ _id: new ObjectId(pollId) });

    if (!checkPoll) return res.sendStatus(STATUS_CODE.NOT_FOUND);

    const choices = await db.collection(COLLECTION.CHOICE).find({ pollId }).toArray();

    const checkTitle = choices.find((t) => t.title === title);

    if (checkTitle) return res.sendStatus(STATUS_CODE.CONFLICT);

    const checkExpire = parseExpireAt(checkPoll.expireAt);

    if (checkExpire) return res.sendStatus(STATUS_CODE.FORBIDDEN);

    try {

        next();

    } catch (error) {

        res.status(STATUS_CODE.SERVER_ERROR).send(error);

    }

}