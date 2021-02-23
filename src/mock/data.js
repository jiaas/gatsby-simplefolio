import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Javier Ignacio Quinteros | Desarrollador', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: 'Buscabas un Desarrollador Fullstack?', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Primero que nada... ',
  name: 'buenas tardes!',
  subtitle: 'Buscabas un Desarrollador Fullstack?',
  cta: 'NO hagas click aquí!',
};

// ABOUT DATA
export const aboutData = {
  img: 'avatarHigh.webp',
  paragraphOne:
    'Soy  un   Analista Programador   de   25 años,  nací  en  Chile  y actualmente vivo la comuna de Pedro Aguirre Cerda, Santiago.',
  paragraphTwo:
    'Desde  pequeño  me  apasiona  la  tecnología, dediqué  muchas de mis horas libres a aprender  de  forma  autodidacta  y fue el  año 2014  cuando tomé la decisión  de convertir  mi   hobbie en  una  carrera   profesional,  comenzando formalmente mis estudios en INACAP.',
  paragraphThree:
    'Lo que más me motiva es trabajar en la  construcción  productos tecnológicos  que tengan como principal objetivo ser un aporte en la calidad de vida de nuestros usuarios.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Soporte técnico y capacitaciones',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Mantención y mejora continua',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Desarrollo de productos tecnológicos multiplataforma',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Siempre estoy escuchando buenas ideas',
  btn: 'ENVÍAME UN CORREO',
  email: 'javier@nora.cl',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
