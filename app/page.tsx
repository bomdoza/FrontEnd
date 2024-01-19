import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import HomeSlider from "@/components/HomeSlider";
import Gallery from './galeria/page';
import { Metadata } from "next";
import About from "./about/page";
import SessionCardAbout from "@/components/SessionCardAbout/AboutSectionOne";
import Testimonial from "@/components/Testimonials/index";

export const metadata: Metadata = {
  title: "BOM DOZA",
  description: "BOM DOZA cleaning service",
  // other metadata
};

export default function Home() {
  return (
    <>
      <HomeSlider />
      <SessionCardAbout />


      <Gallery />
      <Testimonial/>
    </>
  );
}
