import { db } from "../database/db.js";
import { COLLECTION } from "../enums/collections.js";
import { STATUS_CODE } from "../enums/statusCode.js";



export async function postPoll(req, res) {
    const poll = req.body;

    try {

        await db.collection(COLLECTION.POLL).insertOne({ poll });

        res.sendStatus(STATUS_CODE.CREATED);

    } catch (error) {

        res.status(STATUS_CODE.SERVER_ERROR).send(error);
    }

}