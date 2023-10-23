import {mongoDb} from "@/../lib/mongoDb";
import {ObjectId} from 'mongodb';

export default async function handler(req: any, res: any) {
    const {userId} = req.cookies;
    if (!userId) {
        res.status(401).json('You do not have permissions');
        return
    }

    const db = await mongoDb();
    const users = await db.collection('users');

    const user = await users.findOne({_id : new ObjectId(userId)});

    if (user === null) {
        res.status(401).json('You do not have permissions');
        return
    }

    res.json(user)
}
