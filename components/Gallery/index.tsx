"use client"
import React, { useState } from 'react';

const Gallery = ({ images }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id='gallery' className="container mx-auto my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`w-full h-auto rounded-lg transition-transform transform ${hoveredIndex === index ? 'scale-110' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
