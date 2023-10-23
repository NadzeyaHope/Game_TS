// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {mongoDb} from "@/../lib/mongoDb";

export default async function handler(req: any, res: any) {
    const {userId} = req.cookies;
    if (!userId) {
        res.status(401).json('You do not have permissions');
        return
    }

    const db = await mongoDb();
    const goals = await db.collection('goals');
    const result = await goals.find({userId}).toArray();

    res.status(200).json(result);
}