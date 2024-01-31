"use client"
import Link from "next/link";
import {useParams, usePathname} from "next/navigation"
import { FlagKey, locales, flag } from "./locale";
import Image from "next/image";

export const Lang = () => {

 const {lang} = useParams();
 const pathname = usePathname();

 const getPathname = (lng: string) => {
  const path = pathname.split("/" + lang).join("")
  return "/" + lng  + path;
 };

 return (
   <>
     <div className="flex h-20 items-center justify-between px-5">
       <div className="group flex items-center">
         <button>
           <Image
             src={flag[lang as FlagKey]}
             width={30}
             height={25}
             alt="iconLang"
             className="rounded-sm border p-1"
             style={{ maxWidth: "30px", maxHeight: "25px" }}
           />
         </button>

         <ul className=" absolute top-12 hidden flex-col gap-2 group-hover:flex ">
           {locales.map((lng) => {
             if (lng.code === lang) return null;
             return (
               <li key={lng.code}>
                 <Link href={getPathname(lng.code)}>
                   <Image
                     src={lng.ico}
                     width={30}
                     height={25}
                     alt="iconLang"
                     className="rounded-sm p-1"
                   />
                 </Link>
               </li>
             );
           })}
         </ul>
       </div>
     </div>
   </>
 );
}