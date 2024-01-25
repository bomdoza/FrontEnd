import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Gallery from '@/components/Gallery';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOMDOZA Galeria",
  description: "BOMDOZA cleaning service",
  // other metadata
};

const GalleryPage = () => {

    const imageUrls = [
      "/images/service/car/lavagemdecarro.jpg",
      "/images/service/car/pexels.jpg",
      "/images/service/car/lava.jpg",
      "/images/service/furniture/tapete1.jpeg",
      "/images/service/furniture/sofa3.jpg",
      "/images/service/furniture/sofa1.png",
      "/images/service/tank/tanque.jpg",
      "/images/service/tank/tanque1.png",
    ];

  return (
    <>

      <div className="mt-4 md:pt-4 lg:pt-6">

      <SectionTitle
            title="Nossa Galeria"
            paragraph=""
            center
            mb="1px"
            />
      
      <Gallery images={imageUrls} />

      </div>


    </>
  );
};

export default GalleryPage;
