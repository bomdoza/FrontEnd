import SectionTitle from "../Common/SectionTitle";
import CardSevice from "./cardSevice";
import { getDictionaryServerOnly } from "@/dictionaries/dictionary-server-only";


const Index = ({ lang }) => {
  const { dictionary} = getDictionaryServerOnly(lang);
 return (
   <>
     <section className="lg:py-13 relative z-10 mt-2 bg-gray-light pt-5 dark:bg-bg-color-dark md:py-10">
       <div className="container">
         <SectionTitle
           title={dictionary.home.service.title}
           paragraph={dictionary.home.service.description}
           center
         />
         <div className="grid grid-cols-1 gap-x-4 gap-y-20 pt-14 md:pt-6 lg:grid-cols-2 lg:gap-y-16 lg:pt-0  xl:grid-cols-3">
           {dictionary.home.service.ServiceItem.map((Service) => (
             <CardSevice key={Service.id} {...Service} />
           ))}
         </div>
       </div>
     </section>
   </>
 );
};

export default Index;
