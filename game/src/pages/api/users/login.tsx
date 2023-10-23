import {mongoDb} from "@/../lib/mongoDb";

export default async function handler(req: any, res: any) {
    const db = await mongoDb();
    const users = await db.collection('users');
    const data = JSON.parse(req.body)
    const user = await users.findOne({email : data.email, password : data.password});

    if(user === null){
        res.status(403).json('the email not found')
        return;
    }

    const userId = user._id.toString()

    res
        .setHeader('Set-Cookie', [`userId=${userId}; HttpOnly; Path=/`])
        .status(200)
        .json(user);
}
