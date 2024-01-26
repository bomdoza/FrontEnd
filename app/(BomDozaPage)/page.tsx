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


export default  function Home() {

//await new Promise((resolve) => setTimeout(resolve, 4000))
  return (
    <>
      <HomeSlider />
      <ScrollUp />
      <AboutSectionThree />
      <Service />
      <Brands/>
      <Testimonials />
      <Faq/>
      <Gallery />
      <Blog />
    </>
  );
}
