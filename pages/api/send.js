//sendjs为看样本用户
import db from "@/utils/db";
import User from "@/models/User";
import data from "@/utils/data";


const hander=async (req,res)=>{
    //连接到数据库后
    await db.connect()
    await User.deleteMany();
    await User.insertMany(data.Users);
    await db.disconnect();
    res.send({message:'发送成功'})
};
export default hander