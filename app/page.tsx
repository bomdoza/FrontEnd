import ScrollUp from "@/components/Common/ScrollUp";
import HomeSlider from "@/components/HomeSlider";
import Gallery from './galeria/page';
import { Metadata } from "next";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Testimonials from "@/components/Testimonials/index";
import Blog from "@/components/Blog";
import Service from "@/components/Service";

export const metadata: Metadata = {
  title: "Bom Doza",
  description: "Bom Doza serviço de limpeza",
  // other metadata
};

export default function Home() {
  return (
    <>
      <HomeSlider />
      <ScrollUp />
      <AboutSectionThree />
      <Service/>
      <Testimonials />
      <Gallery />
      <Blog />
    </>
  );
}
