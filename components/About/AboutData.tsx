import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      height="40"
      width="40"
      >
      <g
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <path d="M24 30a8 8 0 0016 0M18 20h2M46 20h-2" />
        <path d="M32 47h31V5H1v42h17v12z" />
      </g>
    </svg>
    ),
    title: "Qualidade Inabalável",
    paragraph:
      "Desde o início, estabelecemos um padrão de qualidade intransigente em cada serviço que oferecemos. Cada detalhe, desde a escolha dos produtos até a execução das técnicas de lavagem, é meticulosamente planejado para garantir resultados excepcionais.",
      imgfundo: "",
      price: "",
  },
  {
    id: 2,
    icon: (
      <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="40"
      width="40"
    >
      <path d="M23.235 6.825v11.997a.924.924 0 01-.419.725l-.393.235c-1.961 1.135-3.687 2.134-5.431 3.14V9.948L5.759 3.454C7.703 2.338 9.64 1.211 11.586.1a.927.927 0 01.837 0l10.81 6.243v.482zm-8.741 4.562A9631.706 9631.706 0 006.8 6.943a.94.94 0 00-.837 0c-1.733 1.001-3.467 2-5.199 3.004l8.113 4.684V24c1.732-.999 3.46-2.006 5.197-2.995a.927.927 0 00.419-.724zM.765 19.317l5.613 3.241V16.07z" />
    </svg>
    ),
    title: "Investimento em Treinamento",
    paragraph:
      "Reconhecemos que uma equipe bem treinada é fundamental para entregar excelência. Investimos constantemente no treinamento e desenvolvimento de nossa equipe, capacitando-os com as habilidades necessárias para oferecer um serviço de alta qualidade.",
      imgfundo: "/images/servicos/tanques/tanque.jpg",
      price: "100$",
  },
  {
    id: 3,
    icon: (
      <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="40"
      width="40"
    >
      <path d="M10 10.414l4 4 5.707-5.707L22 11V5h-6l2.293 2.293L14 11.586l-4-4-7.707 7.707 1.414 1.414z" />
    </svg>
    ),
    title: "Inovação Contínua",
    paragraph:
      "Abraçamos a inovação como um meio para manter nossa oferta atualizada e eficiente. Ao adotar as mais recentes técnicas, tecnologias e produtos de limpeza, garantimos que nossos serviços estejam sempre à frente das expectativas do setor.",
      imgfundo: "/images/servicos/tapetes/tapete1.jpeg",
      price: "100$",
  },

  {
    id: 4,
    icon: (
      <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      height="40"
      width="40"
    >
      <path d="M17 11v3l-3-3H8a2 2 0 01-2-2V2c0-1.1.9-2 2-2h10a2 2 0 012 2v7a2 2 0 01-2 2h-1zm-3 2v2a2 2 0 01-2 2H6l-3 3v-3H2a2 2 0 01-2-2V8c0-1.1.9-2 2-2h2v3a4 4 0 004 4h6z" />
    </svg>
    ),
    title: "Feedback Iterativo",
    paragraph:
      "Valorizamos as opiniões dos nossos clientes e as utilizamos como um guia constante para melhorias. Através de feedbacks contínuos, ajustamos e refinamos nossos processos para garantir que cada experiência de cliente seja mais impressionante do que a anterior.",
      imgfundo: "/images/servicos/tapetes/tapete1.jpeg",
      price: "100$",
  },
  
];
export default featuresData;
