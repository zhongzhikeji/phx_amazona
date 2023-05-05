import React from "react";
import Link from "next/link";
 export default function DropdownLink(props){
     let {href,childen,...rest}=props
     return(
         <Link href={href}>
             <a {...rest}>{childen}</a>
         </Link>
     )
 }