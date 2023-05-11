import Link from 'next/link'
import React from 'react'



export default function ProductItem({product}) {
  return (
    <div className='card'>{/* 以下是一张卡片，上图下文 */}
        <Link href={`/product/${product.slug}`}>
            <img 
                src={product.image} 
                alt={product.name} 
                className='rounded shadow'/>
               
        </Link>
        
        <div className='flex flex-col items-center justify-center p-5'>
            <Link href={`/product/${product.slug}`}>
            <h2 className='text-lg'>{product.name}</h2>
            </Link>
            <p className='mb-2'>{product.brand}</p>
            <p>RMB：{product.price}</p>
            <Link href={`/product/${product.slug}`}>
                <button className='primary-button' >
                    查看详情
                </button>
            </Link>


        </div>
    </div>
  )
}
 