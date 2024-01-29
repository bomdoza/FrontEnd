"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import pacotesData from '@/components/data/pacote.json';

const carTypeIcons = {
  Ligeiro: (
    <svg
      viewBox="0 0 640 512"
      fill="currentColor"
      height="2em"
      width="2em"
    >
      <path d="M171.3 96H224v96H111.3l30.4-75.9C146.5 104 158.2 96 171.3 96zM272 192V96h81.2c9.7 0 18.9 4.4 25 12l67.2 84H272zm256.2 1l-100-125c-18.2-22.8-45.8-36-75-36H171.3C132 32 96.7 55.9 82.2 92.3L40.6 196.4C16.8 205.8 0 228.9 0 256v112c0 17.7 14.3 32 32 32h33.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80h130.6c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H608c17.7 0 32-14.3 32-32v-48c0-65.2-48.8-119-111.8-127zm-2.9 207c-6.6 18.6-24.4 32-45.3 32s-38.7-13.4-45.3-32c-1.8-5-2.7-10.4-2.7-16 0-26.5 21.5-48 48-48s48 21.5 48 48c0 5.6-1 11-2.7 16zM160 432c-20.9 0-38.7-13.4-45.3-32-1.8-5-2.7-10.4-2.7-16 0-26.5 21.5-48 48-48s48 21.5 48 48c0 5.6-1 11-2.7 16-6.6 18.6-24.4 32-45.3 32z" />
    </svg>
  ),
  Mini_van: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="2em"
      width="2em"
    >
      <path d="M3 7c-1.11 0-2 .89-2 2v8h2a3 3 0 003 3 3 3 0 003-3h6a3 3 0 003 3 3 3 0 003-3h2v-4c0-1.11-.89-2-2-2l-3-4H3m12 1.5h2.5l1.96 2.5H15V8.5m-9 7A1.5 1.5 0 017.5 17 1.5 1.5 0 016 18.5 1.5 1.5 0 014.5 17 1.5 1.5 0 016 15.5m12 0a1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5z" />
    </svg>
  ),
  Autocarros: (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="2em"
      width="2em"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M8 17 A2 2 0 0 1 6 19 A2 2 0 0 1 4 17 A2 2 0 0 1 8 17 z" />
      <path d="M20 17 A2 2 0 0 1 18 19 A2 2 0 0 1 16 17 A2 2 0 0 1 20 17 z" />
      <path d="M4 17H2V6a1 1 0 011-1h14a5 7 0 015 7v5h-2m-4 0H8" />
      <path d="M16 5l1.5 7H22M2 10h15M7 5v5M12 5v5" />
    </svg>
  ),
  Atrelados: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="2em"
      width="2em"
    >
      <path d="M20 8h-3V4H1v13h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4M6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5M15 7h-2v7h-2V7H9v7H7V7H5v7H3V6h12v1m3 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5M17 12V9.5h2.5l1.96 2.5H17z" />
    </svg>
  ),
};

function Pacote() {

  const [selectedCarType, setSelectedCarType] = useState(Object.keys(pacotesData.carType)[0]);

  const handleCarTypeChange = (type) => {
    setSelectedCarType(type);
  };

  return (
    <div className='container '>
      <div className='border-b border-gray-200 dark:border-gray-700 justify-center flex'>
      <ul className='flex flex-wrap -mb-px text-sm md:text-xl font-medium text-center text-gray-500 dark:text-gray-400 justify-center'>
          {Object.keys(pacotesData.carType).map((carType, index) => (
            <li key={index} className='me-3 lg:me-6'>
              <a
                onClick={() => handleCarTypeChange(carType)}
                className={`inline-flex items-center justify-center p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${
                  selectedCarType === carType ? 'text-blue-600 border-blue-600' : ''
                }`}
              >
                {/* ícone do carro correspondente aqui */}
                <span className='pr-2 lg:pr-3'>
                {carTypeIcons[carType]}
                </span>
                {`${carType}`}
              </a>
            </li>
          ))}
        </ul>
      </div>


        <div className='row flex flex-wrap w-full'>
        {pacotesData.carType[selectedCarType].map((pacote, index) => (
          <div key={index} className='w-full lg:w-1/3 my-4 lg:pr-3'>
            <div className='my-5 pb-6 pt-5 px-3 bg-[#eef3f7ce] text-center'>
              <p className='text-center text-xs mb-3'>{pacote.type}</p>

              <p className='mb-8 text-center text-6xl relative '>
                {pacote.price}
                <span className='text-base'>00$</span>
              </p>

                <div className='w-full h-[65%] bg-slate-50'>
                    <div className='w-full sm:w-1/2 lg:w-3/4 xl:w-1/2 h-10 mx-auto flex flex-wrap justify-center content-center bg-primary relative bottom-3'>                      
                            <svg
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                height="25"
                                width="25"
                                >
                                <path d="M8.5 5.6a.5.5 0 10-1 0v2.9h-3a.5.5 0 000 1H8a.5.5 0 00.5-.5V5.6z" />
                                <path d="M6.5 1A.5.5 0 017 .5h2a.5.5 0 010 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 01.012-.013l.354-.354-.354-.353a.5.5 0 01.707-.708l1.414 1.415a.5.5 0 11-.707.707l-.353-.354-.354.354a.512.512 0 01-.013.012A7 7 0 117 2.071V1.5a.5.5 0 01-.5-.5zM8 3a6 6 0 10.001 12A6 6 0 008 3z" />
                            </svg>   
                        
                        <p className='pl-4 text-xl'> {pacote.time}</p>               
                    </div>

                    <ul className='text-black w-2/3 mx-auto pt-2'>
                    {pacote.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className='flex flex-wrap justify-center content-center'>
                        <div className='pr-4'>
                            <svg
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                height="2em"
                                width="2em"
                                >
                                <path d="M10.97 4.97a.75.75 0 011.07 1.05l-3.99 4.99a.75.75 0 01-1.08.02L4.324 8.384a.75.75 0 111.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 01.02-.022z" />
                            </svg>
                        </div>
                        <p className='lg:pl-4'>{service}</p>
                        </li>
                    ))}
                    </ul>

                    <div className="lg:pl-4 py-5 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <Link
                        href="/contact"
                        className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    >
                        Contacte-nos
                    </Link>
                    </div>

                </div>

            </div>
          </div>
        ))}

        </div>
    </div>
  )
};

export default Pacote