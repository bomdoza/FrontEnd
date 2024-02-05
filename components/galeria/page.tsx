import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Gallery from '@/components/Gallery';


const GalleryPage = () => {

  return (
    <>

      <div className="mt-4 md:pt-4 lg:pt-6">

      <SectionTitle
            title="Nossa Galeria"
            paragraph=""
            center
            mb="1px"
            />
      
      <Gallery/>

      </div>


    </>
  );
};

export default GalleryPage;
