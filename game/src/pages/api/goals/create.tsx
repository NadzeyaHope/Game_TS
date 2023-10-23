// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {mongoDb} from "@/../lib/mongoDb";

export default async function handler(req: any, res: any) {
    const {userId} = req.cookies;
    if (!userId) {
        res.status(401).json('You do not have permissions');
        return
    }

    const db = await mongoDb();
    const users = await db.collection('goals');
    const data = JSON.parse(req.body);
    const result = await users.insertOne({...data, userId});

    console.log(result)

    res.status(201).json(result);
}
