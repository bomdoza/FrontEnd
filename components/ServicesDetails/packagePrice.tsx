"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Pricing from "@/components/Pricing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCouch, faRug } from "@fortawesome/free-solid-svg-icons";
import { faGlassWaterDroplet } from "@fortawesome/free-solid-svg-icons";
import {
  faCarSide,
  faTruck,
  faVanShuttle,
} from "@fortawesome/free-solid-svg-icons";
import PricingData from "./PricingData";




export default function UnconventionalTabs() {

  console.log(PricingData);

  return (
    <Tab.Group>
      {({ selectedIndex }) => (
        <div className={``}>
          {/* Buttons */}
          <div className="flex justify-center">
            <Tab.List className="mb-2 inline-flex flex-wrap items-center justify-center gap-4 pb-1">
              {PricingData.map((tab, index) => (
                <Tab key={index} as={Fragment}>
                  <button
                    className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 flex-1 flex-col justify-between whitespace-nowrap rounded-sm border p-2 px-4 text-sm font-medium transition-colors duration-150 ease-in-out focus-visible:outline-none ${
                      selectedIndex === index
                        ? "border-none bg-primary text-white"
                        : "text-primary hover:border-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    <span>
                      <FontAwesomeIcon
                        className="h-10 w-10"
                        icon={getFontAwesomeIcon(tab.icon)}
                      />
                    </span>
                    <p>{tab.title}</p>
                  </button>
                </Tab>
              ))}
            </Tab.List>
          </div>

          {/* Tab panels */}
          <Tab.Panels className="mx-full ">
            <div className="relative flex flex-col">
              {PricingData.map((tab, index) => (
                <Tab.Panel key={index} as={Fragment}>
                  <Pricing data={tab} />
                </Tab.Panel>
              ))}
            </div>
          </Tab.Panels>
        </div>
      )}
    </Tab.Group>
  );
}

function getFontAwesomeIcon(iconName: string): IconProp {
  switch (iconName) {
    case "faCarSide":
      return faCarSide;
    case "faTruck":
      return faTruck;
    case "faVanShuttle":
      return faVanShuttle;
    default:
      return faCarSide; 
  }
}