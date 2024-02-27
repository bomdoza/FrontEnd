import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import brandsDataWhite from "./brandsDataWhite";

const Brands = () => {
 
 const data = brandsDataWhite ;
  return (
    <section className="mb-10 pt-10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center rounded-sm bg-gray-light pb-10 dark:bg-gray-dark lg:pb-0"
              data-wow-delay=".1s"
            >
              {brandsDataWhite.map((brand) => (
                <SingleBrand
                  key={brand.id}
                  brand={brand}
                  customClass={`hidden dark:block`}
                />
              ))}
              {brandsData.map((brand) => (
                <SingleBrand
                  key={brand.id}
                  brand={brand}
                  customClass={`dark:hidden`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
interface SingleBrandProps {
  brand: Brand;
  customClass?: string; 
}
const SingleBrand = ({ brand, customClass }: SingleBrandProps) => {
  const { href, image, name, width, height } = brand;
  return (
    <>
      <div className={`${customClass}`}>
        <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
          <a href={href} target="_blank" rel="nofollow noreferrer" className="">
            <Image src={image} alt={name} width={width} height={height} />
          </a>
        </div>
      </div>
    </>
  );
};
