export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  fullStory: string;
  category: string;
  technologies: string[];
  features: string[];
  image?: string;
  previewUrl?: string;
  githubUrl?: string;
  highlights: string[];
  mockupType: 'browser' | 'dashboard' | 'mobile' | 'code';
}

export interface SkillCategory {
  title: string;
  type: 'tech' | 'soft';
  items: {
    name: string;
    level: string;
    description: string;
    iconName: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
  type: 'collab' | 'web' | 'academic' | 'initiative';
}

export const PORTFOLIO_INFO = {
  name: 'Ana Paula',
  shortTitle: 'PORTFÓLIO PESSOAL',
  headline: 'Olá, eu sou\nAna Paula.',
  role: 'Graduanda em Ciência da Computação & Desenvolvedora',
  institution: 'Graduação em Ciência da Computação',
  course: 'Bacharelado em Ciência da Computação',
  email: 'anapaulaknzdeon@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  status: 'Disponível para projetos acadêmicos e oportunidades',
  year: '2026',
  bioIntro:
    'Sou graduanda em Ciência da Computação e desenvolvedora em formação, com foco em tecnologia, desenvolvimento web, engenharia de software e experiência do usuário.',
  bioComplement:
    'Este portfólio reúne alguns dos projetos, experiências, conhecimentos e aprendizados que fazem parte da minha trajetória acadêmica e profissional.',
  aboutParagraphs: [
    'Olá! Meu nome é Ana Paula e atualmente estou cursando a graduação em Ciência da Computação.',
    'Minha trajetória na tecnologia começou com a curiosidade de entender como sistemas e softwares funcionavam por trás da interface. Com o tempo, essa curiosidade se transformou em paixão por desenvolvimento web, arquitetura de software e design de interação.',
    'Busco constantemente aprofundar meus conhecimentos acadêmicos e práticos, criando soluções digitais que unam bom design, código eficiente, robustez e facilidade de uso.'
  ],
  portfolioPurpose: [
    'Este portfólio foi criado para documentar e apresentar minha evolução na área de tecnologia, reunindo projetos desenvolvidos durante meus estudos e experiências práticas.',
    'Aqui você encontrará projetos práticos, pesquisas acadêmicas, habilidades técnicas e competências comportamentais que venho construindo ao longo da minha jornada.',
    'Mais do que apenas códigos, este espaço reflete minha dedicação em criar interfaces funcionais, acessíveis e pensadas para proporcionar boas experiências aos usuários.'
  ]
};

export const NARRATIVE_STEPS = [
  { id: 'home', number: '01', label: 'Quem sou', targetId: 'home' },
  { id: 'oque-faco', number: '02', label: 'O que faço', targetId: 'oque-faco' },
  { id: 'projetos', number: '03', label: 'O que já desenvolvi', targetId: 'projetos' },
  { id: 'pesquisa', number: '04', label: 'O que estou estudando', targetId: 'pesquisa' },
  { id: 'objetivos', number: '05', label: 'Para o futuro', targetId: 'objetivos' }
];

export const WHAT_I_DO = [
  {
    id: 'web',
    title: 'Desenvolvimento Web',
    description: 'Criação de interfaces modernas, responsivas e interativas utilizando tecnologias atuais.',
    details: 'Estruturação semântica, arquitetura componentizada em React e Next.js, design adaptável a telas móveis e desktop.',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3']
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'Planejamento e desenho de interfaces focadas em usabilidade, clareza visual e experiência do usuário.',
    details: 'Construção de fluxos intuitivos, prototipagem, hierarquia tipográfica precisa, teoria das cores e microinterações funcionais.',
    techs: ['Design Centrado no Usuário', 'Figma', 'Prototipagem', 'Design Systems']
  },
  {
    id: 'tech',
    title: 'Tecnologia & Boas Práticas',
    description: 'Aplicação de boas práticas de programação, versionamento e estruturação de software.',
    details: 'Código limpo, controle de versão rigoroso com Git e GitHub, padronização e mentalidade voltada para manutenibilidade.',
    techs: ['Git', 'GitHub', 'Clean Code', 'TypeScript', 'Estruturas de Dados']
  },
  {
    id: 'research',
    title: 'Pesquisa Acadêmica',
    description: 'Investigação de temas relacionados à usabilidade e acessibilidade digital no desenvolvimento de software.',
    details: 'Estudo aprofundado das diretrizes internacionais WCAG e critérios de Interação Humano-Computador para democratizar o acesso à web.',
    techs: ['IHC', 'Acessibilidade Digital', 'Diretrizes WCAG', 'Inclusão Digital']
  }
];

export const SKILLS_DATA = {
  tech: [
    { name: 'HTML5', category: 'Estrutura', level: 'Avançado', desc: 'Semântica avançada, acessibilidade nativa, SEO e conformidade com os padrões web.' },
    { name: 'CSS3 / Tailwind', category: 'Estilização', level: 'Avançado', desc: 'Layouts modernos com Flexbox/Grid, responsividade fluida, temas e animações.' },
    { name: 'JavaScript', category: 'Linguagem', level: 'Intermediário/Avançado', desc: 'Manipulação de DOM, programação assíncrona, ES6+, modularidade e APIs.' },
    { name: 'TypeScript', category: 'Linguagem', level: 'Intermediário', desc: 'Tipagem estática segura, contratos de dados rigorosos e código escalável.' },
    { name: 'React', category: 'Framework / Lib', level: 'Intermediário', desc: 'Hooks modernos, arquitetura de componentes, gerenciamento de estado e ciclo de vida.' },
    { name: 'Next.js', category: 'Framework', level: 'Intermediário', desc: 'Renderização moderna, roteamento dinâmico e otimização de performance.' },
    { name: 'Git & GitHub', category: 'Ferramentas', level: 'Intermediário', desc: 'Controle de versão, branches, commits semânticos e colaboração em repositórios.' },
    { name: 'Firebase', category: 'Backend / Cloud', level: 'Prática inicial', desc: 'Autenticação, Firestore NoSQL e deploy de aplicações estáticas.' }
  ],
  soft: [
    { name: 'Comunicação', desc: 'Clareza na troca de ideias técnicas e documentação precisa de projetos.' },
    { name: 'Trabalho em Equipe', desc: 'Colaboração ativa, escuta empática e compromisso coletivo com entregas.' },
    { name: 'Criatividade', desc: 'Busca por soluções engenhosas e alternativas inovadoras para problemas de UI.' },
    { name: 'Organização', desc: 'Planejamento estruturado de prazos, estrutura de pastas e divisão de tarefas.' },
    { name: 'Resolução de Problemas', desc: 'Raciocínio lógico estruturado para investigar bugs e contornar desafios.' },
    { name: 'Proatividade', desc: 'Iniciativa contínua para explorar novas tecnologias e aprimorar entregas.' },
    { name: 'Adaptabilidade', desc: 'Capacidade de aprender rapidamente novos ecossistemas e se ajustar a mudanças.' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'rota-do-codigo',
    number: '01',
    title: 'Rota do Código',
    subtitle: 'Projeto Acadêmico • Ensino de Programação',
    category: 'Desenvolvimento Web & Educação',
    description: 'Site pensado para promover o projeto acadêmico da Rota do Código, no qual ensina programação para crianças e adolescentes.',
    fullStory: 'A Rota do Código é um site pensado especialmente para promover o projeto acadêmico da Rota do Código, no qual ensina programação para crianças e adolescentes. O portal foi desenvolvido para divulgar a metodologia de ensino, as oficinas práticas e conectar jovens estudantes, escolas e a comunidade ao universo da tecnologia e do pensamento computacional.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Algoritmos'],
    features: [
      'Trilhas interativas com níveis progressivos de raciocínio lógico',
      'Atividades práticas e dinâmicas com feedback visual em tempo real',
      '+200 alunos impactados e 6+ escolas parceiras integradas',
      'Interface moderna, colorida e 100% voltada ao engajamento jovem'
    ],
    highlights: [
      '+200 Alunos Impactados',
      '6+ Escolas Parceiras',
      '100% Prático e Lúdico'
    ],
    mockupType: 'code',
    image: '/projects/rota-do-codigo.jpg',
    githubUrl: 'https://github.com/anapaula-cc/rota-do-codigo'
  },
  {
    id: 'cajoo',
    number: '02',
    title: 'CAJOO',
    subtitle: 'Centro Acadêmico de Ciência da Computação • IFC',
    category: 'Sistemas Web & Comunidade Acadêmica',
    description: 'Site pensado para promover o Centro Acadêmico de Ciência da Computação do IFC (Instituto Federal Catarinense).',
    fullStory: 'O CAJOO é um site pensado especialmente para promover o Centro Acadêmico de Ciência da Computação do IFC (Instituto Federal Catarinense), conectando e apoiando os estudantes com divulgação de eventos, recursos acadêmicos, avisos e iniciativas que fortalecem a comunidade acadêmica.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Central de comunicados oficiais e mural de avisos para estudantes',
      'Repositório de recursos acadêmicos, horários e materiais de apoio',
      'Galeria de fotos de eventos, workshops e integração acadêmica',
      'Módulo restrito "Área do CA" para gestão interna de iniciativas'
    ],
    highlights: [
      'Portal Oficial da Computação',
      'Central de Recursos Acadêmicos',
      'Comunidade Ativa & Eventos'
    ],
    mockupType: 'dashboard',
    image: '/projects/cajoo.png',
    githubUrl: 'https://github.com/anapaula-cc/cajoo-system',
    previewUrl: 'https://cajoo.fsw-ifc.brdrive.cloud'
  },
  {
    id: 'blackshield',
    number: '03',
    title: 'Blackshield',
    subtitle: 'Projeto Fictício • Empresa de Cibersegurança',
    category: 'Cibersegurança & Desenvolvimento Web',
    description: 'Projeto fictício de uma empresa de cibersegurança, focado em apresentação institucional, soluções de proteção digital e solidez técnica.',
    fullStory: 'O Blackshield foi desenvolvido como um projeto fictício para uma empresa de cibersegurança. A proposta explora a criação de uma presença digital com forte apelo visual tecnológico, apresentando soluções de blindagem de dados, defesa cibernética, boas práticas de segurança de software e arquitetura robusta.',
    technologies: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS'],
    features: [
      'Módulos de autenticação com tratamento seguro de credenciais',
      'Controle de níveis de acesso e visualização por perfil',
      'Logs e auditoria de atividades com registros detalhados',
      'Interface moderna no estilo terminal/segurança tech'
    ],
    highlights: [
      'Tratamento defensivo de erros no front-end',
      'Políticas de dados protegidas',
      'Arquitetura escalável em TypeScript'
    ],
    mockupType: 'browser',
    image: '/projects/blackshield.png',
    githubUrl: 'https://github.com/anapaula-cc/blackshield'
  },
  {
    id: 'projeto-academia',
    number: '04',
    title: 'Projeto de Academia',
    subtitle: 'Projeto Comercial • Personal Trainer',
    category: 'Aplicação Web Comercial • Projeto Vendido',
    description: 'Projeto real desenvolvido sob medida para uma personal trainer e comercializado com sucesso, focado em consultoria fitness e captação de alunos.',
    fullStory: 'Este foi um projeto real encomendado e vendido para uma personal trainer profissional. A aplicação foi desenvolvida sob medida para posicionar sua marca pessoal no digital, divulgar planos de consultoria, apresentar programas de treino e otimizar a captação e contato de novos alunos com uma interface ágil e mobile-first.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'LocalStorage'],
    features: [
      'Grade interativa de modalidades, horários e instrutores',
      'Calculadora de metas e simulador de planos de treino',
      'Área do aluno com acompanhamento visual de progresso',
      'Layout responsivo otimizado para uso durante os treinos'
    ],
    highlights: [
      'Carregamento instantâneo e performance leve',
      'Design de alta energia visual sem perder a clareza',
      'Acessibilidade em botões de toque para dispositivos móveis'
    ],
    mockupType: 'mobile',
    image: '/projects/academia.png'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'collab',
    title: 'Projetos Colaborativos',
    organization: 'Equipes Multidisciplinares & Hackathons',
    period: '2024 — Presente',
    description: 'Atuação ativa em equipes no desenvolvimento colaborativo de softwares. Prática diária de versionamento em Git, code reviews, divisão de sprints e comunicação assertiva para atingir objetivos conjuntos.',
    tags: ['Git Colaborativo', 'Trabalho em Equipe', 'Code Review', 'Scrum/Kanban'],
    type: 'collab'
  },
  {
    id: 'web-dev',
    title: 'Desenvolvimento de Sites e Aplicações',
    organization: 'Projetos Práticos & Extensão',
    period: '2024 — 2026',
    description: 'Planejamento e codificação de páginas web e sistemas completos, desde o desenho da interface (UI/UX) até a implementação final em HTML, CSS, JavaScript e React com design responsivo.',
    tags: ['Front-End', 'React', 'Next.js', 'UI/UX Design', 'Responsividade'],
    type: 'web'
  },
  {
    id: 'academic',
    title: 'Projetos Acadêmicos no IFC',
    organization: 'Instituto Federal Catarinense — Campus Videira',
    period: '2023 — 2026',
    description: 'Desenvolvimento contínuo de sistemas acadêmicos no curso Técnico Integrado em Informática, aplicando conceitos de algoritmos, banco de dados, redes e arquitetura de software.',
    tags: ['IFC Videira', 'Lógica & Algoritmos', 'Banco de Dados', 'Arquitetura'],
    type: 'academic'
  },
  {
    id: 'initiatives',
    title: 'Participação em Iniciativas Tecnológicas',
    organization: 'Comunidade & Mulher Digital',
    period: '2025 — 2026',
    description: 'Engajamento em movimentos de incentivo a mulheres na tecnologia e eventos do ecossistema de inovação, fortalecendo a representatividade e a troca de conhecimentos com a comunidade técnica.',
    tags: ['Mulher Digital 2026', 'Comunidade Tech', 'Networking', 'Inclusão'],
    type: 'initiative'
  }
];

