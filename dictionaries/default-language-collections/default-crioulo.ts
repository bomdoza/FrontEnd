export const crioulo = {
  menu: {
    menuData: [
      {
        id: 1,
        title: "Comeso",
        path: "/",
        newTab: false,
      },
      {
        id: 2,
        title: "Servisu",
        newTab: false,
        submenu: [
          {
            id: 41,
            title: "Lavajem di Karus",
            path: "/service/Car-Wash",
            newTab: false,
          },
          {
            id: 42,
            title: "Lavajem di Mobilhas",
            path: "/service/Furniture-Washing",
            newTab: false,
          },
          {
            id: 43,
            title: "Lavajem di Tankis",
            path: "/service/Tank-Washing",
            newTab: false,
          },
        ],
      },
      {
        id: 3,
        title: "Sobri-nôs",
        path: "/about",
        newTab: false,
      },
      {
        id: 4,
        title: "Nótisia",
        path: "/blog",
        newTab: false,
      },
      {
        id: 5,
        title: "Kontaktu",
        path: "/contact",
        newTab: false,
      },
    ],
  },

  labelButtonMenu: {
    labelButton: "Kontatá",
  },


  footer: {},

  
  home: {
    heroTitle: "Bu midjor servisu di lavajem",
    heroDesc: "Lavajem profissional kompleto",
    heroSubDesc:
      "Nós eh um empresa especializado pa proporcioná servisu di lavajem di bus cusas di alta kualidadi i efisiénsia",
    heroLabelButton: "Kontatá-nôs",
  },

  "Welcome {{name}}": "Benvindu {{name}}",
};
