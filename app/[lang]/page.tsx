import ScrollUp from "@/components/Common/ScrollUp";
import HomeSlider from "@/components/HomeSlider";
import Gallery from './galeria/page';
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Testimonials from "@/components/Testimonials/index";
import Blog from "@/components/Blog";
import Service from "@/components/Service";
import Brands from "@/components/Brands";
import Faq from "@/components/Faq";
//import { promises } from "dns";
//import { resolve } from "path";
import { getDictionaryServerOnly } from "@/dictionaries/dictionary-server-only";

export default  function Home({ params: { lang} }) {
  //await new Promise((resolve) => setTimeout(resolve, 4000))
  console.log(lang);
  const dict = getDictionaryServerOnly(lang);
  console.log(dict.site.heroTitle);
  
  return (
    <>
      <HomeSlider />
      <ScrollUp />
      <div className="p-20">
        <p>{dict.site.heroTitle}</p>
      </div>
      <AboutSectionThree />
      <Service />
      <Brands />
      <Testimonials />
      <Faq />
      <Gallery />
      <Blog />
    </>
  );
}