export const RESEARCH_DATA = {
  title: 'Usabilidade e Acessibilidade Digital',
  tag: 'Pesquisa Acadêmica em Andamento',
  summary:
    'A pesquisa analisa como princípios de IHC (Interação Humano-Computador), usabilidade e acessibilidade podem ser aplicados no desenvolvimento de interfaces digitais mais inclusivas.',
  institution: 'Instituto Federal Catarinense — Campus Videira',
  focusAreas: [
    {
      title: 'IHC (Interação Humano-Computador)',
      desc: 'Compreensão de como os usuários interagem cognitivamente com os sistemas para reduzir o esforço mental e maximizar a eficiência.'
    },
    {
      title: 'Usabilidade e Heurísticas',
      desc: 'Aplicação prática de prevenção de erros, consistência visual, visibilidade do status do sistema e liberdade de controle.'
    },
    {
      title: 'Acessibilidade Digital',
      desc: 'Garantia de que pessoas com deficiências visuais, motoras ou cognitivas possam navegar de forma autônoma na web.'
    },
    {
      title: 'Diretrizes WCAG (W3C)',
      desc: 'Implementação rigorosa dos 4 pilares: Perceptível, Operável, Compreensível e Robusto, visando conformidade técnica.'
    }
  ]
};

export const EDUCATION_DATA = [
  {
    title: 'Graduação em Ciência da Computação',
    institution: 'Ensino Superior',
    period: 'Em andamento',
    description:
      'Formação acadêmica abrangendo fundamentos da computação, algoritmos avançados, estruturas de dados, engenharia de software, banco de dados, arquitetura de computadores e desenvolvimento de sistemas.'
  },
  {
    title: 'Técnico Integrado em Informática',
    institution: 'Instituto Federal Catarinense (IFC) — Campus Videira',
    period: 'Formação Técnica',
    description:
      'Formação sólida em desenvolvimento de software, lógica de programação, arquitetura de computadores, redes e desenvolvimento de interfaces web.'
  },
  {
    title: 'Mulher Digital (2026)',
    institution: 'Programa de Capacitação & Tecnologia',
    period: '2026',
    description:
      'Iniciativa voltada ao desenvolvimento acelerado, liderança e capacitação técnica de mulheres na área de tecnologia, estimulando projetos de impacto social e inovação.'
  }
];

