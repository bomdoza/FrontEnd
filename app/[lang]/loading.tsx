import Image from "next/image";

const Loading = () => {
 return (
   <main className="py-[300px]">
     <div className="relative flex items-center justify-center">
       <div className="absolute h-32 w-32 animate-spin rounded-full border-b-4 border-t-4 border-blue"></div>
       <Image
         src="/images/favicon.png"
         alt="image"
         className="rounded-lg"
         width={100}
         height={100}
         priority={true}
       />
     </div>
   </main>
 );
}
export default Loading;