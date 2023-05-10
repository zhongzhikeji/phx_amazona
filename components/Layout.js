import React from 'react'
import Head from 'next/head'
import Link from "next/link"

import 'react-toastify/dist/ReactToastify.css'
export default function Layout({title,children}) {

    return (
        <>
            {/* react component is html element */}
            <Head>
                {/* 使用大括号检查标题，如果确实存在使用它，否则render(渲染)，加上-amazona来显示 */}
                <title>{title ? title + '-mockAI':'mockAI'}</title>
                <meta name="description" content="Ecommerce Website" />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='flex min-h-screen flex-col justify-between '>
                <header>
                    <nav className="flex h-12 p-4 justify-between shadow-md items-center">
                        <Link href='/' className='text-lg font-bold'>mockAI</Link>
                        <div >
                            <Link href='/' className='p-2 links'>草图渲染</Link>
                            <Link href='/' className='p-2 links'>涂抹替换</Link>
                            <Link href='/' className='p-2 links'>背景生成</Link>
                            <Link href='/' className='p-2 links'>尺寸外扩</Link>
                            <Link href='/' className='p-2 links'>联系我们</Link>
                        </div>
                    </nav>
                </header>
                <main className='container m-auto mt-4 px-4'>
                    {children}
                </main>
                <footer className='flex h-10 justify-center items-center shadow-inner'>
                    footer
                </footer>
            </div>
        </>
    )
}