export const LEARNING_SOFT_SKILLS = [
  {
    title: 'Comunicação',
    desc: 'Clareza na troca de ideias e documentação de projetos técnicos, facilitando o alinhamento com colegas e usuários.'
  },
  {
    title: 'Colaboração',
    desc: 'Atuação empática em equipes multidisciplinares, construindo soluções compartilhadas com respeito e cooperação.'
  },
  {
    title: 'Criatividade',
    desc: 'Investigação de abordagens originais para desafios de usabilidade e resolução lógica de problemas de código.'
  },
  {
    title: 'Adaptabilidade',
    desc: 'Entusiasmo e agilidade em assimilar novas tecnologias, metodologias ágeis e demandas de projetos dinâmicos.'
  }
];

export const FUTURE_GOALS = [
  {
    category: 'Desenvolvimento Web',
    goal: 'Aprofundar o domínio no ecossistema moderno front-end (React, Next.js e TypeScript) e arquiteturas full-stack eficientes.'
  },
  {
    category: 'UI/UX Design',
    goal: 'Criar interfaces de alto padrão com microinterações refinadas, testes com usuários reais e design systems consistentes.'
  },
  {
    category: 'Acessibilidade Digital',
    goal: 'Tornar a acessibilidade um pilar inegociável em todos os produtos digitais desenvolvidos, promovendo inclusão real.'
  },
  {
    category: 'Pesquisa & Academia',
    goal: 'Publicar estudos e artigos científicos na área de Interação Humano-Computador, contribuindo com a comunidade acadêmica.'
  },
  {
    category: 'Mercado de Trabalho',
    goal: 'Ingressar em equipes de desenvolvimento onde possa aprender, colaborar em projetos de grande relevância e gerar valor social.'
  }
];
