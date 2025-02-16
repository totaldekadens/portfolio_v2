import logoAtria from '@/images/logos/atria.png'
import logoH5 from '@/images/logos/h5.png'
import logoWallmander from '@/images/logos/wallmander.png'
import logoWallmanderWhite from '@/images/logos/logo-white-transparant.png'
import logoIngram from '@/images/logos/ingram.png'
import logoVGR from '@/images/logos/vglogo.png'
import logoBigcommerceBlack from '@/images/logos/bigcommerce_black.png'
import logoBigcommerceWhite from '@/images/logos/bigcommerce_white.png'
import logoMantinedev from '@/images/logos/mantinedev.png'
import logoMaterialui from '@/images/logos/materialui.png'
import logoMicrosoftsqlserver from '@/images/logos/microsoftsqlserver.png'
import logoMongodb from '@/images/logos/mongodb.png'
import logoMysql from '@/images/logos/mysql.png'
import logoNodejs from '@/images/logos/nodejs.png'
import logoPhp from '@/images/logos/php.png'
import logoReact from '@/images/logos/react.png'
import logoScrum from '@/images/logos/scrum.png'
import logoStripe from '@/images/logos/stripe.png'
import logoTailwind from '@/images/logos/tailwind.png'
import logoTypescript from '@/images/logos/typescript.png'
import logoWoocommerce from '@/images/logos/woocommerce.png'
import logoWordpress from '@/images/logos/wordpress.png'
import logoCypressWhite from '@/images/logos/cypress_white.png'
import logoCypressBlack from '@/images/logos/cypress_black.png'
import logoNextjsWhite from '@/images/logos/nextjs_white.png'
import logoNextjsBlack from '@/images/logos/nextjs_black.png'
import logoGit from '@/images/logos/git.png'
import logoExtjs from '@/images/logos/extjs.png'
import { GitHubIcon, LinkedInIcon } from '@/components/Icons'

// Will be moved to MongoDB eventually

export interface Merit {
  date: string
  title: string
  description: string
}

export interface MeritProps {
  slug: string
  title: string
  intro: string
  merits: Merit[]
}

export const meritPage: MeritProps = {
  slug: 'merits',
  title: 'Merits / Resumé',
  intro: '',
  merits: [
    {
      date: '2023-05-17',
      title: 'Best Master Thesis in the class',
      description:
        'Angelica and Jacob have not only developed an online makeup store with an innovative concept, but an entire E-commerce platform with an in-house developed backend. Almost 20,000 lines of code in, among other things, Next.js and Mantine.dev resulted in an expandable web production and a very good foundation to stand on. The technologies along with MongoDB have been applied in the best possible way. Angelica and Jacob demonstrate the ability to go from idea to finished product in a short time.',
    },
    {
      date: '2023-05-17',
      title:
        'Graduated in Web development with focus on E-commerce at Medieinstitutet AB Göteborg',
      description: 'With VG in all courses',
    },
  ],
}

export const resume = [
  {
    company: 'Västra Götalandsregionen',
    title: 'System Developer',
    logoDark: logoVGR,
    logoLight: logoVGR,
    start: '2023',
    end: '',
  },
  {
    company: 'Wallmander & Co',
    title: 'Web Developer - Internship',
    logoDark: logoWallmanderWhite,
    logoLight: logoWallmander,
    start: '2023',
    end: '2023',
  },
  {
    company: 'H5 Förnyelsebyrå AB',
    title: 'Web Developer - Internship',
    logoDark: logoH5,
    logoLight: logoH5,
    start: '2022',
    end: '2022',
  },
  {
    company: 'Atria Sweden',
    title: 'Production Coordinator',
    logoDark: logoAtria,
    logoLight: logoAtria,
    start: '2021',
    end: '2021',
  },
  {
    company: 'Ingram Micro Logistics AB',
    title: 'Group leader / Specialist ',
    logoDark: logoIngram,
    logoLight: logoIngram,
    start: '2011',
    end: '2021',
  },
]

export const aboutPage = {
  slug: 'about',
  title: 'Hello hello! :)',
  intro:
    'Welcome to my profile! This was previously my portfolio site that I used while searching for my first job as a developer. Please note that this site will no longer be updated.',
  sections: [
    {
      header: 'Teamwork and leadership',
      text: 'I played soccer until I turned 23 so I’m a team player in the root. We do it together and complement each other, that’s my mindset and how I like to work.',
    },
    {
      header: '',
      text: 'In total I have had a leadership role in almost 7 years. I love being there for people and help them grow. My ambition is not to be a leader again, but I think it’s a good thing to mention about my past.',
    },
  ],
  socialIcons: [
    {
      href: 'https://github.com/totaldekadens',
      title: 'Follow on GitHub',
      icon: GitHubIcon,
    },
    {
      href: 'https://www.linkedin.com/in/angelica-moberg-skoglund-012aa2212/',
      title: 'Follow on LinkedIn',
      icon: LinkedInIcon,
    },
  ],
  email: 'angelica.moberg@hotmail.com',
}

