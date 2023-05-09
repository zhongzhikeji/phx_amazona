import React, {useContext, useEffect, useState} from "react";
import Layout from "@/components/Layout";
import CheckoutWizard from "@/components/CheckoutWizard";
import {useRouter} from "next/router";
import {Store} from "@/utils/Store";
import {toast} from "react-toastify";
import Cookies from "js-cookie";


export default function PaymentScreen(){

    const [selectedPaymentMethod,setSelectedPaymentMethod]=useState('');
    const {state,dispatch}=useContext(Store)
    const {cart}=state
    const {shippingAddress,paymentMethod}=cart;

    const router=useRouter();
    const submitHandler=(e)=>{
        e.preventDefault()
        if (!selectedPaymentMethod){
          return  toast.error('未选中支付方式')
        }
        dispatch({type:'SAVE_PAYMENT_METHOD',payload:setSelectedPaymentMethod})
        Cookies.set(
            'cart',
            JSON.stringify({
                ...cart,
                paymentMethod:selectedPaymentMethod,
            })
        )
        router.push('/placeorder')
    };
    useEffect(()=>{
        if (!shippingAddress.address){
            return router.push('/shipping')
        }
        setSelectedPaymentMethod(paymentMethod ||'')
    },[paymentMethod, router, shippingAddress.address])
    return(
        <Layout title="payment method">
            <CheckoutWizard activeStep={2}/>
            <form className='mx-auto max-w-screen-md' onSubmit={submitHandler}>
                <h1 className='mb-4 text-xl'>支付方式</h1>
            {
                ['PayPal','微信','支付宝'].map((payment)=>(
                    <div key={payment} className="mb-4">
                        <input
                            name="paymentMethod"
                            className="p-2 outline-none focus:right-0"
                            id={payment}
                            type="radio"
                            checked={selectedPaymentMethod ===payment}
                            onChange={()=>setSelectedPaymentMethod(payment)}
                        />
                        <label className="p-2" htmlFor={payment}>
                            {payment}
                        </label>
                    </div>
                ))
            }
            <div className="mb-4 flex justify-between">
                <button onClick={()=>router.push('/shipping')}
                        type='button'
                        className='default-button'
                >上一步</button>
                <button className='primary-button'>下一步</button>
            </div>
            </form>
        </Layout>
    )
}