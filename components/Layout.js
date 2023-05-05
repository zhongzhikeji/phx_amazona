import React, {useContext, useEffect, useState} from 'react'
import Head from 'next/head'
import Link from "next/link"
import Cookies from "js-cookie";
import { Store } from '@/utils/Store';
import {ToastContainer} from "react-toastify";
import {signOut, useSession} from "next-auth/react";
import 'react-toastify/dist/ReactToastify.css'
import {Menu} from "@headlessui/react";
import DropdownLink from "@/components/DropdownLink";

export default function Layout({title,children}) {
    const {status,data:session}=useSession()

    const {state,dispatch}=useContext(Store);
    const {cart}=state;
    const [cartItemsCount,setCartItemsCount]=useState(0)
    useEffect(()=>{
        setCartItemsCount(cart.cartItems.reduce((a,c)=>a+c.quantity,0));
    },[cart.cartItems])
    const logoutClickHandler =() =>{
        Cookies.remove('cart');
        dispatch({type:'CART_RESET'});
        signOut({callbackUrl:'/login'})
    }
  return (
    <>
    {/* react component is html element */}
    <Head>
        {/* 使用大括号检查标题，如果确实存在使用它，否则render(渲染)，加上-amazona来显示 */}
        <title>{title ? title + '-Amazona':'Amazona'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel='icon' href='/favicon.ico' />
    </Head>
        <ToastContainer position="bottom-center" limit={1}/>
    <div className='flex min-h-screen flex-col justify-between '>
        <header>
            <nav className='flex h-12 p-4 justify-between shadow-md items-center'>
                <Link href="/" className='text-lg font-bold '>
                    amazona
                </Link>
                <div>
                    <Link href="/cart" className='p-2'>
                        购物车
                        {cartItemsCount>0 &&(
                            <span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white'>
                                {cartItemsCount}
                            </span>
                        )}
                        </Link>

                        {status ==='loading' ? (
                            'Loading'
                        ) :session?.user?(
                            <Menu as="div" className="relative inline-block">
                                <Menu.Button className="text-amber-200">
                                    {session.user.name}
                                </Menu.Button>
                                <Menu.Items className="absolute right-0 w-56 origin-top-right shadow-lg">
                                    <Menu.Item>
                                        <DropdownLink className="dropdown-link" href="/profile">
                                            个人信息
                                        </DropdownLink>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <DropdownLink className="dropdown-link" href="/history">
                                            购买记录
                                        </DropdownLink>
                                    </Menu.Item>
                                    <Menu.Item className="dropdown-link" href="/">
                                        <a className="dropdown-link" onClick={logoutClickHandler}>
                                            登出
                                        </a>
                                    </Menu.Item>


                                </Menu.Items>
                            </Menu>
                        ):(
                            <Link href="/login">
                                登录
                            </Link>
                        )}

                </div>
            </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>
            {/* render 渲染页面组件 */}
            {children} 
        </main>
        <footer className='flex h-10 justify-center items-center shadow-inner'>
            footer
        </footer>
    </div>
    </> 
  )
}
