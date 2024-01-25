// components/ServicePackage.tsx
import React from 'react';

interface ServicePackageProps {
  title: string;
  description: string;
  services: string[];
  prices: {
    domicilio: number;
    bomdoza: number;
  };
}

const ServicePackage: React.FC<ServicePackageProps> = ({ title, description, services, prices }) => {
  return (
    <div className="border border-solid border-gray-500 w-72 h-96 p-2 my-2 md:mx-2 lg:mx-3 text-center">
      <div className="h-1/4 pt-3">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-body-color mt-2">{description}</p>
      </div>
      <div className="h-2/4 overflow-y-auto pt-4 px-4 md:px-6 lg:px-8">
        <ul className="list-disc list-inside text-justify ">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      <div className="h-1/4 pt-2">
        <h2 className="text-xl font-semibold">Preços:</h2>
        <p className="text-green-600 text-xl font-bold">
          <span className="text-body-color text-xs font-normal">BOMDOZA:</span> {prices.bomdoza}
        </p>
        <p className="text-green-600 text-xl font-bold">
          <span className="text-body-color text-xs font-normal">DOMICÍLIO:</span> {prices.domicilio}
        </p>
      </div>
    </div>
  );
};

export default ServicePackage;
