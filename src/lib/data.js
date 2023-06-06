import designSystem from '../../public/poll.png'
import img1 from '../../public/make-desk-1.webp'
import img11 from '../../public/wallnew1.png'
import img2 from '../../public/make-desk-2.webp'
import img12 from '../../public/adv-desk-1-dark.webp'

export const projects = [
  {
    author: 'Angelica Moberg Skoglund',
    slug: 'poll',
    image: designSystem,
    keys: ['Next.js', 'Typescript', 'MongoDB', 'NextAuth', 'Tailwind'],
    date: '2023-05-28',
    title: 'Poll / Survey',
    shortDescription:
      'Recently started hobby project with only figma skisses atm',
    description:
      'Recently started hobby project with only figma skisses atm. The idea is to give a company very easy tools to eg follow up a question at different departments each week.',
  },
  {
    author: 'Angelica Moberg Skoglund',
    slug: 'boilerplate-ecommerce',
    image: img11,
    keys: ['Next.js', 'TypeScript', 'BigCommerce', 'Tailwind', 'GraphQL'],
    date: '2023-05-15',
    title: 'Boilerplate E-commerce',
    shortDescription:
      'Project for Wallmander & Co. Created a Boilerplate with Next.js for future E- commerce use.',
    description:
      'Project for Wallmander & Co. Created a Boilerplate with Next.js for future E- commerce use. I integrated BigCommerce and created dynamic component blocks suited to be customized from WordPress.',
  },
  {
    author: 'Angelica Moberg Skoglund',
    slug: 'master-thesis',
    image: img2,
    keys: ['Next.js', 'TypeScript', 'Mantine.dev', 'MongoDB', 'Mongoose'],
    date: '2023-01-28',
    title: 'Master Thesis',
    shortDescription:
      'MakeUpByS is a new and innovative e-commerce platform that offers makeup products categorized by seasons.',
    description:
      'MakeUpByS is a new and innovative e-commerce platform that offers makeup products categorized by seasons. The unique selling point of this website is the quiz that helps customers determine which season they match the best with, and then suggests makeup products that will suit their specific features.',
  },

  {
    author: 'Angelica Moberg Skoglund',
    slug: 'adventure-hero',
    image: img12,
    keys: ['Next.js', 'TypeScript', 'Mantine.dev'],
    date: '2022-10-27',
    title: 'Business Adventure Hero',
    shortDescription:
      'Built a landing page from scratch for their booking site/service Adventure Hero to attract more users.',
    description:
      'Built a landing page from scratch for their booking site/service Adventure Hero to attract more users. I did this together with two other LIAs. We built the page with Next.js and Mantine (css library)',
  },
]
