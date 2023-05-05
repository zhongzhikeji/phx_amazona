import React from "react";
import {useForm} from 'react-hook-form'
import Layout from "@/components/Layout";
import CheckoutWizard from '../components/CheckoutWizard'
export default function shippingScreen() {
    const{
        handleSubmit,
        register,
        formState:{errors},
        setValue,
        getValues,
    } = useForm();

    const submitHandler= () =>{

    }

    return(
       <Layout title="收获地址">
           <CheckoutWizard activeStep={1} />
           <form className="mx-auto max-w-screen-md" onSubmit={handleSubmit(submitHandler)}>
               <h1 className="mb-4 text-xl">收获地址</h1>
               <div className='mb-4'>
                   <label htmlFor="fullName"></label>
                   <input
                       className='w-full'
                       id="fullName"
                       autoFocus
                       {...register('fullName',{
                           required:''
                       })}
                   />
                   {errors.fullName && (
                       <div className="text-red-500">{errors.fullName.message}</div>
                   )}
               </div>
           </form>
       </Layout>
    )
}