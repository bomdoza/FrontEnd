"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import SectionTitle from "../Common/SectionTitle";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";

const Gallery = ({ lang }) => {

  const {dictionary} = getDictionaryUseClient(lang);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    "/images/service/car/lavagemdecarro.jpg",
    "/images/service/car/pexels.jpg",
    "/images/service/car/lava.jpg",
    "/images/service/furniture/tapete1.jpeg",
    "/images/service/furniture/sofa3.jpg",
    "/images/service/furniture/sofa1.png",
    "/images/service/tank/tanque.jpg",
    "/images/service/tank/tanque1.png",
  ];

  return (
    <>

      <div id="gallery" className="container mx-auto my-8">
        <SectionTitle
          title={dictionary.home.galery.title}
          paragraph=""
          center
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              width={300}
              height={200}
              className={`h-auto w-full transform rounded-lg transition-transform ${
                hoveredIndex === index ? "scale-110" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
