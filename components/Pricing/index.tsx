"use client";
import { useState } from "react";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = ({ data }) => {
  
  const [isDomicile, setIsDomicile] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-10">
      <div className="container">
        <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsDomicile(true)}
              className={`${
                isDomicile
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Presencial
            </span>
            <div
              onClick={() => setIsDomicile(!isDomicile)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isDomicile ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsDomicile(false)}
              className={`${
                isDomicile
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Domicílio
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {data &&
            data.packages.map((tab, index) => (
              <PricingBox
                key={index}
                packageName={tab.name}
                price={isDomicile ? tab.presencialPrice : tab.domicilioPrice}
                duration={""}
                subtitle={tab.desc}
              >
                {tab.services.map((service, serviceIndex) => (
                  <OfferList
                    key={serviceIndex}
                    text={service.name}
                    status={
                      isDomicile
                        ? service.activePresencial
                        : service.activeDomicilio
                    }
                  />
                ))}
              </PricingBox>
            ))}
        </div>

        <div className="absolute bottom-0 left-0 z-[-1]">
          <svg
            width="239"
            height="601"
            viewBox="0 0 239 601"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-184.451"
              y="600.973"
              width="196"
              height="541.607"
              rx="2"
              transform="rotate(-128.7 -184.451 600.973)"
              fill="url(#paint0_linear_93:235)"
            />
            <rect
              opacity="0.3"
              x="-188.201"
              y="385.272"
              width="59.7544"
              height="541.607"
              rx="2"
              transform="rotate(-128.7 -188.201 385.272)"
              fill="url(#paint1_linear_93:235)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_93:235"
                x1="-90.1184"
                y1="420.414"
                x2="-90.1184"
                y2="1131.65"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_93:235"
                x1="-159.441"
                y1="204.714"
                x2="-159.441"
                y2="915.952"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
