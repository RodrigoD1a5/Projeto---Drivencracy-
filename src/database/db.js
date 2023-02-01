import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);

try {
    await mongoClient.connect();
    console.log("Concectado ao banco de dados");
}
catch (error) {
    console.log(error.message);
}

const db = mongoClient.db();

export { db };