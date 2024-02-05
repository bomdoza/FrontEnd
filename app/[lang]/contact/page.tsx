import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { getDictionaryServerOnly } from "@/dictionaries/dictionary-server-only";

const ContactPage = ({ params: { lang } }) => {
  
  const { dictionary } = getDictionaryServerOnly(lang);
  
  return (
    <>
      <Breadcrumb
        pageName={dictionary.contact.title}
        description={dictionary.contact.descripition}
      />
      <Contact lang={lang} />
    </>
  );
};

export default ContactPage;
