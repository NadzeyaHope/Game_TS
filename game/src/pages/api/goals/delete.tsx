// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {mongoDb} from "@/../lib/mongoDb";
import {ObjectId} from "mongodb";

export default async function handler(req: any, res: any) {
    const {userId} = req.cookies;
    if (!userId) {
        res.status(401).json('You do not have permissions');
        return
    }
    const db = await mongoDb();
    const users = await db.collection('goals');
    const id = JSON.parse(req.body);
    const result = await users.deleteOne({_id: new ObjectId(id)});

    res.status(201).json('done');
}
