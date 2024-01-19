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
        '/images/servicos/carros/lavagemdecarro.jpg',
        '/images/servicos/tanques/tanque.jpg',
        '/images/servicos/tapetes/tapete1.jpeg',
        '/images/servicos/carros/pexels.jpg',
        '/images/servicos/sofas/sofa3.jpg',
        '/images/servicos/sofas/sofa1.png',
        '/images/servicos/carros/LAVA.jpg',
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