// temporary
export const tech = [
  {
    _id: '64833401ac2e05420a99ed10',
    title: 'Tech / Stack',
    intro: '',
    slug: 'tech',
    categories: [
      {
        title: 'Frontend',
        tech: [
          {
            title: 'Next.js',
            logoLight: logoNextjsWhite,
            logoDark: logoNextjsBlack,
            description: '',
            _id: '64833401ac2e05420a99ed12',
          },
          {
            title: 'React',
            logoLight: logoReact,
            logoDark: logoReact,
            description: '',
            _id: '64833401ac2e05420a99ed13',
          },
          {
            title: 'TypeScript',
            logoLight: logoTypescript,
            logoDark: logoTypescript,
            description: '',
            _id: '64833401ac2e05420a99ed14',
          },
          {
            title: 'WordPress',
            logoLight: logoWordpress,
            logoDark: logoWordpress,
            description: '',
            _id: '64833401ac2e05420a99ed15',
          },
          {
            title: 'WooCommerce',
            logoLight: logoWoocommerce,
            logoDark: logoWoocommerce,
            description: '',
            _id: '64833401ac2e05420a99ed16',
          },
          {
            _id: '67b1bc64ea0d5dde9b2d8ba2',
            logoLight: logoExtjs,
            logoDark: logoExtjs,
            title: 'Ext.js',
            description: '',
            '_id:': '64833401ac2e05420a99ed17',
          },
        ],
        _id: '64833401ac2e05420a99ed11',
      },
      {
        title: 'CSS-Libraries',
        tech: [
          {
            title: 'Tailwind',
            logoLight: logoTailwind,
            logoDark: logoTailwind,
            description: '',
            _id: '64833401ac2e05420a99ed18',
          },
          {
            title: 'Mantine.dev',
            logoLight: logoMantinedev,
            logoDark: logoMantinedev,
            description: '',
            _id: '64833401ac2e05420a99ed19',
          },
          {
            title: 'Material UI',
            logoLight: logoMaterialui,
            logoDark: logoMaterialui,
            description: '',
            _id: '64833401ac2e05420a99ed1a',
          },
        ],
        _id: '64833401ac2e05420a99ed17',
      },
      {
        title: 'Backend/Database',
        tech: [
          {
            title: 'Node.js (Express.js)',
            logoLight: logoNodejs,
            logoDark: logoNodejs,
            description: '',
            _id: '64833401ac2e05420a99ed1c',
          },
          {
            title: 'PHP',
            logoLight: logoPhp,
            logoDark: logoPhp,
            description: '',
            _id: '64833401ac2e05420a99ed1d',
          },
          {
            title: 'MongoDB (Mongoose.js)',
            logoLight: logoMongodb,
            logoDark: logoMongodb,
            description: '',
            _id: '64833401ac2e05420a99ed1e',
          },
          {
            title: 'MySQL',
            logoLight: logoMysql,
            logoDark: logoMysql,
            description: '',
            _id: '64833401ac2e05420a99ed1f',
          },
          {
            title: 'Microsoft SQL Server Management ',
            logoLight: logoMicrosoftsqlserver,
            logoDark: logoMicrosoftsqlserver,
            description: '',
            _id: '3343rnjknj43bf43443444',
          },
        ],
        _id: '64833401ac2e05420a99ed1b',
      },
      {
        title: 'Other good things!',
        tech: [
          {
            title: 'Stripe.js',
            logoLight: logoStripe,
            logoDark: logoStripe,
            description: '',
            _id: '64833401ac2e05420a99ed21',
          },
          {
            title: 'Cypress.io',
            logoLight: logoCypressWhite,
            logoDark: logoCypressBlack,
            description: '',
            _id: '64833401ac2e05420a99ed22',
          },
          {
            title: 'BigCommerce',
            logoLight: logoBigcommerceWhite,
            logoDark: logoBigcommerceBlack,
            description: '',
            _id: '64833401ac2e05420a99ed23',
          },
          {
            title: 'Git',
            logoLight: logoGit,
            logoDark: logoGit,
            description: '',
            _id: '64833401ac2e05420a99ed24',
          },
          {
            title: 'Scrum',
            logoLight: logoScrum,
            logoDark: logoScrum,
            description: '',
            _id: '64833401ac2e05420a99ed25',
          },
        ],
        _id: '64833401ac2e05420a99ed20',
      },
    ],
    __v: 0,
  },
]
