import {MongoClient} from 'mongodb';

const url = 'mongodb+srv://root:YlJ5Iu2uAbOEQ89B@cluster0.z95pt.mongodb.net/test';
const client = new MongoClient(url);
const dbName = 'Game';

const createClientDb = async () => {
    await client.connect();
    return client.db(dbName);
}

let clientDb: any = null;

export const mongoDb = () => {
    if (clientDb === null) {
        clientDb = createClientDb();
    }

    return clientDb;
}
