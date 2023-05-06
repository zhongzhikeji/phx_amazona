//sendjs为看样本用户
import db from "@/utils/db";
import User from "@/models/User";
import data from "@/utils/data";

import mongodb, { users } from '@/utils/mongodb'


const hander=async (req,res)=>{
    //连接到数据库后
    // await db.connect()
    // await User.deleteMany();
    // await User.insertMany(data.users);
    // await db.disconnect();

    await users.deleteMany({})

    await Promise.all([
        mongodb.users.insertMany(data.users),
        mongodb.projects.insertMany([{ test: 1 }]),
        mongodb.projects.insertMany([{ test: 1 }]),
        mongodb.projects.insertMany([{ test: 1 }]),
        mongodb.projects.insertMany([{ test: 1 }]),
        mongodb.projects.insertMany([{ test: 1 }]),
        mongodb.projects.insertMany([{ test: 1 }]),
        mongodb.projects.insertMany([{ test: 1 }]),
        mongodb.projects.insertMany([{ test: 1 }]),
    ])
    const result = await mongodb.users.find().toArray()


    res.send({ result })
};
export default hander
