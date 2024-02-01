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

  footer: {
    descripition:
      "Transformando o comum em impecável, cuidando de carros, sofás, tapetes e mais com excelência!",
    linkTitle1: "Links Úteis",
    linkTitle2: "Política de Privacidade",
    linkTitle3: "Redes Sociais",
    linksData: [
      { href: "/about", text: "Sobre Nós" },
      { href: "/blog", text: "Blog" },
      { href: "/contact", text: "Contacte-nos" },
    ],
    privacyLinksData: [
      { href: "code-conduct", text: "Código de Conduta" },
      { href: "/terms-services", text: "Termos de Serviços" },
      { href: "/terms-use", text: "Termo de Uso" },
    ],
    "Copyright{{year}}":
      "Copyright ©{{year}}  todos os direitos reservados a Bom Doza",
  },

  home: {
    heroTitle: "Bu midjor servisu di lavajem",
    heroDesc: "Lavajem profissional kompleto",
    heroSubDesc:
      "Nós eh um empresa especializado pa proporcioná servisu di lavajem di bus cusas di alta kualidadi i efisiénsia",
    heroLabelButton: "Kontatá-nôs",

    aboutSectionThree: {
      title: "É hora de limpar seus pertences",
      description:
        "É hora de elevar o padrão de limpeza dos seus pertences! Na Bom Doza, dedicamos nossa expertise em transformar o comum em impecável. Seja o seu carro, sofá, tapete ou qualquer outro item, nossa equipe especializada está pronta para proporcionar uma limpeza excepcional.",
      list: [
        { text: "Somos um serviço profissional de lavagem" },
        { text: "Usamos os melhores materiais de lavagem" },
        { text: "Preocupamo-nos com a satisfação dos nossos clientes" },
      ],
    },

    service: {
      title: "Nossos serviços",
      description:
        "Na Bom Doza, oferecemos uma gama abrangente de serviços especializados",
      ServiceItem: [
        {
          id: 1,
          name: "Lavagem de Carros",
          href: "/service/Car-Wash",
          image: "/images/service/Automotive.png",
        },
        {
          id: 2,
          name: "Lavagem de Mobília",
          href: "/service/Furniture-Washing",
          image: "/images/service/sofa.png",
        },
        {
          id: 3,
          name: "Lavagem de Tanques",
          href: "/service/Tank-Washing",
          image: "/images/service/tank.png",
        },
      ],
    },

    testimonial: {
      title: "O que os nossos clientes dizem",
      descripition:
        "A satisfação dos nossos clientes é o melhor testemunho da nossa dedicação à excelência",
      testimonialPeople: [
        {
          id: 1,
          name: "Miguel",
          designation: "Taxista",
          content:
            "A Bom Doza superou minhas expectativas na limpeza do meu carro. A atenção aos detalhes e a qualidade dos produtos deixaram meu carro impecável. Recomendo!",
          image: "/images/user/userDefault.png",
          star: 5,
        },
        {
          id: 2,
          name: "Beatriz",
          designation: "Dona de casa",
          content:
            "A Bom Doza fez um trabalho incrível na limpeza dos meus tapetes. A equipe foi eficiente cuidaDoza e trouxe uma nova vida aos meus tapetes. Estou muito satisfeito!",
          image: "/images/user/userDefault.png",
          star: 5,
        },
        {
          id: 3,
          name: "Matheus",
          designation: "Empresário",
          content:
            "A Bom Doza foi a escolha certa para a limpeza dos tanques na minha empresa. Demonstraram conhecimento especializado, segurança e eficiência. Recomendo!",
          image: "/images/user/userDefault.png",
          star: 5,
        },
      ],
    },

    faq: {
      title: "Perguntas frequentes",
      descripition: "Tire as suas dúvidas sobre os servços Bom Doza",
      FaqItem: [
        {
          id: 1,
          question:
            "O que torna a Bom Doza única no mercado de serviços de limpeza?",
          response:
            "A Bom Doza destaca-se pela sua abordagem inovadora, compromisso com a excelência e sustentabilidade, oferecendo serviços personalizados para atender às necessidades específicas de cada cliente.",
        },
        {
          id: 2,
          question:
            "Quais são os principais serviços oferecidos pela Bom Doza?",
          response:
            "Oferecemos uma ampla gama de serviços de limpeza, incluindo limpeza residencial, comercial, automotiva, limpeza de tapetes, sofás, tanques, entre outros.",
        },
        {
          id: 3,
          question: "Como posso agendar um serviço de limpeza com a Bom Doza?",
          response:
            "O agendamento pode ser feito através do nosso site, telefone ou e-mail. Basta entrar em contato conosco, e nossa equipa estará pronta para ajudar a marcar o serviço.",
        },
        {
          id: 4,
          question:
            "A Bom Doza oferece serviços de limpeza personalizados para residências e empresas?",
          response:
            "Sim, adaptamos nossos serviços para atender às necessidades específicas de cada cliente, seja em ambientes residenciais ou comerciais.",
        },
        {
          id: 5,
          question: "Qual é a área de cobertura dos serviços da Bom Doza?",
          response: "Atendemos a uma ampla área na cidade da Praia.",
        },
        {
          id: 6,
          question:
            "Quais são as medidas de segurança implementadas pela Bom Doza durante os serviços?",
          response:
            "Implementamos rigorosas medidas de segurança para proteger tanto nossos clientes quanto nossa equipa, seguindo protocolos e normas de segurança.",
        },
      ],
    },
  },

  blog: {
    titleHome: "Nossas últimas notícias",
    descripitionHome: "Transformando o ordinário em impecável com a Bom Dosa",
    title: "Blog",
    descripition:
      "Revelando a Limpeza em Todos os Detalhes: Notícias Fresquinhas, Serviços Impecáveis!",
    tag: "Últimas Notícias",
    latestNews: "Tags Populares",
    BlogPost: [
      {
        id: 1,
        title:
          "Descubra a nova era da limpeza com a Bom Doza e seus serviços inovadores",
        paragraph:
          "Bem-vindo à revolução da limpeza com a Bom Doza! Estamos orgulhosos de apresentar a você a próxima era em serviços de limpeza, onde a inovação e a excelência se encontram para transformar o comum em impecável.",
        image: "/images/blog/post1.png",
        author: {
          name: "Bom Doza",
          image: "/images/favicon.png",
          designation: "Administrador",
        },
        tags: ["Novidade"],
        publishDate: "22 Jan 2024",
        paragraph2: [
          "O que nos destaca é a atenção aos detalhes. Na Bom Doza, entendemos que são os pequenos detalhes que fazem a diferença. Seja na remoção meticulosa de manchas difíceis ou na organização impecável de cada espaço, dedicamos tempo e cuidado para garantir que o seu ambiente brilhe com uma limpeza reluzente.",
          "Reconhecemos que cada cliente é único, e as suas necessidades de limpeza também o são. Na Bom Doza, oferecemos serviços altamente personalizados para garantir que cada cliente receba exatamente o que precisa. Seja uma limpeza regular, uma limpeza profunda ou serviços especializados, adaptamos os nossos métodos para corresponder às suas expectativas.",
        ],
        concluding:
          "Ao escolher a Bom Doza para as suas necessidades de limpeza, você está escolhendo mais do que um serviço convencional. Está escolhendo a excelência, a inovação e o compromisso com a qualidade. Junte-se a nós nesta jornada de transformar o ordinário em extraordinário, porque na Bom Doza, a sua limpeza é a nossa missão. Não hesite em entrar em contato para descobrir como podemos tornar o seu espaço impecável. Bem-vindo à revolução da limpeza com Bom Doza!",
        topicDes: {
          title:
            "Serviços inovadores para todas as suas necessidades de limpeza",
          desc: "Na vanguarda da indústria de limpeza, a Bom Doza oferece uma gama abrangente de serviços inovadores, adaptados para atender a todas as suas necessidades de limpeza. Seja para espaços residenciais ou comerciais, a nossa equipa dedicada e altamente treinada está pronta para superar as expectativas.",
          topic: [
            "Compromisso com a excelência e inovação",
            "A próxima era em serviços de limpeza",
            "O compromisso de Bom Doza com a sua satisfação",
          ],
        },
      },
      {
        id: 2,
        title: "Por que escolher Bom Doza para suas necessidades de limpeza?",
        paragraph:
          "Bem-vindo à revolução da limpeza com a Bom Doza! Estamos orgulhosos de apresentar a você a próxima era em serviços de limpeza, onde a inovação e a excelência se encontram para transformar o comum em impecável.",
        image: "/images/blog/post2.png",
        author: {
          name: "Bom Doza",
          image: "/images/favicon.png",
          designation: "Administrador",
        },
        tags: ["Curiosidade"],
        publishDate: "20 Jan 2025",
        paragraph2: [
          "Na Bom Doza, acreditamos que a inovação é a chave para uma limpeza eficaz e duradoura. Investimos em tecnologias de ponta e métodos de limpeza avançados para proporcionar resultados que superam as expectativas. Cada projeto é tratado como uma oportunidade de inovar, garantindo que o seu espaço receba os benefícios das práticas mais recentes no setor de limpeza.",
          "Na Bom Doza, valorizamos a transparência e construímos relações baseadas na confiança. Desde o início até a conclusão do projeto, comunicamos de maneira aberta e honesta. Queremos que saiba exatamente o que esperar e que possa confiar que o resultado final refletirá o nosso compromisso com a qualidade.",
        ],
        concluding:
          "Ao escolher Bom Doza para as suas necessidades de limpeza, você está a escolher qualidade, inovação e um compromisso inabalável com a satisfação do cliente. Junte-se a nós nesta revolução da limpeza e descubra como podemos transformar o seu espaço com a magia da Bom Doza. Entre em contacto conosco agora e permita-nos levar a excelência da limpeza para o seu mundo.",
        topicDes: {
          title: "Inovação contínua para serviços atualizados",
          desc: "O mundo está sempre em evolução, e assim também são as melhores práticas em limpeza. Na Bom Doza, comprometemo-nos com a inovação contínua. Mantemos-nos atualizados com as últimas tendências, tecnologias e métodos para garantir que os nossos serviços estejam na vanguarda da indústria. A sua satisfação é a nossa motivação para melhorar constantemente.",
          topic: [
            "Feedback dos clientes: A chave para o nosso aperfeiçoamento",
            "A experiência Bom Doza: Mais do que limpeza, uma transformação",
            "Equipa Bom Doza: Paixão pela limpeza",
          ],
        },
      },
      {
        id: 3,
        title:
          "Adesivo Bom Doza no carro: limpeza com desconto para nossos apoiadores",
        paragraph:
          "Na vasta paisagem de serviços de limpeza, a Bom Doza destaca-se como a escolha óbvia para quem busca excelência, qualidade e comprometimento. Descubra as razões convincentes pelas quais somos a principal escolha para atender às suas necessidades de limpeza.",
        image: "/images/blog/post3.png",
        author: {
          name: "Bom Doza",
          image: "/images/favicon.png",
          designation: "Administrador",
        },
        tags: ["Desconto"],
        publishDate: "12 Jan 2024",
        paragraph2: [
          "Excelência em Serviço: Compromisso com a excelência é a nossa norma. Desde a remoção de poeira até a higienização profunda, cada detalhe do seu carro é tratado com a atenção meticulosa que define a Bom Doza.",
          "Produtos de Qualidade: Utilizamos apenas produtos de limpeza de alta qualidade, eficazes na remoção de manchas e odores, mas suaves o suficiente para preservar a integridade dos materiais do seu veículo.",
          "Equipa Especializada: A nossa equipa é composta por profissionais treinados, apaixonados pela limpeza automotiva. Eles conhecem os cantos e recantos do seu carro, garantindo um serviço abrangente e minucioso.",
          "Compromisso com a Sustentabilidade: Assim como em todos os nossos serviços, a Bom Doza está comprometida com práticas sustentáveis. Utilizamos métodos que minimizam o impacto ambiental, mantendo o seu carro limpo de forma responsável.",
        ],
        concluding:
          "Estamos entusiasmados para trazer a qualidade e o comprometimento da Bom Doza para o seu veículo. Junte-se à revolução da limpeza automotiva e experimente o padrão ouro em serviços de limpeza. Entre em contacto hoje mesmo, receba o seu adesivo exclusivo e deixe-nos transformar o seu carro numa obra-prima impecável!",
        topicDes: {
          title: "Descontos exclusivos para nossos apreciados apoiadores",
          desc: "Como forma de agradecimento pela sua lealdade, apresentamos descontos exclusivos para todos os nossos apoiadores que exibirem o adesivo Bom Doza no seu carro. Este é o nosso jeito de retribuir e expressar a nossa gratidão por escolher a Bom Doza como a sua escolha preferida em serviços de limpeza.",
          topic: [
            "Entre em contato conosco para receber o seu adesivo Bom Doza.",
            "Coloque o adesivo de forma visível no seu carro",
            "Ao agendar um serviço de limpeza automotiva, apresente o adesivo para desfrutar dos descontos exclusivos.",
          ],
        },
      },

      {
        id: 4,
        title:
          "Dicas infalíveis para uma limpeza impecável: carros, tapetes, sofás e tanques",
        paragraph:
          "Limpar nossos pertences é uma maneira essencial de manter um ambiente saudável e agradável. Vamos explorar algumas dicas para realizar uma limpeza eficaz em diferentes áreas da sua vida.",
        image: "/images/blog/post1.png",
        author: {
          name: "Bom Doza",
          image: "/images/favicon.png",
          designation: "Administrador",
        },
        tags: ["Dicas"],
        publishDate: "11 Jan 2024",
        paragraph2: [
          "Manter um ambiente limpo não é apenas uma questão de estética, mas também fundamental para criar um espaço saudável e agradável. Neste blog, vamos explorar algumas dicas infalíveis para realizar uma limpeza eficaz em áreas específicas da sua vida: carros, tapetes, sofás e tanques. Vamos lá!",
          "",
        ],
        concluding:
          "A limpeza eficaz não é apenas sobre a remoção de sujeira visível, mas também sobre a criação de ambientes saudáveis e agradáveis. Ao seguir estas dicas específicas para carros, tapetes, sofás e tanques, você estará no caminho para manter cada área da sua vida impecavelmente limpa. Lembre-se, a consistência é a chave para um ambiente sempre fresco e convidativo.",
        topicDes: {
          title: "Tecnicas infalíveis para uma limpeza impecável:",
          desc: "Aspiração Regular: Aspire os tapetes regularmente para evitar o acúmulo de poeira e alergénios. Drenagem Regular: Faça a drenagem regular dos tanques para remover sedimentos acumulados no fundo. Aspiração Profunda: Utilize um aspirador de alta potência para remover poeira, migalhas e sujeira dos bancos e carpetes dos carros",
          topic: [
            "Limpeza de carros",
            "Limpeza de tapetes",
            "Limpeza de tanques",
          ],
        },
      },
    ],
  },

  "Welcome {{name}}": "Benvindu {{name}}",
};
