import ScrollUp from "@/components/Common/ScrollUp";
import HomeSlider from "@/components/HomeSlider";
import Gallery from './galeria/page';
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Testimonials from "@/components/Testimonials/index";
import Blog from "@/components/Blog";
import Service from "@/components/Service";
import Brands from "@/components/Brands";
import Faq from "@/components/Faq";

export default function Home() {
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
