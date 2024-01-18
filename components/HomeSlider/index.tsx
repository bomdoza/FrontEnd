"use client"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero from "@/components/Hero";
import Hero1 from "@/components/Hero1";
import { useState } from 'react';
import './style.css';

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    </div>
  );
};

export default HomeSlider;
