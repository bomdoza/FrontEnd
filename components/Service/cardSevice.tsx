"use client";
import Image from "next/image";
import Link from "next/link";


const Index = ({ name, href, image,}) => {
 return (
   <>
     <div
       className="group relative mb-8 mt-2 flex h-48   flex-col rounded-xl 
        bg-white bg-clip-border text-gray-700 shadow-md dark:bg-dark dark:shadow-three
        dark:hover:shadow-gray-dark"
     >
       <Link href={href} passHref className="block">
         <div className="h-28">
           <div
             className="bg-blue absolute -top-20 left-[5%] z-40  h-48 w-[90%]   
                   justify-items-center rounded-xl align-middle duration-300 group-hover:top-[-40%]
                   group-hover:opacity-[0.9] lg:top-[-10%]"
           >
             <Image
               src={image}
               alt="image"
               className="m-auto"
               width={200}
               height={100}
               loading="lazy"
             />
           </div>
         </div>
         <div className="z-10   w-full p-6   ">
           <p
             className="text-tg mb-2 inline-block w-full text-center 
                  font-sans text-xl font-semibold  leading-snug  tracking-normal
                text-dark antialiased   dark:text-white"
           >
             {name}
           </p>
         </div>
       </Link>
     </div>
   </>
 );
};

export default Index;
