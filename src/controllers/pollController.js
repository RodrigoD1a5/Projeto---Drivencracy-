import { db } from "../database/db.js";
import { COLLECTION } from "../enums/collections.js";
import { STATUS_CODE } from "../enums/statusCode.js";
import { getExpireAt } from "../getExpireAt.js";



export async function postPoll(req, res) {
    const { title, expireAt } = req.body.value;

    let expireAtUpdated = expireAt;

    if (expireAt === "") {
        expireAtUpdated = getExpireAt();
    }

    try {

        await db.collection(COLLECTION.POLL).insertOne({ title, expireAt: expireAtUpdated });

        res.sendStatus(STATUS_CODE.CREATED);

    } catch (error) {

        res.status(STATUS_CODE.SERVER_ERROR).send(error);
    }

}

export async function getPoll(req, res) {
    try {

        const polls = await db.collection(COLLECTION.POLL).find().toArray();

        res.status(STATUS_CODE.OK).send(polls);

    } catch (error) {

        res.status(STATUS_CODE.SERVER_ERROR).send(error);

    }
}