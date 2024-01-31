"use client";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation'
import SideBar from "@/components/ServicesDetails/ServiceCards/sideBar";
import CarWashContent from "@/components/ServicesDetails/CarWash/page";
import FurnitureWashingContent from "@/components/ServicesDetails/FurnitureWashing/page";
import TankWashingContent from "@/components/ServicesDetails/TankWashing/page";

const ServiceType = () => {

  const router = useRouter()
  const pathname = usePathname();
  const match = pathname.match(/\/service\/(.+)/);
  const type = match ? match[1] : null;

  const renderContent = () => {
    
    switch (type) {
      case "Car-Wash":
        return <CarWashContent />;
      case "Furniture-Washing":
         return <FurnitureWashingContent />;
      case "Tank-Washing":
         return <TankWashingContent />;
      default:
        router.push('/404');
        return null;
    }
  };

  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="mb-3 w-full px-2 lg:w-1/4">
              <SideBar />
            </div>

            <div className="w-full px-2 lg:w-3/4">
              <div className="blog-details blog-details-docs rounded-lg bg-white px-2 py-6 shadow-three dark:bg-gray-dark  lg:mb-5 lg:px-8 xl:p-[20px]">
                <div className="blog-details">{renderContent()}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceType;
