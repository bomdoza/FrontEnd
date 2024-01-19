import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOMDOZA Contacto",
  description: "BOMDOZA cleaning service",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
        <Breadcrumb
        pageName="Contacto"
        description="Estamos aqui para tornar o processo de contato tão fácil quanto a limpeza que oferecemos. Não hesite em nos chamar para descobrir como podemos transformar seus pertences com cuidado e qualidade. Estamos ansiosos para ouvir de você!"
        />
      <Contact />
    </>
  );
};

export default ContactPage;
