import mongoose from "mongoose";

//空对象：我们要保持以前使用find连接到的mongodb
const connection={};

async function connect(){
    //首先检查是否连接，如果已经连接，我们就不用再次连接
    if (connection.isConnected){
        console.log('已经连接')
        return;
    }
    //准备状态
    if (mongoose.connections.length >0 ){
        connection.isConnected = mongoose.connections[0].readyState;
        // =1，radiusState= 1，回到以前的连接，没必要连接数据库
        if (connection.isConnected === 1){
            console.log('使用以前的连接')
            return
        }
        await mongoose.disconnect()
    }
    //定义数据库对象等于 作为字段连接的对象
    const db=await mongoose.connect(process.env.MONGODB_URI);
    console.log('新连接');
    connection.isConnected=db.connections[0].readyState;
}

//断开连接功能
async function disconnect(){
    //检查连接
    if (connection.isConnected){
        //如果处于生成模式，断开连接
        if (process.env.NODE_ENV ==='production'){
            await mongoose.disconnect();
            connection.isConnected = false;
        }else {
            //没有断开连接，所以只断开连接
            console.log('断开连接')
        }
    }
}

const db={connect,disconnect}
export default db