import Image from "next/image";
import { getDictionaryServerOnly } from "@/dictionaries/dictionary-server-only";

const AboutSectionTwo = ({ lang }) => {

  const { dictionary } = getDictionaryServerOnly(lang);

  return (
    <section className="py-12 md:py-14 lg:py-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/service/furniture/tapete3.jpg"
                alt="about BomDoza image"
                fill
                className="rounded-lg object-cover object-center"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp w-full" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl md:text-[28px] lg:text-xl xl:text-2xl">
                  {dictionary.abaut.AboutSectionTwo.div1Title}
                </h3>
                <p className="text-justify text-base font-medium leading-relaxed text-body-color sm:leading-relaxed md:text-xl lg:text-base xl:text-xl">
                  {dictionary.abaut.AboutSectionTwo.div1Description}
                </p>
              </div>

              <div className="my-5">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl md:text-[28px] lg:text-xl xl:text-2xl">
                  {dictionary.abaut.AboutSectionTwo.div2Title}
                </h3>
                <p className="text-justify text-base font-medium leading-relaxed text-body-color sm:leading-relaxed md:text-xl lg:text-base xl:text-xl">
                    {dictionary.abaut.AboutSectionTwo.div2Description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
