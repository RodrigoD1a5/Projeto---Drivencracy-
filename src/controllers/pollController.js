import { ObjectId } from "mongodb";
import { db } from "../database/db.js";
import { COLLECTION } from "../enums/collections.js";
import { STATUS_CODE } from "../enums/statusCode.js";
import { getExpireAt } from "../getExpireAt.js";


export async function postPoll(req, res) {
    const { title, expireAt } = req.body;

    let expireAtUpdated = expireAt;

    if (expireAt === "") {
        expireAtUpdated = getExpireAt(30);
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

export async function resultPoll(req, res) {
    const _id = req.params.id;

    const poll = await db.collection(COLLECTION.POLL).findOne({ _id: new ObjectId(_id) });

    if (!poll) return res.sendStatus(STATUS_CODE.NOT_FOUND);

    const choices = await db.collection(COLLECTION.CHOICE).find({ pollId: _id }).toArray();

    if (!choices) return res.status(STATUS_CODE.NOT_FOUND).send("Não há nenhuma resposta registrada à enquete!");

    const ids = choices.map(e => `${e._id}`);

    let arrayVotes = [];

    for (let i = 0; i < ids.length; i++) {
        const votes = await db.collection(COLLECTION.VOTE).find({ choiceId: ids[i] }).toArray();

        const object = { idChoice: ids[i], votes: votes.length };

        arrayVotes.push(object);
    }

    let listVotes = arrayVotes.map((e) => e.votes);

    const mostVoted = Math.max(...listVotes);

    const choiceMostVoted = arrayVotes.find((e) => e.votes === mostVoted);

    const titleMostVoted = choices.find((e) => `${e._id}` === `${choiceMostVoted.idChoice}`).title;

    try {
        const objectResult = {
            _id: `${poll._id}`,
            title: poll.title,
            expireAt: poll.expireAt,
            result: {
                title: titleMostVoted,
                votes: choiceMostVoted.votes
            }
        };

        res.status(STATUS_CODE.OK).send(objectResult);

    } catch (error) {

        res.status(STATUS_CODE.SERVER_ERROR).send(error);

    }








}