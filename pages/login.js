import Layout from "@/components/Layout";
import Link from "next/link";
import {useForm} from "react-hook-form";

export default function LoginScreen(){
    //使用 use-form-hook
    const {handleSubmit,
        register,
        formState:{errors},
    }=useForm()
    const submitHandler=({tel,password})=>{
        console.log(tel,password)
    }
    return (
        <Layout title="Login">
            <form className="mx-auto max-w-screen-md" onSubmit={handleSubmit(submitHandler)}>
                <h1 className="mb-4 text-xl">Login</h1>
                <div className="mb-4">
                    <label htmlFor="tel">电话号码</label>
                    <input type="tel"
                           {...register('tel',{required:'请输入手机号码',
                               pattern:{
                               value:/^1[3456789]\d{9}$/, message:"请输入正确的手机号码",
                               }
                           })}
                           className="w-full" id="usrtel" autoFocus></input>
                    {errors.tel && <div className="text-red-500">{errors.tel.message}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="password">密码</label>
                    <input type="password"
                           {...register('password',{
                               required:'请输入密码',
                               minLength:{value:8,message:'密码不少于八位'}
                           })}
                           className="w-full" id="password" autoFocus></input>
                    {errors.password && <div className="text-red-500">{errors.password.message}</div>}
                </div>
                <div className="mb-4">
                    <button className="primary-button">登录</button>
                </div>
                <div className="mb-4">
                    <p>还没有账号？</p>
                    <Link href="register">注册</Link>
                </div>
            </form>
        </Layout>
    )

}