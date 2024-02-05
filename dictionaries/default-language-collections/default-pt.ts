
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
    heroTitle: "O melhor serviço de lavagem",
    heroDesc: "Lavagem profissional completo.",
    heroSubDesc:
      "Somos uma empresa especializada em proporcionar serviços de lavagem dos seus perteces de alta qualidade e eficiência.",
    heroLabelButton: "Contacte-nos",

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

  contact: {
    title: "Contacto",
    descripition:
      "Estamos aqui para tornar o processo de contato tão fácil quanto a limpeza que oferecemos. Não hesite em nos chamar para descobrir como podemos transformar seus pertences com cuidado e qualidade. Estamos ansiosos para ouvir de você!",
    sideBarTitle: "Informações de Contacto",
    sideBarDescripition: "Nos contacte e obtenha os nossos Serviços",
    sideBarListAdress: [
      {
        name: "Endereço: palmarejo, Praia",
        icon: "houseIcon",
      },
      {
        name: "Swag: 5 99 99 99",
        icon: "phoneIcon",
      },
      {
        name: "Play: 955 55 55",
        icon: "phoneIcon",
      },
      {
        name: "bomdoza@gmail.com",
        icon: "mailIcon",
      },
    ],

    formTitle: "Precisas de ajuda? Nos envie uma mensagem",
    formDescripition:
      "Nossa equipe de suporte entrará em contacto com si o mais rápido possível via e-mail.",
    formLabelName: "Seu Nome",
    formLabelEmail: "Seu Email",
    formLabelMensage: "Sua Mensagem",
    formPlaceholderName: "Insira seu nome",
    formPlaceholderEmail: "Insira seu email",
    formPlaceholderMensage: "Insira sua Mensagem",
    formButton: "Enviar Mensagem",
  },

  abaut: {
    title: "Sobre Nós",
    description:
      "Bem-vindo à Bom Doza, sua solução completa para serviços de lavagem. Nossa empresa é especializada em proporcionar cuidados meticulosos a uma variedade de itens, desde a limpeza detalhada de carros até a revitalização de sofás, tapetes e tanques. Com uma equipe altamente qualificada e equipamentos modernos, garantimos resultados excepcionais em cada serviço.",
    ExcellenceSection: {
      title: "Compromisso com a Excelência desde o Início",
      description:
        "Na Bom Doza, a busca incessante pela excelência é uma parte intrínseca de nossa identidade. Desde os primeiros dias da nossa jornada, comprometemo-nos a proporcionar aos nossos clientes uma experiência de lavagem de carros e serviços de limpeza que transcende as expectativas convencionais.",
      Feature: [
        {
          id: 1,
          icon: "qualityIcon",
          title: "Qualidade Inabalável",
          paragraph:
            "Desde o início, estabelecemos um padrão de qualidade intransigente em cada serviço que oferecemos. Cada detalhe, desde a escolha dos produtos até a execução das técnicas de lavagem, é meticulosamente planejado para garantir resultados excepcionais.",
          imgfundo: "/images/servicos/tanques/tanque.jpg",
          price: "100$",
        },
        {
          id: 2,
          icon: "investmentIcon",
          title: "Investimento em Treinamento",
          paragraph:
            "Reconhecemos que uma equipe bem treinada é fundamental para entregar excelência. Investimos constantemente no treinamento e desenvolvimento de nossa equipe, capacitando-os com as habilidades necessárias para oferecer um serviço de alta qualidade.",
          imgfundo: "/images/servicos/tanques/tanque.jpg",
          price: "100$",
        },
        {
          id: 3,
          icon: "innovationIcon",
          title: "Inovação Contínua",
          paragraph:
            "Abraçamos a inovação como um meio para manter nossa oferta atualizada e eficiente. Ao adotar as mais recentes técnicas, tecnologias e produtos de limpeza, garantimos que nossos serviços estejam sempre à frente das expectativas do setor.",
          imgfundo: "/images/servicos/tapetes/tapete1.jpeg",
          price: "100$",
        },

        {
          id: 4,
          icon: "feedbackIcon",
          title: "Feedback Iterativo",
          paragraph:
            "Valorizamos as opiniões dos nossos clientes e as utilizamos como um guia constante para melhorias. Através de feedbacks contínuos, ajustamos e refinamos nossos processos para garantir que cada experiência de cliente seja mais impressionante do que a anterior.",
          imgfundo: "/images/servicos/tapetes/tapete1.jpeg",
          price: "100$",
        },
      ],
    },
    AboutSectionOne: {
      div1Title: "Missão",
      div1Description:
        "Nossa missão é transformar a rotina da lavagem em uma experiência extraordinária. Buscamos proporcionar não apenas limpeza, mas a renovação completa de carros, sofás, tapetes, tanques e diversos outros itens, utilizando técnicas avançadas e produtos de alta qualidade.Nossa missão é transformar a rotina da lavagem em uma experiência extraordinária. Buscamos proporcionar não apenas limpeza, mas a renovação completa de carros, sofás, tapetes, tanques e diversos outros itens, utilizando técnicas avançadas e produtos de alta qualidade.",
      div2Title: "Sustentabilidade",
      div2Description:
        "Além de buscar a excelência nos resultados, a BomDoza é comprometida com práticas sustentáveis. Procuramos minimizar nosso impacto ambiental, escolhendo produtos e métodos que respeitam o meio ambiente.",
    },
    AboutSectionTwo: {
      div1Title: "Como Funciona?",
      div1Description:
        " A Bom Doza oferece uma gama de serviços de qualidade. Não se trata apenas de lavagem, é sobre restaurar, rejuvenescer e elevar a experiência de cuidado com seus pertences. Escolha a qualidade, escolha a dedicação, escolha a BomDoza para transformar a limpeza em uma experiência excepcional.",
      div2Title: "Equipe Especializada",
      div2Description:
        "Contamos com uma equipe altamente qualificada e dedicada, apaixonada por oferecer soluções personalizadas para atender às necessidades específicas de cada cliente. Nossa equipe é treinada nas técnicas mais recentes de limpeza e está comprometida em garantir que cada item receba o tratamento que merece.",
    },
  },

  codeConduct: {
    title: "Código de Conduta",
    descripition:
      "Na Bom Doza, estamos comprometidos em manter os mais altos padrões éticos, promovendo um ambiente de trabalho respeitoso, justo e responsável. Nosso Código de Conduta serve como um guia para todos os membros da equipe, refletindo nossos valores e princípios fundamentais.",
    textEnd:
      "Ao seguir este Código de Conduta, cada membro da equipe Bom Doza contribui para a construção de uma empresa ética, responsável e de sucesso. Este código reflete os valores que nos orientam diariamente e nos ajuda a construir relacionamentos duradouros com nossos clientes, parceiros e colegas de equipe.",

    cod: [
      {
        title: "Integridade e Honestidade",
        desc: "Atuamos com honestidade e integridade em todas as nossas interações, mantendo a transparência em nossas práticas comerciais.",
      },
      {
        title: "Respeito e Diversidade",
        desc: "Valorizamos a diversidade e respeitamos as diferenças individuais. Tratamos todos com dignidade e cortesia, promovendo um ambiente inclusivo.",
      },
      {
        title: "Qualidade e Profissionalismo",
        desc: "Buscamos continuamente a excelência em nossos serviços, garantindo padrões de qualidade consistentes. Mantemos um comportamento profissional em todas as situações.",
      },
      {
        title: "Sustentabilidade e Responsabilidade Ambiental",
        desc: "Comprometemo-nos a minimizar nosso impacto ambiental, adotando práticas sustentáveis e responsáveis em todas as operações.",
      },
      {
        title: "Saúde e Segurança",
        desc: "Priorizamos a segurança e o bem-estar de nossa equipe e clientes. Cumprimos rigorosamente as normas de saúde e segurança no trabalho.",
      },
      {
        title: "Confidencialidade",
        desc: "Respeitamos a confidencialidade das informações confiadas a nós por clientes, colegas e parceiros de negócios.",
      },
      {
        title: "Cumprimento de Leis e Normas",
        desc: "Observamos e cumprimos todas as leis e regulamentações aplicáveis em todas as áreas de operação.",
      },
      {
        title: "Comunicação Clara e Aberta",
        desc: "Fomentamos uma comunicação aberta e eficaz, promovendo um ambiente em que as preocupações possam ser levantadas e resolvidas adequadamente.",
      },
      {
        title: "Responsabilidade Social",
        desc: "Contribuímos para o bem-estar das comunidades em que atuamos, participando ativamente de iniciativas sociais e filantrópicas.",
      },
      {
        title: "Atualização Contínua",
        desc: "Comprometemo-nos a aprender e evoluir continuamente, buscando oportunidades de melhoria em nossas práticas e processos.",
      },
    ],
  },

  termsServices: {
    title: "Termos de Serviços",
    descripition:
      "Ao utilizar os serviços prestados pela Bom Doza, você concorda com os seguintes termos e condições. Recomendamos a leitura cuidadosa deste documento antes de utilizar nossos serviços.",
    textEnd:
      "Ao utilizar os serviços da Bom Doza, você concorda em cumprir estes Termos de Serviço. Agradecemos pela escolha dos nossos serviços e estamos comprometidos em proporcionar uma experiência de qualidade.",
    Term: [
      {
        title: "Descrição dos Serviços",
        desc: "A Bom Doza oferece uma variedade de serviços de lavagem e cuidados, incluindo, mas não se limitando a, lavagem de carros, lavagem de móveis, restauro de plásticos, lavagem de tanques, entre outros. Os detalhes específicos de cada serviço estão disponíveis em nosso site e podem estar sujeitos a atualizações periódicas.",
      },
      {
        title: "Agendamento e Cancelamento",
        desc: "O agendamento de serviços pode ser realizado através do nosso site, aplicativo móvel ou por contato direto com a nossa equipe. O cancelamento de serviços agendados está sujeito a políticas específicas, as quais podem variar conforme o tipo de serviço. Informações detalhadas sobre políticas de agendamento e cancelamento estão disponíveis mediante solicitação.",
      },
      {
        title: "Pagamentos e Faturamento",
        desc: "Os pagamentos pelos serviços prestados pela Bom Doza podem ser realizados no momento da prestação do serviço ou conforme acordado previamente. Aceitamos métodos de pagamento específicos, detalhados em nossas informações de faturamento.",
      },
      {
        title: "Responsabilidade e Garantia",
        desc: "A Bom Doza compromete-se a fornecer serviços de alta qualidade, utilizando métodos e produtos adequados a cada necessidade. Garantimos a satisfação do cliente e estamos abertos a resolver quaisquer problemas que possam surgir durante ou após a prestação dos serviços.",
      },
      {
        title: "Privacidade e Segurança",
        desc: "Respeitamos a privacidade dos nossos clientes e garantimos que as informações fornecidas durante a prestação dos serviços serão tratadas com a máxima confidencialidade. Para obter mais informações sobre nossa política de privacidade, consulte a seção específica em nosso site.",
      },
      {
        title: "Alterações nos Termos de Serviço",
        desc: "A Bom Doza reserva-se o direito de atualizar ou modificar estes Termos de Serviço a qualquer momento. As alterações serão comunicadas aos clientes através dos meios apropriados. O uso contínuo dos nossos serviços após qualquer alteração nos Termos de Serviço constituirá aceitação dessas alterações.",
      },
      {
        title: "Contato",
        desc: "Para quaisquer dúvidas, reclamações ou informações adicionais, entre em contato conosco através dos meios de comunicação disponíveis em nosso site.\n\nAo utilizar os serviços da Bom Doza, você concorda em cumprir estes Termos de Serviço. Agradecemos pela escolha dos nossos serviços e estamos comprometidos em proporcionar uma experiência de qualidade.",
      },
    ],
  },

  termsUse: {
    title: "Termo de Uso",
    descripition:
      "Ao acessar e utilizar os serviços oferecidos pela BomDoza, você concorda com os seguintes termos de uso. Leia atentamente este documento antes de continuar a utilizar nossos serviços.",
    textEnd:
      "Ao utilizar os serviços da Bom Doza, você concorda em cumprir estes Termos de Serviço. Agradecemos pela escolha dos nossos serviços e estamos comprometidos em proporcionar uma experiência de qualidade.",
    TermUse: [
      {
        title: "1. Uso dos Serviços",
        desc: "Você concorda em utilizar os serviços da Bom Doza de acordo com as leis e regulamentações locais. A Bom Doza reserva-se o direito de recusar serviços a qualquer pessoa por qualquer motivo a qualquer momento.",
      },
      {
        title: "2. Responsabilidades do Usuário",
        desc: "Ao utilizar nossos serviços, você concorda em fornecer informações precisas e atualizadas. Você é responsável por manter a confidencialidade de qualquer informação de login associada à sua conta.",
      },
      {
        title: "3. Conteúdo do Usuário",
        desc: "Ao fornecer conteúdo através de nossos serviços, você concede à Bom Doza uma licença mundial, não exclusiva, isenta de royalties, para usar, exibir e distribuir esse conteúdo de acordo com as configurações de privacidade que você escolher.",
      },
      {
        title: "4. Interrupção ou Modificação dos Serviços",
        desc: "A Bom Doza reserva-se o direito de interromper ou modificar seus serviços a qualquer momento, por qualquer motivo, com ou sem aviso prévio. Não nos responsabilizamos por qualquer interrupção ou modificação dos serviços.",
      },
      {
        title: "5. Privacidade",
        desc: "A política de privacidade da Bom Doza descreve como suas informações pessoais são coletadas, utilizadas e compartilhadas. Ao utilizar nossos serviços, você concorda com a coleta e uso de suas informações de acordo com nossa política de privacidade.",
      },
      {
        title: "6. Limitação de Responsabilidade",
        desc: "A Bom Doza não se responsabiliza por danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos resultantes do uso ou incapacidade de usar nossos serviços.",
      },
      {
        title: "7. Alterações nos Termos de Uso",
        desc: "A Bom Doza reserva-se o direito de atualizar ou modificar estes Termos de Uso a qualquer momento. As alterações serão comunicadas aos usuários através dos meios apropriados. O uso contínuo dos nossos serviços após qualquer alteração nos Termos de Uso constituirá aceitação dessas alterações.",
      },
      {
        title: "8. Contato",
        desc: "Para dúvidas, reclamações ou informações adicionais sobre estes Termos de Uso, entre em contato conosco através dos meios de comunicação disponíveis em nosso site.",
      },
    ],
  },

  service: {
    sideBar: [
      { title: "Lavagem de Carros", icon: "faCar", url: "/service/Car-Wash" },
      {
        title: "Lavagem de Mobílias",
        icon: "faChair",
        url: "/service/Furniture-Washing",
      },
      {
        title: "Lavagem de Tanques",
        icon: "faWater",
        url: "/service/Tank-Washing",
      },
    ],
    sideBarContact: {
      title: "Quer fazer uma lavagem profissional completa?",
      description: "Ligue para Bom Doza ou entre em contato",
      number: "99998999",
      button: "Contacte-nos",
    },
    CarWash: {
      title: "Lavagem de Carros",
      description: [
        "Na Bom Doza, entendemos que o seu veículo merece mais do que uma simples lavagem. Oferecemos serviços de lavagem de carros que vão além da superfície que proporciona cuidados meticulosos para manter o seu automóvel em sua melhor condição.",
        "Nossa equipe altamente qualificada utiliza técnicas avançadas e produtos de alta qualidade para garantir uma limpeza eficaz e duradoura. Desde a remoção de sujeira superficial até a atenção aos detalhes no interior, estamos comprometidos em oferecer resultados excepcionais.",
      ],
      textEnde:
        "Na Bom Doza, comprometemo-nos a oferecer um serviço de lavagem de móveis que vai além das expectativas. Confie-nos para revitalizar seus móveis e criar um ambiente que você se orgulha de chamar de seu. Agende agora a lavagem do seus móveis!",
      washType: {
        title: "Tipos de lavagem de carros e serviços da BomDoza",
        descripition:
          "Na Bom Doza, cada carro é tratado com a máxima atenção. Nossa lavagem detalhada inclui a limpeza minuciosa de todas as áreas, desde a carroceria até os cantos mais difíceis de alcançar. Utilizamos produtos que preservam a pintura e promovem um brilho duradouro.",
      },
      homeCleaning: {
        title: "Lavagem de carros no conforto da sua casa ou empresa",
        descripition:
          "Na Bom Doza, entendemos a importância da conveniência, e é por isso que oferecemos o serviço de lavagem de carros diretamente no local, seja na sua residência ou empresa. Com a nossa equipe especializada e equipamento móvel de última geração, proporcionamos uma solução de limpeza completa e eficiente, sem que você precise sair do lugar.",
      },
      washingSchedule: {
        title: "Agende a lavagem do seu carro sem sair de Casa:",
        descripition:
          "Não permita que a falta de tempo ou a logística impeçam você de manter seu carro impecável. Agende agora a lavagem do seu carro e desfrute da praticidade de receber serviços profissionais diretamente onde você está. Na BomDoza, estamos comprometidos em oferecer soluções de limpeza eficientes e personalizadas para atender às suas necessidades.",
      },

      services: [
        { type: "Lavagem externa da carroceria, limpeza de vidros e secagem;" },
        { type: "Limpeza de rodas, pneus e detalhes do interior;" },
        { type: "Limpeza com vapor para remover sujeira e manchas difíceis;" },
        {
          type: "Limpeza profunda do compartimento do motor para remover acúmulos de sujeira e graxa;",
        },
        {
          type: "Limpeza para tapetes, bancos, forros e  remoção manchas e odores;",
        },
        {
          type: "Serviços adaptados para veículos específicos, como caminhões, vans ou veículos de luxo.",
        },
        { type: "Bom Doza configurção de GPS" },
        {
          type: "Restauro de Plásticos, recupere a Beleza Original dos Seus Componentes Plásticos",
        },
      ],
    },

    FurnitureWashing: {
      title: "Lavagem de Mobílias",
      description: [
        "Na Bom Doza, entendemos que os seus móveis são mais do que simples peças de decoração - são parte integrante do seu espaço e refletem o seu estilo de vida. Apresentamos o nosso serviço especializado de Lavagem de Móveis, criado para renovar e revitalizar os seus estofados, tapetes e peças de mobiliário.",
        "Nossa equipe altamente qualificada utiliza técnicas avançadas e produtos de alta qualidade para garantir uma limpeza eficaz e duradoura. Desde a remoção de sujeira superficial até a atenção aos detalhes, estamos comprometidos em oferecer resultados excepcionais.",
      ],
      textEnde:
        "Escolha o tipo de lavagem que melhor atende às necessidades do seu veículo. Na Bom Doza, oferecemos uma variedade de opções para garantir que seu carro receba o cuidado específico que merece. Agende agora a lavagem do seu carro e experimente a excelência em cuidados automotivos!",
      washType: {
        title: "Tipos de lavagem de mobílias da Bom Doza",
        descripition:
          "Na Bom Doza, comprometemo-nos a oferecer um serviço de lavagem de móveis que vai além das expectativas. Confie-nos para revitalizar seus móveis e criar um ambiente que você se orgulha de chamar de seu.",
      },
      homeCleaning: {
        title: "Lavagem de móveis no conforto da sua casa ou empresa",
        descripition:
          "Na Bom Doza, estamos comprometidos em levar a excelência dos nossos serviços diretamente até você. Oferecemos o serviço de lavagem de móveis a domicílio, proporcionando a conveniência de revitalizar seus estofados e peças de mobiliário no conforto da sua casa ou empresa.",
      },
      washingSchedule: {
        title: "Agende a lavagem dos seus móveis sem sair de casa:",
        descripition:
          "Não permita que a manutenção dos seus móveis seja uma tarefa complicada. Agende agora a lavagem dos seus móveis e desfrute da praticidade de receber serviços profissionais diretamente onde você está. Na Bom Doza, estamos comprometidos em oferecer soluções de limpeza eficientes e adaptáveis às suas necessidades e preferências.",
      },
      services: [
        {
          type: "Limpeza avançadas para garantir uma limpeza profunda sem danificar os materiais sensíveis dos seus móveis;",
        },
        {
          type: "Remoção eficaz de manchas, odores indesejados e sujeira acumulada ao longo do tempo;",
        },
        {
          type: "Trabalhamos com uma variedade de materiais, incluindo tecidos, couro, madeira e outros, adaptando a nossa abordagem para cada tipo de superfície;",
        },
        {
          type: "Limpeza para tapetes;",
        },
        {
          type: "Cada peça de mobiliário é única, e o nosso atendimento é personalizado para atender às necessidades específicas de cada cliente",
        },
      ],
    },

    TankWashing: {
      title: "Lavagem de Tanques",
      description: [
        "Na Bom Doza, reconhecemos a importância de manter os tanques em condições ideais para garantir a qualidade e eficiência dos líquidos que armazenam. Apresentamos nosso serviço especializado de Lavagem de Tanques, dedicado a preservar a pureza e funcionalidade dos seus reservatórios.",
        "Nossa equipe altamente qualificada utiliza técnicas avançadas e produtos de alta qualidade para garantir uma limpeza eficaz e duradoura. Desde a remoção de sujeira superficial até a atenção aos detalhes no interior, estamos comprometidos em oferecer resultados excepcionais.",
      ],
      textEnde:
        "Na Bom Doza, comprometemo-nos a fornecer um serviço de lavagem de tanques que atenda às necessidades específicas dos nossos clientes. Agende agora a lavagem dos seus tanques e assegure a integridade dos seus líquidos armazenados.",
      washType: {
        title: "Tipos de lavagem de tanques e serviços da Bom Doza",
        descripition:
          "Não comprometa a qualidade dos seus processos ou a segurança dos seus líquidos. Agende agora a lavagem dos seus tanques e experimente o compromisso da Bom Doza em fornecer serviços excepcionais para manter seus sistemas em perfeito funcionamento",
      },
      homeCleaning: {
        title: "Lavagem de tanques no conforto da sua casa ou empresa",
        descripition:
          "A Bom Doza entende a importância da conveniência, e é por isso que oferecemos o serviço de lavagem de tanques diretamente no local, seja na sua residência ou empresa. Com a nossa equipe especializada e equipamento móvel de última geração, proporcionamos uma solução eficiente e sem complicações para a manutenção dos seus tanques.",
      },
      washingSchedule: {
        title: "Agende a lavagem dos seus tanques sem sair de casa:",
        descripition:
          "Não deixe a manutenção dos seus tanques para depois. Agende agora a lavagem dos seus tanques e aproveite a conveniência de receber serviços de alta qualidade no seu próprio local. Na Bom Doza, estamos comprometidos em fornecer soluções práticas para atender às suas necessidades de forma eficiente e profissional.",
      },
      services: [
        {
          type: "Serviços adicionais de proteção anti-corrosão para prolongar a vida útil dos tanques;",
        },
        {
          type: "Limpeza especializados para eliminar qualquer contaminação microbiológica;",
        },
        { type: "Limpeza com vapor para remover sujeira e manchas difíceis;" },
        {
          type: "Limpeza profunda do compartimento do motor para remover acúmulos de sujeira e graxa;",
        },
        {
          type: "Limpeza profunda, removendo sedimentos, resíduos e impurezas acumuladas nos tanques",
        },
      ],
    },

    pricing: {
    

    pricingCars:[
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
          name: "Básico",
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
          name: "Básico",
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
    ],

    pricingFurniture: [
        {
          id: "1",
          title: "Lavagem de Sofá",
          icon: "faCouch",
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
          title: "Lavagem de Tapetes",
          icon: "faRug",
          packages: [
            {
              name: "Básico",
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
      
      ],
    
    pricingTank: [
        {
          id: "1",
          title: "Taques Pequenos",
          icon: "faGlassWaterDroplet",
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
          title: "Taques Médios",
          icon: "faGlassWater",
          packages: [
            {
              name: "Básico",
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
          title: "Taques Grandes",
          icon: "faWater",
          packages: [
            {
              name: "Básico",
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
      ],
      
    },

      
  },

    "Welcome {{name}}": "Bem Vindo {{name}}",
  };
