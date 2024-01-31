"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Pricing from "@/components/Pricing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch, faRug } from "@fortawesome/free-solid-svg-icons";
import { faGlassWaterDroplet } from "@fortawesome/free-solid-svg-icons";
import {faCarSide,faTruck, faVanShuttle} from "@fortawesome/free-solid-svg-icons";


interface Tab {
  title: string;
  tag: string;
  excerpt: string;
  link: string;
}

export default function UnconventionalTabs() {
  const tabs: Tab[] = [
    {
      title: "Lassen Peak",
      tag: "Mountain",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "#0",
    },
    {
      title: "Mount Shasta",
      tag: "Mountain",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "#0",
    },
    {
      title: "Eureka Peak",
      tag: "Mountain",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "#0",
    },
  ];


  return (
    <Tab.Group>
      {({ selectedIndex }) => (
        <div className={``}>
          {/* Buttons */}
          <div className="flex justify-center">
            <Tab.List className="mb-2 inline-flex flex-wrap items-center justify-center gap-4 pb-1">
              {tabs.map((tab, index) => (
                <Tab key={index} as={Fragment}>
                  <button
                    className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 flex-1 flex-col justify-between whitespace-nowrap rounded-sm border p-2 px-4 text-sm font-medium transition-colors duration-150 ease-in-out focus-visible:outline-none ${
                      selectedIndex === index
                        ? "border-none bg-primary text-white"
                        : "text-primary hover:border-none hover:bg-primary hover:text-white"
                    }`}
                  >
                    <span>
                      <FontAwesomeIcon
                        className="h-10 w-10"
                        icon={faGlassWaterDroplet}
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
              {tabs.map((tab, index) => (
                <Tab.Panel key={index} as={Fragment}>
                  <Pricing />

                  {/*<article className="w-full items-stretch rounded-2xl bg-white shadow-xl focus-visible:outline-none focus-visible:ring min-[480px]:flex">
                    <figure className="p-2 min-[480px]:w-1/2">
                  
                    </figure>
                    <div className="flex flex-col justify-center p-5 pl-3 min-[480px]:w-1/2">
                      <div className="mb-1 flex justify-between">
                        <header>
                          <div className="font-caveat text-xl font-medium text-sky-500">
                            {tab.tag}
                          </div>
                          <h1 className="text-xl font-bold text-slate-900">
                            {tab.title}
                          </h1>
                        </header>
                        <button
                          className="inline-flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-slate-200 shadow transition-colors duration-150 ease-in-out hover:border-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                          aria-label="Like"
                        >
                          <svg
                            className="fill-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="13"
                          >
                            <path d="M6.985 1.635C5.361.132 2.797.162 1.21 1.7A3.948 3.948 0 0 0 0 4.541a3.948 3.948 0 0 0 1.218 2.836l5.156 4.88a.893.893 0 0 0 1.223 0l5.165-4.886a3.925 3.925 0 0 0 .061-5.663C11.231.126 8.62.094 6.985 1.635Zm4.548 4.53-4.548 4.303-4.54-4.294a2.267 2.267 0 0 1 0-3.275 2.44 2.44 0 0 1 3.376 0c.16.161.293.343.398.541a.915.915 0 0 0 .766.409c.311 0 .6-.154.767-.409.517-.93 1.62-1.401 2.677-1.142 1.057.259 1.797 1.181 1.796 2.238a2.253 2.253 0 0 1-.692 1.63Z" />
                          </svg>
                        </button>
                      </div>
                      <div className="mb-2 line-clamp-3 text-sm text-slate-500">
                        {tab.excerpt}
                      </div>
                      <div className="text-right">
                        <a
                          className="text-sm font-medium text-indigo-500 transition-colors duration-150 ease-out hover:text-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                          href={tab.link}
                        >
                          Read more -&gt;
                        </a>
                      </div>
                    </div>
                  </article>*/}
                </Tab.Panel>
              ))}
            </div>
          </Tab.Panels>
        </div>
      )}
    </Tab.Group>
  );
}
