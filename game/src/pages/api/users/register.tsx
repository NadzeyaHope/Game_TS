// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {mongoDb} from "@/../lib/mongoDb";

export default async function handler(req: any, res: any) {
    const db = await mongoDb();
    const users = await db.collection('users');
    const data = JSON.parse(req.body);
    const checked = await users.find({email: data.email}).toArray();
    if(checked.length > 0){
        return JSON.stringify({
            hasError : true,
            message : 'Email Is taken'
        })
    }
    const result = await users.insertOne(data);
    const userId = result.insertedId.toString();
    res.setHeader('Set-Cookie', [`userId=${userId}; HttpOnly; Path=/`])
    res.status(201).json({});
}
