"use client";
import AccordionItem from "./AccordionItem";
import SectionTitle from "../Common/SectionTitle";
import FAQData from "./faqData";

const Accordion = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-8 dark:bg-dark lg:pb-[22px] lg:pt-[30px]">
      <div className="container mx-auto">
        <SectionTitle
          title="Perguntas frequentes"
          paragraph="Tire as suas dúvidas sobre os servços Bom Doza"
          center
        />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            {FAQData.slice(0,3).map((faq) => (
              <AccordionItem
                key={faq.id}
                header={faq.question}
                text={faq.response}
              />
            ))}
          </div>
          <div className="w-full px-4 lg:w-1/2">
            {FAQData.slice(3,6).map((faq) => (
              <AccordionItem
                key={faq.id}
                header={faq.question}
                text={faq.response}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Accordion;


