import { db } from "../database/db.js";
import { COLLECTION } from "../enums/collections.js";
import { STATUS_CODE } from "../enums/statusCode.js";

export async function postChoice(req, res) {
    const choice = req.body;

    try {

        await db.collection(COLLECTION.CHOICE).insertOne(choice);

        res.status(STATUS_CODE.CREATED).send(choice);

    } catch (error) {

        res.status(STATUS_CODE.SERVER_ERROR).send(error);

    }
}