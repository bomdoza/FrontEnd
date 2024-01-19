import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import SectionTitle from "@/components/Common/SectionTitle";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOMDOZA Contacto",
  description: "BOMDOZA cleaning service",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
