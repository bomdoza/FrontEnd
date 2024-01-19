"use client";
import SectionTitle from "../Common/SectionTitle";
import ServiceData from "./serviceData";
import CardSevice from "./cardSevice";



const Index = () => {
 return (
   <>
     <section className="lg:py-13 relative z-10 mt-2 bg-gray-light pt-5 dark:bg-bg-color-dark md:py-10">
       <div className="container">
         <SectionTitle
           title="Nossos serviços"
           paragraph="Na Bom Doza, oferecemos uma gama abrangente de serviços especializados"
           center
         />
         <div className="grid grid-cols-1 gap-x-4 gap-y-20 pt-14 md:pt-6 lg:grid-cols-2 lg:gap-y-16 lg:pt-0  xl:grid-cols-3">
           {ServiceData.map((Service) => (
             <CardSevice key={Service.id} {...Service} />
           ))}
         </div>
       </div>
     </section>
   </>
 );
};

export default Index;
