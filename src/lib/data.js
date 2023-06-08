import poll from '../../public/poll.png'
import poll2 from '../../public/pollmobile.png'
import poll3 from '../../public/result.png'
import img11 from '../../public/wallnew1.png'
import wall1 from '../../public/wallnew1.png'
import wall2 from '../../public/wallnew2.png'
import wall3 from '../../public/wallnew3.png'
import wall4 from '../../public/components2.png'
import wall5 from '../../public/components3.png'
import wall6 from '../../public/components4.png'
import img2 from '../../public/make-desk-2.webp'
import img12 from '../../public/adv-desk-1-dark.webp'
import make1 from '../../public/make-desk-1.webp'
import make2 from '../../public/make-desk-2.webp'
import make3 from '../../public/make-desk-3.webp'
import make4 from '../../public/make-desk-4.webp'
import make5 from '../../public/varukorg.png'
import make6 from '../../public/kassa1.png'
import make7 from '../../public/kundexist.png'
import make8 from '../../public/kundnotexist.png'
import make9 from '../../public/frakt.png'
import make10 from '../../public/sok.png'
import make11 from '../../public/admin-1.webp'
import make12 from '../../public/admin-2.webp'
import make13 from '../../public/admin-3.webp'
import make14 from '../../public/admin-4.webp'
import make15 from '../../public/admin-5.webp'
import make16 from '../../public/admin-6.webp'
import make17 from '../../public/admin-7.webp'
import make18 from '../../public/admin-8.webp'
import make19 from '../../public/admin-9.webp'
import make20 from '../../public/admin-10.webp'
import adv1 from '../../public/adv-desk-1-dark.webp'
import adv2 from '../../public/adv-desk-1-light.webp'
import adv3 from '../../public/adv-desk-2-light.webp'
import adv4 from '../../public/adv-desk-3-light.webp'
import port1 from '../../public/port1.webp'
import port2 from '../../public/port2.webp'
import sad1 from '../../public/sad1.webp'
import sad2 from '../../public/sad2.webp'
import zeon1 from '../../public/zeon-desk-1.webp'
import zeon2 from '../../public/zeon-desk-2.webp'
import zeon3 from '../../public/zeon-desk-3.webp'
import zeon4 from '../../public/zeon-desk-6.webp'
import zeon5 from '../../public/zeon-desk-8.webp'

