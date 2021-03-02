import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Desarrollador Fullstack | Javier Ignacio',
  lang: 'es',
  description: 'Desarrollador Fullstack buscando oportunidades en Santiago de Chile y el Mundo.',
};

// HERO DATA
export const heroData = {
  title: 'Primero que nada... ',
  name: 'buenas tardes!',
  subtitle: 'Buscabas un Desarrollador Fullstack?',
  cta: 'Déjame presentarte a Javier',
};

// ABOUT DATA
export const aboutData = {
  img: 'avatarHigh.webp',
  paragraphOne:
    'El software se ha convertido en una necesidad para todos, independiente del rubro y el tamaño, la tecnología es el eje central en la administración de un negocio.',
  paragraphTwo:
    'EL aumento en el uso de tecnologías ha sido proporcional al número de desarrolladores que exiten en el mundo. Según un estudio realizado por la firma Evans Data Corporation, en el año 2019 había aproximadamente 26.4 millones de desarrolladores.',
  paragraphThree: 'Javier Quinteros es un desarrollador, pero no cualquier desarollador...',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Soporte técnico y capacitaciones',
    info:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Mantención y mejora continua',
    info:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Desarrollo de productos tecnológicos multiplataforma',
    info:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Estoy en busqueda de nuevos desafíos',
  btn: 'ENVÍAME UN CORREO',
  email: 'javier@nora.cl',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/javier-ignacio/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/loestoygozando',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jiaas/ignacioquinteros.cl',
    },
  ],
};
