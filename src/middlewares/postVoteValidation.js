import { STATUS_CODE } from "../enums/statusCode.js";
import { parseExpireAt } from "../parseExpireAt.js";
import { ObjectId } from "mongodb";
import { db } from "../database/db.js";
import { COLLECTION } from "../enums/collections.js";


export async function postVoteValidation(req, res, next) {

    const idChoice = req.params.id;

    const choice = await db.collection(COLLECTION.CHOICE).findOne({ _id: new ObjectId(idChoice) });

    if (!choice) return res.sendStatus(STATUS_CODE.NOT_FOUND);

    const checkPoll = await db.collection(COLLECTION.POLL).findOne({ _id: new ObjectId(choice.pollId) });

    const checkExpire = parseExpireAt(checkPoll.expireAt);

    if (checkExpire) return res.sendStatus(STATUS_CODE.FORBIDDEN);

    try {

        next();

    } catch (error) {

        res.status(STATUS_CODE.SERVER_ERROR).send(error);

    }
}