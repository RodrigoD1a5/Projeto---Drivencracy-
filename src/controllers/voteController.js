import { db } from "../database/db.js";
import { COLLECTION } from "../enums/collections.js";
import { STATUS_CODE } from "../enums/statusCode.js";
import { getExpireAt } from "../getExpireAt.js";


export async function postVote(req, res) {
    const idChoice = req.params.id;

    try {

        await db.collection(COLLECTION.VOTE).insertOne({ idChoice, date: getExpireAt(0) });

        res.sendStatus(STATUS_CODE.CREATED);

    } catch (error) {

        res.status(STATUS_CODE.SERVER_ERROR).send(error);

    }
}