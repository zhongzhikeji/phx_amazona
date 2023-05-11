import React from "react";
import Link from "next/link";
 export default function DropdownLink(props){
     let {href,children,}=props
     return(
         <Link href={href}>
             {children}
         </Link>
     )
 }