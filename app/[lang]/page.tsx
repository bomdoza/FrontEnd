import ScrollUp from "@/components/Common/ScrollUp";
import HomeSlider from "@/components/HomeSlider";
import Gallery from './galeria/page';
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Testimonials from "@/components/Testimonials/index";
import Blog from "@/components/Blog";
import Service from "@/components/Service";
import Brands from "@/components/Brands";
import Faq from "@/components/Faq";

import { getDictionaryServerOnly } from "@/dictionaries/dictionary-server-only";

export default  function Home({ params: { lang} }) {

  const {dictionary, interpolation}= getDictionaryServerOnly(lang);
  //console.log(dictionary);
  
  return (
    <>
      <HomeSlider lang={lang} />
      <ScrollUp />
      {/*<div className="p-20">
        {interpolation(dictionary[`Welcome {{name}}`], { name: `jailson` })}
        </div>*/}
      <AboutSectionThree lang={lang} />
      <Service lang={lang} />
      <Brands />
      <Testimonials lang={lang} />
      <Faq lang={lang} />
      <Gallery />
      <Blog lang={lang} />
    </>
  );
}
