//sendjs为样本用户

import db from "@/utils/db";
import User from "@/models/User";
import data from "@/utils/data";


const hander=async (req,res)=>{
    //连接到数据库后
    await db.connect()
    await User.deleteMany();
    await User.insertMany(data.users);
    await db.disconnect();
    res.send({message:'发送成功'})
    console.log('111')
};
export default hander