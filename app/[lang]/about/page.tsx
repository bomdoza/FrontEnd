import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ExcellenceSection from "@/components/About/ExcellenceSection";
import { getDictionaryServerOnly } from "@/dictionaries/dictionary-server-only";

const AboutPage = ({ params: { lang } }) => {

  const { dictionary } = getDictionaryServerOnly(lang);

  return (
    <>
      <Breadcrumb
        pageName={dictionary.abaut.title}
        description={dictionary.abaut.description}
      />

      <ExcellenceSection lang={lang} />
      <AboutSectionOne lang={lang} />
      <AboutSectionTwo lang={lang} />
    </>
  );
};

export default AboutPage;
