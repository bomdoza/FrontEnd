import ScrollUp from "@/components/Common/ScrollUp";
import HomeSlider from "@/components/HomeSlider";
import Gallery from "@/components/Gallery";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Testimonials from "@/components/Testimonials/index";
import Blog from "@/components/Blog";
import Service from "@/components/Service";
import Brands from "@/components/Brands";
import Faq from "@/components/Faq";

export default  function Home({ params: { lang} }) {
  
  return (
    <>
      <HomeSlider lang={lang} />
      <ScrollUp />
      <AboutSectionThree lang={lang} />
      <Service lang={lang} />
      <Brands />
      <Testimonials lang={lang} />
      <Faq lang={lang} />
      <Gallery lang={lang} />
      <Blog lang={lang} />
    </>
  );
}
