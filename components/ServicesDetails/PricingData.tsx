
const tabs = [
  {
    id: "1",
    title: "Carros Pequenos",
    icon: "faCarSide",
    packages: [
      {
        name: "Básico",
        presencialPrice: "400",
        domicilioPrice: "8000",
        desc: "Pacote Básico para uma limpeza básica.",
        services: [
          {
            name: "Lavagem externa",
            activePresencial: true,
            activeDomicilio: true,
          },
          {
            name: "Aspiração interna",
            activePresencial: true,
            activeDomicilio: true,
          },
        ],
      },
      {
        name: "Médio",
        presencialPrice: "400",
        domicilioPrice: "8000",
        desc: "Pacote Médio para uma limpeza mais abrangente.",
        services: [
          {
            name: "Lavagem externa",
            activePresencial: true,
            activeDomicilio: true,
          },
          {
            name: "Aspiração interna",
            activePresencial: true,
            activeDomicilio: true,
          },
          {
            name: "Enceramento",
            activePresencial: true,
            activeDomicilio: false,
          },
        ],
      },
      {
        name: "Avançado",
        presencialPrice: "400",
        domicilioPrice: "8000",
        desc: "Pacote Avançado para uma limpeza completa e avançada.",
        services: [
          {
            name: "Lavagem externa",
            activePresencial: true,
            activeDomicilio: true,
          },
          {
            name: "Aspiração interna",
            activePresencial: true,
            activeDomicilio: true,
          },
          {
            name: "Enceramento",
            activePresencial: true,
            activeDomicilio: true,
          },
          {
            name: "Polimento",
            activePresencial: true,
            activeDomicilio: false,
          },
        ],
      },
    ],
  },

  {
    id: "2",
    title: "Carros Médios",
    icon: "faVanShuttle",
    packages: [
      {
        name: "2Básico",
        presencialPrice: "600",
        domicilioPrice: "1500",
        desc: "Pacote Básico para uma limpeza básica.",
        services: [
          {
            name: "Lavagem externa",
            activePresencial: true,
            activeDomicilio: true,
          },
          {
            name: "Aspiração interna",
            activePresencial: true,
            activeDomicilio: true,
          },
        ],
      },
      {
        name: "Médio",
        presencialPrice: "600",
        domicilioPrice: "1500",
        desc: "Pacote Médio para uma limpeza mais abrangente.",
        services: [
          {
            name: "Lavagem externa",
            activePresencial: true,
            activeDomicilio: true,
          },
          {
            name: "Aspiração interna",
            activePresencial: true,
            activeDomicilio: true,
          },
          {
            name: "Enceramento",
            activePresencial: true,
            activeDomicilio: false,
          },
        ],
      },
      {
        name: "Avançado",
        presencialPrice: "600",
        domicilioPrice: "1500",
        desc: "Pacote Avançado para uma limpeza completa e avançada.",
        services: [
          {
            name: "Lavagem externa",
            activePresencial: true,
            activeDomicilio: true,
          },
          {
            name: "Aspiração interna",
            activePresencial: true,
            activeDomicilio: true,
          },
          {
            name: "Enceramento",
            activePresencial: true,
            activeDomicilio: true,
          },
          {
            name: "Polimento",
            activePresencial: true,
            activeDomicilio: false,
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Carros Grandes",
    icon: "faTruck",
    packages: [
      {
        name: "3Básico",
        presencialPrice: "800",
        domicilioPrice: "2000",
        desc: "Pacote Básico para uma limpeza básica.",
        services: [
          {
            name: "Lavagem externa",
            activePresencial: true,
            activeDomicilio: true,
          },
          {
            name: "Aspiração interna",
            activePresencial: true,
            activeDomicilio: true,
          },
        ],
      },
      {
        name: "Médio",
        presencialPrice: "800",
        domicilioPrice: "2000",
        desc: "Pacote Médio para uma limpeza mais abrangente.",
        services: [
          {
            name: "Lavagem externa",
            activePresencial: true,
            activeDomicilio: true,
          },
          {
            name: "Aspiração interna",
            activePresencial: true,
            activeDomicilio: true,
          },
          {
            name: "Enceramento",
            activePresencial: true,
            activeDomicilio: false,
          },
        ],
      },
      {
        name: "Avançado",
        presencialPrice: "800",
        domicilioPrice: "2000",
        desc: "Pacote Avançado para uma limpeza completa e avançada.",
        services: [
          {
            name: "Lavagem externa",
            activePresencial: true,
            activeDomicilio: true,
          },
          {
            name: "Aspiração interna",
            activePresencial: true,
            activeDomicilio: true,
          },
          {
            name: "Enceramento",
            activePresencial: true,
            activeDomicilio: true,
          },
          {
            name: "Polimento",
            activePresencial: true,
            activeDomicilio: false,
          },
        ],
      },
    ],
  },
];


export default tabs;
