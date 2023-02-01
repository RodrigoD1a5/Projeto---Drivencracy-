import { ObjectId } from "mongodb";
import { db } from "../database/db.js";
import { COLLECTION } from "../enums/collections.js";
import { STATUS_CODE } from "../enums/statusCode.js";

export async function getChoicesValidation(req, res, next) {
    const id = req.params.id;

    if (id.length != 24) return res.send("ID inválido");

    const checkPoll = await db.collection(COLLECTION.POLL).findOne({ _id: new ObjectId(id) });

    if (!checkPoll) return res.sendStatus(STATUS_CODE.NOT_FOUND);

    try {

        next();

    } catch (error) {

        res.status(STATUS_CODE.SERVER_ERROR).send(error);

    }
}