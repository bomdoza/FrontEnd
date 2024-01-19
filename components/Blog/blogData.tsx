import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title:
      "Descubra a Nova Era da Limpeza com a Bom Doza e seus Serviços Inovadores",
    paragraph:
      "Bem-vindo à revolução da limpeza com a Bom Doza! Estamos orgulhosos de apresentar a você a próxima era em serviços de limpeza, onde a inovação e a excelência se encontram para transformar o comum em impecável.",
    image: "/images/blog/post1.png",
    author: {
      name: "Bom Doza",
      image: "/images/favicon.png",
      designation: "Administrador",
    },
    tags: ["Novidade"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Por Que Escolher Bom Doza para suas Necessidades de Limpeza?",
    paragraph:
      "Bem-vindo à revolução da limpeza com a Bom Doza! Estamos orgulhosos de apresentar a você a próxima era em serviços de limpeza, onde a inovação e a excelência se encontram para transformar o comum em impecável.",
    image: "/images/blog/post2.png",
    author: {
      name: "Bom Doza",
      image: "/images/favicon.png",
      designation: "Administrador",
    },
    tags: ["Curiosidade"],
    publishDate: "2025",
  },
  {
    id: 3,
    title:
      "Adesivo Bom Doza no Carro: Limpeza com Desconto para Nossos Apoiadores",
    paragraph:
      "Na vasta paisagem de serviços de limpeza, a Bom Doza destaca-se como a escolha óbvia para quem busca excelência, qualidade e comprometimento. Descubra as razões convincentes pelas quais somos a principal escolha para atender às suas necessidades de limpeza.",
    image: "/images/blog/post3.png",
    author: {
      name: "Bom Doza",
      image: "/images/favicon.png",
      designation: "Administrador",
    },
    tags: ["Desconto"],
    publishDate: "2024",
  },
];
export default blogData;
