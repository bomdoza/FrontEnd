"use client"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero from "@/components/Hero";
import Hero1 from "@/components/Hero1";
import { useState } from 'react';
import './style.css';
import Link from "next/link";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";

const HomeSlider = ({lang}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { dictionary } = getDictionaryUseClient(lang);
  console.log(dictionary)
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <Hero />
        <Hero1 />
      </Slider>
      <div className="absolute left-1/2 top-1/2 mt-5 w-full -translate-x-1/2 -translate-y-1/2 transform px-3 text-center  text-white ">
        <p className="mb-2 text-base !leading-relaxed text-body-color dark:text-white sm:text-xs md:text-xl">
          {dictionary.home.heroTitle}
        </p>
        <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight md:text-5xl md:leading-tight">
          {dictionary.home.heroDesc}
        </h1>
        <p className="mb-10 text-base !leading-relaxed text-body-color dark:text-white sm:text-xs md:text-xl">
          {dictionary.home.heroSubDesc}
        </p>

        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link
            href="/contact"
            className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            {dictionary.home.heroLabelButton}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
