// ─── Tipos ───────────────────────────────────────────────────────────────────

export interface Speaker {
  id: string;
  name: string;
  talk: string;
  image?: string;
}

export interface SpeakerGroup {
  title: string;
  items: Speaker[];
}

export interface ScheduleRow {
  time: string;
  speakers: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

// ─── Palestrantes ─────────────────────────────────────────────────────────────

export const speakerGroups: SpeakerGroup[] = [
  {
    title: 'Encerramento Especial',
    items: [
      { id: 'sp-mara', name: 'Mara Maravilha', talk: 'Encerramento do evento (17:20 às 18:30)' },
    ],
  },
  {
    title: 'Saúde, Estética e Longevidade',
    items: [
      { id: 'sp-raquel', name: 'Dra. Raquel Dosea', talk: 'A Beleza Rara da Mulher Empoderada' },
      { id: 'sp-carolinev', name: 'Dra. Caroline Vicente', talk: 'A autoestima quando eu me escolho com estratégia' },
      { id: 'sp-carolines', name: 'Dra. Caroline Smith', talk: 'Empoderamento Feminino: quando ciência, saúde íntima e longevidade caminham juntas' },
      { id: 'sp-christiane', name: 'Dra. Christiane Espíndola', talk: 'A nova era da Estética: tecnologia, bioestimuladores e longevidade com naturalidade' },
      { id: 'sp-aline', name: 'Dra. Aline Fioravanti', talk: 'Autocuidado estratégico: como o MFAT pode integrar beleza, saúde e rotina profissional' },
    ],
  },
  {
    title: 'Negócios, Tecnologia e Gestão',
    items: [
      { id: 'sp-leonardo', name: 'Leonardo Lima', talk: 'Como encher sua agenda de clientes vendendo todos os dias com IA' },
      { id: 'sp-italo', name: 'Italo Marcel', talk: 'Sua empresa não precisa vender mais, ela precisa vender melhor' },
      { id: 'sp-marcilio', name: 'Marcilio e Antonio', talk: 'Benefícios voltados a produtos e serviços relacionados à saúde da mulher e Reforma Tributária' },
      { id: 'sp-ramonny', name: 'Dra. Ramonny', talk: 'Importância da NRJ para empresas' },
    ],
  },
  {
    title: 'Mente, Genética e Equilíbrio',
    items: [
      { id: 'sp-guilherme', name: 'Dr. Guilherme Britto e Gabriela Benevides', talk: 'A mulher por trás da empreendedora de sucesso' },
      { id: 'sp-andre', name: 'Dr. Andre Yochi', talk: 'Seu DNA, seu maior patrimônio: como a genética pode transformar sua saúde e seu futuro' },
      { id: 'sp-gabriela', name: 'Dra. Gabriela Nabuco e Psicóloga Caroline Guimarães', talk: 'Saúde da mulher empreendedora: como crescer sem adoecer' },
    ],
  },
];

// ─── Programação ──────────────────────────────────────────────────────────────

export const shift0Rows: ScheduleRow[] = [
  { time: '09:00 - 10:00', speakers: 'Dra. Raquel Dosea, Dra. Caroline Vicente, Dra. Caroline Smith' },
  { time: '10:00 - 10:40', speakers: 'Marcilio e Antonio, Dra. Ramonny' },
  { time: '11:00 - 11:40', speakers: 'Dr. Guilherme Britto e Gabriela Benevides' },
  { time: '11:40 - 12:10', speakers: 'Dr. Andre Yochi' },
];

export const shift1Rows: ScheduleRow[] = [
  { time: '13:50 - 14:20', speakers: 'Leonardo Lima' },
  { time: '14:20 - 15:00', speakers: 'Dra. Christiane Espíndola' },
  { time: '15:00 - 15:40', speakers: 'Italo Marcel' },
  { time: '16:00 - 16:40', speakers: 'Dra. Gabriela Nabuco e Psicóloga Caroline Guimarães' },
  { time: '16:40 - 17:20', speakers: 'Dra. Aline Fioravanti' },
  { time: '17:20 - 18:30', speakers: 'Mara Maravilha (encerramento)' },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faqItems: FaqItem[] = [
  {
    q: 'Onde fica o Delmar Hotel?',
    a: '[ENDEREÇO COMPLETO], Aracaju/SE. O endereço completo e instruções de acesso serão publicados aqui assim que confirmados.',
  },
  {
    q: 'Terei onde estacionar?',
    a: '[INFORMAÇÃO DE ESTACIONAMENTO]. Detalhes de estacionamento no local serão adicionados aqui.',
  },
  {
    q: 'Como funciona a compra pelo Sympla?',
    a: 'Todos os botões de ingresso levam à página oficial do evento no Sympla, onde a compra é processada com segurança e você recebe a confirmação por e-mail.',
  },
  {
    q: 'Como escolho meu programa no ingresso Legacy?',
    a: 'No momento da compra do ingresso Master Legacy, você seleciona 1 dos 4 programas exclusivos: Harmonização Facial, Laser CO2 na face, Laser CO2 na parte íntima ou Gestão Empresarial.',
  },
  {
    q: 'Qual a diferença entre os ingressos?',
    a: 'Essential dá acesso completo à programação. Signature soma conforto, proximidade e um jantar exclusivo. Legacy acrescenta um programa de desenvolvimento individual escolhido por você.',
  },
];

// ─── Ingressos ────────────────────────────────────────────────────────────────

export const legacyPrograms = [
  { title: 'Harmonização Facial', speaker: 'Dra. Carol Vicente ou Dra. Raquel' },
  { title: 'Laser CO2 na Face', speaker: 'Dra. Cristiane Espíndola' },
  { title: 'Laser CO2 Íntimo', speaker: 'Dra. Caroline Smith' },
  { title: 'Gestão Empresarial', speaker: 'Italo Marcel' },
];

// ─── Audience cards ───────────────────────────────────────────────────────────

export const audienceCards = [
  '...tem um projeto parado no papel esperando o momento certo.',
  '...quer crescer profissionalmente, mas sente falta de novas referências.',
  '...quer estar perto de mulheres que também estão construindo algo.',
  '...sabe que precisa investir mais em si mesma.',
  '...está em busca de novas oportunidades e conexões.',
  '...sente que chegou a hora do próximo passo.',
];

// ─── Experiência cards ────────────────────────────────────────────────────────

export const experienceCards = [
  {
    title: 'Palestras & conteúdo',
    desc: 'Conhecimento direto de especialistas em negócios, saúde, tecnologia e liderança.',
    size: 'small',
  },
  {
    title: 'Networking estratégico',
    desc: 'Intervalos pensados para aproximar você de outras mulheres que também estão construindo algo, sem pressa, com propósito.',
    size: 'large',
  },
  {
    title: 'Área de expositores',
    desc: 'Marcas e serviços para descobrir e experimentar durante os intervalos.',
    size: 'small',
  },
  {
    title: 'Vivências práticas',
    desc: 'Momentos hands-on para colocar o que você aprender em movimento.',
    size: 'small',
  },
  {
    title: 'Kit & encontros especiais',
    desc: 'Kit oficial, brindes e sorteios dos patrocinadores ao longo do dia.',
    size: 'small',
  },
];

// ─── Pilares ──────────────────────────────────────────────────────────────────

export const pillars = [
  { label: 'Negócios', desc: 'Empreendedorismo e crescimento com estratégia.', offset: false },
  { label: 'Saúde', desc: 'Bem-estar, autoestima e cuidado com propósito.', offset: true },
  { label: 'Tecnologia', desc: 'Inovação e futuro a favor do seu negócio.', offset: false },
  { label: 'Liderança', desc: 'Posicionamento, coragem e protagonismo.', offset: true },
];
