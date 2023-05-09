import React from "react";
import Layout from "@/components/Layout";
import CheckoutWizard from "@/components/CheckoutWizard";

export default function PlaceorderSreen(){
    return(
        <Layout>
            <CheckoutWizard activeStep={3}/>
        </Layout>
    )
}