export const projects = [
  {
    author: 'Angelica Moberg Skoglund',
    github: '',
    website: '',
    slug: 'poll',
    image: poll,
    keys: ['Next.js', 'Typescript', 'MongoDB', 'NextAuth', 'Tailwind'],
    date: '2023-05-28',
    title: 'Poll / Survey',
    shortDescription:
      'Recently started hobby project with only figma skisses atm',
    description:
      'Recently started hobby project with only figma skisses atm. The idea is to give a company very easy tools to eg follow up a question at different departments each week.',
    sections: [
      {
        title: '',
        subTitle: '',
        description: '',
        images: [
          { src: poll, alt: 'bild på projekt' },
          { src: poll3, alt: 'bild på projekt' },
          { src: poll2, alt: 'bild på projekt' },
        ],
        video: { format: '', src: '' },
      },
    ],
  },
  {
    author: 'Angelica Moberg Skoglund',
    github: '',
    website: '',
    slug: 'boilerplate-ecommerce',
    image: img11,
    keys: ['Next.js', 'TypeScript', 'BigCommerce', 'Tailwind', 'GraphQL'],
    date: '2023-05-15',
    title: 'Boilerplate E-commerce',
    shortDescription:
      'Project for Wallmander & Co. Created a Boilerplate with Next.js for future E- commerce use.',
    description:
      'Project for Wallmander & Co. Created a Boilerplate with Next.js for future E- commerce use. I integrated BigCommerce and created dynamic component blocks suited to be customized from WordPress. ',
    sections: [
      {
        title: '',
        subTitle: '',
        description: '',
        images: [
          { src: wall1, alt: 'bild på projekt' },
          { src: wall2, alt: 'bild på projekt' },
          { src: wall3, alt: 'bild på projekt' },
        ],
        video: { format: '', src: '' },
      },
      {
        title: 'Extra',
        subTitle: 'Creation of dynamic components interacting with CMS',
        description:
          'Here´s some examples from the cooperation between me (creating the components in Next.js) and their developer creating the conditions in Wordpress. The blocks are created based on their designer´s wireframe.',
        images: [
          { src: wall4, alt: 'bild på projekt' },
          { src: wall5, alt: 'bild på projekt' },
          { src: wall6, alt: 'bild på projekt' },
        ],
        video: { format: '', src: '' },
      },
    ],
  },
  {
    author: 'Angelica Moberg Skoglund',
    github: 'https://github.com/totaldekadens/MakeupByS',
    website: '',
    slug: 'master-thesis',
    image: img2,
    keys: ['Next.js', 'TypeScript', 'Mantine.dev', 'MongoDB', 'Mongoose'],
    date: '2023-01-28',
    title: 'Master Thesis',
    shortDescription:
      'MakeUpByS is a new and innovative e-commerce platform that offers makeup products categorized by seasons.',
    description:
      'MakeUpByS is a new and innovative e-commerce platform that offers makeup products categorized by seasons. The unique selling point of this website is the quiz that helps customers determine which season they match the best with, and then suggests makeup products that will suit their specific features.',
    description2:
      'I created the whole backend, the quiz, the cart, the checkout, the admin panel with order and product handling, the search function, the category page and the product page. ',
    sections: [
      {
        title: '',
        subTitle: '',
        description: '',
        images: [
          { src: make1, alt: 'bild på projekt' },
          { src: make4, alt: 'bild på projekt' },
          { src: make2, alt: 'bild på projekt' },
          { src: make3, alt: 'bild på projekt' },
          { src: make5, alt: 'bild på projekt' },
        ],
        video: { format: '', src: '' },
      },
      {
        title: 'Checkout',
        subTitle: '',
        description: '',
        images: [{ src: make6, alt: 'bild på projekt' }],
        video: { format: '', src: '' },
      },
      {
        title: '',
        subTitle: 'If customer exist',
        description: '',
        images: [{ src: make7, alt: 'bild på projekt' }],
        video: { format: '', src: '' },
      },
      {
        title: '',
        subTitle: 'If customer does not exist',
        description: '',
        images: [{ src: make8, alt: 'bild på projekt' }],
        video: { format: '', src: '' },
      },
      {
        title: '',
        subTitle: 'Courrier',
        description: '',
        images: [{ src: make9, alt: 'bild på projekt' }],
        video: { format: '', src: '' },
      },
      {
        title: '',
        subTitle: 'Search',
        description: '',
        images: [{ src: make10, alt: 'bild på projekt' }],
        video: { format: '', src: '' },
      },
      {
        title: 'Admin panel',
        subTitle: '',
        description: '',
        images: [
          { src: make11, alt: 'bild på projekt' },
          { src: make12, alt: 'bild på projekt' },
          { src: make13, alt: 'bild på projekt' },
          { src: make14, alt: 'bild på projekt' },
          { src: make15, alt: 'bild på projekt' },
          { src: make16, alt: 'bild på projekt' },
          { src: make17, alt: 'bild på projekt' },
          { src: make18, alt: 'bild på projekt' },
          { src: make19, alt: 'bild på projekt' },
          { src: make20, alt: 'bild på projekt' },
        ],
        video: { format: '', src: '' },
      },
    ],
  },

  {
    author: 'Angelica Moberg Skoglund',
    github: '',
    website: 'https://business.adventurehero.se/',
    slug: 'adventure-hero',
    image: img12,
    keys: ['Next.js', 'TypeScript', 'Mantine.dev'],
    date: '2022-10-27',
    title: 'Business Adventure Hero',
    shortDescription:
      'Built a landing page from scratch for their booking site/service Adventure Hero to attract more users.',
    description:
      'Built a landing page from scratch for their booking site/service Adventure Hero to attract more users. I did this together with two other LIAs. We built the page with Next.js and Mantine (css library)',
    sections: [
      {
        title: '',
        subTitle: '',
        description: '',
        images: [
          { src: adv1, alt: 'bild på projekt' },
          { src: adv2, alt: 'bild på projekt' },
          { src: adv3, alt: 'bild på projekt' },
          { src: adv4, alt: 'bild på projekt' },
        ],
        video: { format: '', src: '' },
      },
    ],
  },
  {
    author: 'Angelica Moberg Skoglund',
    github: 'https://github.com/totaldekadens/portfolio-assignment',
    website: '',
    slug: 'portfolio-assignment',
    image: port1,
    keys: ['React.js', 'TypeScript', 'Node.js', 'Mantine.dev'],
    date: '2022-12-22',
    title: 'Portfolio assignment',
    shortDescription: '',
    description:
      'Group project done with focus on working with agile methods. I created the member page, profile page and the whole backend part.',
    sections: [
      {
        title: '',
        subTitle: '',
        description: '',
        images: [
          { src: port1, alt: 'bild på projekt' },
          { src: port2, alt: 'bild på projekt' },
        ],
        video: { format: '', src: '' },
      },
    ],
  },
  {
    author: 'Angelica Moberg Skoglund',
    github: 'https://github.com/totaldekadens/Wordpress---Webshop',
    website: '',
    slug: 'sad-active',
    image: sad1,
    keys: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
    date: '2022-05-04',
    title: 'SAD Active E-Commerce',
    shortDescription: '',
    description:
      'Group project focused on creating a child theme in Wordpress. Please go to repo for further info.',
    sections: [
      {
        title: '',
        subTitle: '',
        description: '',
        images: [
          { src: sad1, alt: 'bild på projekt' },
          { src: sad2, alt: 'bild på projekt' },
        ],
        video: { format: '', src: '' },
      },
    ],
  },
  {
    author: 'Angelica Moberg Skoglund',
    github: 'https://github.com/totaldekadens/Webshop',
    website: '',
    slug: 'zeon-milo',
    image: zeon1,
    keys: ['JavaScript', 'PHP', 'MySQL'],
    date: '2022-03-03',
    title: 'ZEON MILO E-Commerce',
    shortDescription: '',
    description:
      'Group project focused on creating a complete full stack project. My focus was mainly the backend part with MySQL and the REST-API. But I also did the category page, the cart and the checkout.',
    sections: [
      {
        title: '',
        subTitle: '',
        description: '',
        images: [
          { src: zeon1, alt: 'bild på projekt' },
          { src: zeon2, alt: 'bild på projekt' },
          { src: zeon3, alt: 'bild på projekt' },
          { src: zeon4, alt: 'bild på projekt' },
          { src: zeon5, alt: 'bild på projekt' },
        ],
        video: { format: '', src: '' },
      },
    ],
  },
]
