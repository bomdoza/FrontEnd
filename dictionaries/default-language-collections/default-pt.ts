export const pt = {
  menu: {
    menuData: [
      {
        id: 1,
        title: "Home",
        path: "/",
        newTab: false,
      },
      {
        id: 2,
        title: "Serviços",
        newTab: false,
        submenu: [
          {
            id: 41,
            title: "Lavagem de Carros",
            path: "/service/Car-Wash",
            newTab: false,
          },
          {
            id: 42,
            title: "Lavagem de Mobílias",
            path: "/service/Furniture-Washing",
            newTab: false,
          },
          {
            id: 43,
            title: "Lavagem de Tanques",
            path: "/service/Tank-Washing",
            newTab: false,
          },
        ],
      },
      {
        id: 3,
        title: "Sobre-nós",
        path: "/about",
        newTab: false,
      },
      {
        id: 4,
        title: "Blog",
        path: "/blog",
        newTab: false,
      },
      {
        id: 5,
        title: "Contacto",
        path: "/contact",
        newTab: false,
      },
    ],
  },

  labelButtonMenu: {
    labelButton: "Contactar",
  },


  footer: {},

  
  home: {
    heroTitle: "O melhor serviço de lavagem",
    heroDesc: "Lavagem profissional completo.",
    heroSubDesc:
      "Somos uma empresa especializada em proporcionar serviços de lavagem dos seus perteces de alta qualidade e eficiência.",
    heroLabelButton: "Contacte-nos",
  },

  "Welcome {{name}}": "Bem Vindo {{name}}",
};
