import React, {useContext, useEffect} from "react";
import {useForm} from 'react-hook-form'
import Layout from "@/components/Layout";
import CheckoutWizard from '../components/CheckoutWizard'
import {Store} from "@/utils/Store";
import Cookies from "js-cookie";
import {useRouter} from "next/router";
export default function ShippingScreen() {
    const{
        handleSubmit,
        register,
        formState:{errors},
        setValue,
    } = useForm();   //react hook

    const {state,dispatch} =useContext(Store)
    const {cart}=state;
    const {shippingAddress}=cart;
    const router=useRouter()

    useEffect(()=>{
        setValue('fullName',shippingAddress.fullName);
        setValue('phone',shippingAddress.phone);
        setValue('city',shippingAddress.city);
        setValue('address',shippingAddress.address);
    },[setValue, shippingAddress])

    const submitHandler= ({fullName,phone,city,address}) =>{
        dispatch({
            type:'SAVE_SHIPPING_ADDRESS',
            payload:{fullName,phone,city,address},
        });
        //'cart' is key,第二个参数是以前的数据
        Cookies.set(
            'cart',
            JSON.stringify({
                ...cart,
                shippingAddress:{
                    fullName,
                    phone,
                    city,
                    address,
                }
            })
        )
        router.push('/payment')
    }

    return(
       <Layout title="收货地址">
           <CheckoutWizard activeStep={1} />
           <form className="mx-auto max-w-screen-md" onSubmit={handleSubmit(submitHandler)}>
               <h1 className="mb-4 text-xl">收货地址</h1>
               <div className='mb-4'>
                   <label htmlFor="fullName">收货人</label>
                   <input
                       className='w-full'
                       id="fullName"
                       autoFocus
                       {...register('fullName',{
                           required:'名字'
                       })}
                   />
                   {errors.fullName && (
                       <div className="text-red-500">{errors.fullName.message}</div>
                   )}
               </div>
               <div className='mb-4'>
                   <label htmlFor="phone">手机号码</label>
                   <input
                       className='w-full'
                       id="phone"
                       autoFocus
                       {...register('phone',{
                           required:'手机号码'
                       })}
                   />
                   {errors.phone && (
                       <div className="text-red-500">{errors.phone.message}</div>
                   )}
               </div>
               <div className='mb-4'>
                   <label htmlFor="city">所在地区</label>
                   <input
                       className='w-full'
                       id="city"
                       autoFocus
                       {...register('city',{
                           required:'城市',
                           minLength:{value:8,message:'省、市、区、街道'}
                       })}
                   />
                   {errors.city && (
                       <div className="text-red-500">{errors.city.message}</div>
                   )}
               </div>
               <div className='mb-4'>
                   <label htmlFor="address">详细地址</label>
                   <input
                       className='w-full'
                       id="address"
                       autoFocus
                       {...register('address',{
                           required:'小区楼栋/乡村名称',
                           minLength:{value:3,message:'长度大于俩个字，小区楼栋/乡村名称'}
                       })}
                   />
                   {errors.address && (
                       <div className="text-red-500">{errors.address.message}</div>
                   )}
               </div>
               <div className="mb-4 flex justify-between">
                   <button className="primary-button">下一步</button>
               </div>
           </form>
       </Layout>
    )
}

ShippingScreen.auth=true