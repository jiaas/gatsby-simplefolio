import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Desarrollador Fullstack | Javier Ignacio',
  lang: 'es',
  description: 'Desarrollador Fullstack buscando oportunidades en Santiago de Chile y el Mundo.',
};

// HERO DATA
export const heroData = {
  title: 'Primero que nada... buenas tardes!',
  name: 'Desarrollador Fullstack?',
  subtitle: 'Buscabas un ',
  cta: 'Permíteme presentarme',
};

// ABOUT DATA
export const aboutData = {
  img: 'avatarHigh.webp',
  paragraphOne: 'CONSTRUYENDO SOLUCIONES TECNOLOGICAS',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'image1.png',
    title: 'Soporte técnico y capacitaciones',
    info:
      'El éxito de una solución tecnológica no es posible sin un enfoque holístico. Todos los stackholder deben saber como operar el SIA, y aún más importante, deben entender como sus acciones repercuten dentro del flujo del negocio. Como desarrollador tengo experiencia realizando capacitaciones tanto individuales como masivas, obteniendo excelentes resultados en poco tiempo. ',
  },
  {
    id: nanoid(),
    img: 'image2.png',
    title: 'Mantención y mejora continua',
    info:
      'Aunque Software debería ser sinónimo de Valor, no siempre es así, y es que un mal diseño, una mala implementación o la desactualización pueden representar el origen de un problema operativo que repercute negativamente en el flujo del negocio. Por este motivo es fundamental no dejar de medir, testear y optmizar.',
  },
  {
    id: nanoid(),
    img: 'image3.png',
    title: 'Gestión del desarrollo',
    info:
      'Como analista he aprendido a ver oportunidades en los "problemas", la experiencia con distintas metodologías de desarrollo me ha dado las herraminetas necesarias para planificar, organizar, dirigir y controlar el proceso de desarrollo, enfocado en el valor e impacto en el negocio.',
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
