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
      <div className="mt-10 sm:py-12 md:py-14 lg:py-16">  
      <Contact />
      </div>
    </>
  );
};

export default ContactPage;
