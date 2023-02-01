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

export async function getChoices(req, res) {
    const id = req.params.id;

    console.log(id);

    const choices = await db.collection(COLLECTION.CHOICE).find({ pollId: id }).toArray();

    try {

        res.status(STATUS_CODE.OK).send(choices);

    } catch (error) {

        res.status(STATUS_CODE.SERVER_ERROR).send(error);

    }

}