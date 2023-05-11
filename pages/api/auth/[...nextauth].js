import NextAuth from "next-auth";
import db from "../../../utils/db";
import User from "../../../models/User";
import bcryptjs from "bcryptjs";
import CredentialsProvider from 'next-auth/providers/credentials'

export default  NextAuth({
    session: {
        strategy:'jwt',
    },
    callbacks: {
        async jwt({token,user}){
            if (user?._id) token._id=user._id;
            if (user?.isAdmin) token.isAdmin=user.isAdmin;
            return token;
        },
        async session({session,token}){
            if (token?._id) session.user._id=token._id;
            if (token?.isAdmin) session.user.isAdmin =token.isAdmin;
            return session
        }
    },
    //提供凭证认证，来自mongodb
    providers:[
        CredentialsProvider({
            async authorize(credentials){
                await db.connect();
                // 根据数据库查找用户
                const user=await User.findOne({
                   email: credentials.email,
                });
                //然后断开连接，保存代码，下一步检查用户和密码一起，如果用户存在
                await db.disconnect();
                if (user && bcryptjs.compareSync(credentials.password, user.password)){
                    return{
                        _id:user._id,
                        name:user.name,
                        email:user.email,
                        image:'f',
                        isAdmin:user.isAdmin,
                    }
                }
                throw new Error('邮箱或密码错误')
            }
        })
    ]
});