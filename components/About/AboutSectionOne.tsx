import Image from "next/image";
import DivTitle from "../Common/DivTitle";
import { getDictionaryServerOnly } from "@/dictionaries/dictionary-server-only";

const AboutSectionOne = ({ lang }) => {

  const { dictionary } = getDictionaryServerOnly(lang);

  return (
    <section id="about">
      <div className="container">
        <div className="lg:py-114 border-b border-body-color/[.15] py-12 dark:border-white/[.15] md:py-14">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <DivTitle
                title={dictionary.abaut.AboutSectionOne.div1Title}
                paragraph={dictionary.abaut.AboutSectionOne.div1Description}
                mb="44px"
              />

              <div className="flex flex-wrap">
                <DivTitle
                  title={dictionary.abaut.AboutSectionOne.div2Title}
                  paragraph={dictionary.abaut.AboutSectionOne.div2Description}
                  mb="44px"
                />
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/service/furniture/limpador-a-vapor.jpg"
                  alt="about-image"
                  fill
                  className=" rounded-mddrop-shadow-three mx-auto max-w-full rounded-lg lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
